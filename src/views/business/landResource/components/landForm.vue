<template>
  <!-- <ArtBreadcrumb /> -->
  <div class="cards">
    <!-- <div class="form-footer">
      <el-button @click="goBack">返回</el-button>
      <el-button type="primary" @click="handleSubmit">{{ isEdit ? '保存' : '新增' }}</el-button>
    </div> -->

    <ElRow :gutter="24">
      <ElCol :xs="24" :sm="12" :md="24">
        <ArtStatsCard
          title="地块数量"
          description="10dsadad0"
          :iconSize="32"
          iconBgColor="#409eff"
          showArrow
        />
      </ElCol>
    </ElRow>
  </div>
</template>

<script setup lang="ts">
  // import { onMounted, reactive } from 'vue'
  // import { useRoute, useRouter } from 'vue-router'

  // // 获取路由信息
  // const route = useRoute()
  // const router = useRouter()

  // // 判断当前是编辑还是新增
  // const isEdit = route.name === 'LandEdit'

  // // 表单数据
  // const formData = reactive({
  //   landName: '',
  //   landArea: ''
  //   // 其他字段
  // })

  // // 加载编辑时的数据
  // const loadData = async (id: string) => {
  //   console.log(id)
  // }

  // // 提交表单
  // const handleSubmit = async () => {}

  // // 组件加载时判断是编辑还是新增
  // onMounted(() => {
  //   if (isEdit) {
  //     loadData(route.params.id as string) // 编辑时加载数据
  //   }
  // })

  // // 返回上一页
  // const goBack = () => {
  //   router.go(-1) // 或者直接跳回列表页
  // }
</script>

<style scoped lang="scss"></style>
