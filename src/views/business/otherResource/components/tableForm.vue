<template>
  <div class="art-full-height">
    <EnteringSearch @reset="resetSearchParams" @search="getDataByPage" />

    <ElCard class="art-table-card" shadow="never">
      <!-- 表格头部 -->
      <ArtTableHeader v-model:columns="columnChecks" @refresh="refresh">
        <template #left v-if="showDelete">
          <div class="toolbar-left">
            <ElButton type="primary" @click="handleAdd" v-ripple>
              <ElIcon><Plus /></ElIcon>&nbsp; 新增
            </ElButton>
            <ArtExcelImport
              @import-success="handleImportSuccess"
              @import-error="handleImportError"
            />
          </div>
        </template>
      </ArtTableHeader>

      <!-- 表格 -->
      <ArtTable
        :loading="loading"
        :data="data"
        :columns="columns"
        :pagination="pagination"
        :table-config="{ rowKey: 'id' }"
        :layout="{ marginTop: 10 }"
        @pagination:size-change="handleSizeChange"
        @pagination:current-change="handleCurrentChange"
      >
      </ArtTable>
    </ElCard>
  </div>
</template>

<script setup lang="ts">
  import ArtButtonTable from '@/components/core/forms/art-button-table/index.vue'
  import { ElMessageBox, ElMessage, ElTag } from 'element-plus'
  import { useTable } from '@/composables/useTable'
  import { UserService } from '@/api/usersApi'
  import EnteringSearch from '../components/search.vue'

  defineOptions({ name: 'LandEntering' })

  type MultiSpaceItem = MultiSpace.MultiSpaceDataList.MultiSpaceDataItem
  const { getUserList } = UserService // 用户列表 API

  // 控制删除按钮是否显示
  const { showDelete = true } = defineProps<{ showDelete?: boolean }>()

  const STATUS_CONFIG = {
    1: { type: 'success' as const, text: '待审核' },
    2: { type: 'info' as const, text: '已驳回' },
    3: { type: 'warning' as const, text: '已发布' },
    4: { type: 'danger' as const, text: '已下架' },
    5: { type: 'danger' as const, text: '已发布' },
    6: { type: 'danger' as const, text: '草稿' }
  } as const

  const getUserStatusConfig = (status: string | number) => {
    return (
      STATUS_CONFIG[status as unknown as keyof typeof STATUS_CONFIG] || {
        type: 'info' as const,
        text: '未知'
      }
    )
  }

  // 导入
  const handleImportSuccess = (data: any[]) => {
    ElMessage.success(`导入 ${data.length} 条数据成功`)
  }

  const handleImportError = (error: Error) => {
    ElMessage.error(`导入失败：${error.message}`)
  }

  const {
    columns, // 表格列配置
    columnChecks, // 列配置
    tableData: data, // 表格数据
    isLoading: loading, // 是否加载中
    paginationState: pagination, // 分页状态
    searchData: getDataByPage, // 获取分页数据
    resetSearch: resetSearchParams, // 重置搜索参数
    onPageSizeChange: handleSizeChange, // 分页大小变更
    onCurrentPageChange: handleCurrentChange, // 分页切换
    refreshAll: refresh, // 刷新所有数据
    refreshAfterRemove: refreshAfterDelete // 智能删除后刷新
  } = useTable<MultiSpaceItem>({
    core: {
      apiFn: getUserList, // 获取用户列表 API
      apiParams: {
        landNumber: '',
        administrativeRegion: '',
        status: '',
        planningNature: '',
        current: 1,
        size: 20
      },
      columnsFactory: () => [
        { type: 'index', width: 60, label: '序号', align: 'center' },
        { prop: 'industrySpaceNumber', label: '地块编号', align: 'center' },
        { prop: 'industrySpaceName', label: '空间资源名称', align: 'center' },
        { prop: 'administrativeRegion', label: '行政区', align: 'center' },
        { prop: 'spaceType', label: '空间类型', align: 'center' },
        { prop: 'roomArea', label: '房间面积（平方米）', align: 'center' },
        { prop: 'totalBuildingArea', label: '总建筑面积（平方米）', align: 'center' },
        {
          prop: 'status',
          label: '状态',
          align: 'center',
          formatter: (row) => {
            const statusConfig = getUserStatusConfig(row.status)
            return h(ElTag, { type: statusConfig.type }, () => statusConfig.text)
          }
        },
        {
          prop: 'operation',
          label: '操作',
          align: 'center',
          ...(!showDelete ? { width: 180 } : {}),
          fixed: 'right', // 固定列
          formatter: (row) =>
            h('div', [
              h(ArtButtonTable, {
                type: 'edit',
                title:
                  row.status === 1
                    ? '撤回'
                    : row.status === 2
                      ? '编辑'
                      : row.status === 3
                        ? '下架'
                        : '编辑',
                onClick: () => handleEdit(row)
              }),
              showDelete &&
                h(ArtButtonTable, {
                  type: 'delete',
                  title: '删除',
                  onClick: () => deleteUser(row)
                })
            ])
        }
      ]
    }
  })

  // 添加用户
  const handleAdd = () => {
    ElMessage.success('添加用户功能待实现')
  }

  // 编辑用户
  const handleEdit = (row: MultiSpaceItem) => {
    ElMessage.success(`编辑用户功能待实现: ${row.id}`)
  }

  /**
   * 删除用户
   */
  const deleteUser = (row: MultiSpaceItem): void => {
    console.log('删除用户:', row)
    ElMessageBox.confirm(`确定要注销该用户吗？`, '注销用户', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'error'
    }).then(() => {
      ElMessage.success('注销成功')
      refreshAfterDelete() // 智能删除后刷新
    })
  }
</script>

<style lang="scss" scoped>
  .toolbar-left {
    display: flex;
    gap: 8px;
    align-items: center;

    .table-actions {
      margin-left: 8px;
    }
  }
</style>
