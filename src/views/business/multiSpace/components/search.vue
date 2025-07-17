<template>
  <ArtSearchBar
    v-model:filter="searchFormState"
    label-width="120px"
    :items="formItems"
    @reset="handleReset"
    @search="handleSearch"
  />
</template>

<script setup lang="ts">
  import { SearchFormItem } from '@/types'

  interface Emits {
    (e: 'update:modelValue', value: any): void
    (e: 'search'): void
    (e: 'reset'): void
  }

  const emit = defineEmits<Emits>()

  // 定义表单搜索初始值
  const initialSearchState = {
    industrySpaceNumber: '',
    industrySpaceName: '',
    administrativeRegion: '',
    status: '',
    spaceType: ''
  }

  const searchFormState = ref({ ...initialSearchState })

  // 重置表单
  const handleReset = () => {
    searchFormState.value = { ...initialSearchState }
    emit('update:modelValue', { ...initialSearchState })
    emit('reset')
  }

  // 搜索处理
  const handleSearch = () => {
    console.log('搜索参数:', searchFormState.value)
    emit('search')
  }

  // 表单配置项
  const formItems: SearchFormItem[] = [
    {
      label: '空间资源编号',
      prop: 'industrySpaceNumber',
      type: 'input',
      config: {
        clearable: true
      }
    },
    {
      label: '空间资源名称',
      prop: 'industrySpaceName',
      type: 'input',
      config: {
        clearable: true
      }
    },
    {
      label: '行政区',
      prop: 'administrativeRegion',
      type: 'select',
      options: [
        { label: '东城区', value: '东城区' },
        { label: '西城区', value: '西城区' },
        { label: '朝阳区', value: '朝阳区' },
        { label: '海淀区', value: '海淀区' },
        { label: '丰台区', value: '丰台区' },
        { label: '石景山区', value: '石景山区' },
        { label: '房山区', value: '房山区' },
        { label: '通州区', value: '通州区' }
      ],
      config: {
        clearable: true
      }
    },
    {
      label: '状态',
      prop: 'status',
      type: 'select',
      config: {
        clearable: true
      },
      options: [
        { label: '待审核', value: '1' },
        { label: '已驳回', value: '2' },
        { label: '已发布', value: '3' },
        { label: '已下架', value: '4' },
        { label: '已发布', value: '5' },
        { label: '草稿', value: '6' }
      ]
    },
    {
      label: '空间类型',
      prop: 'spaceType',
      type: 'select',
      options: [
        { label: '公寓', value: '1' },
        { label: '底商', value: '2' },
        { label: '清荷驿站', value: '3' }
      ]
    }
  ]
</script>
