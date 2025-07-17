<template>
  <ArtSearchBar
    v-model:filter="searchFormState"
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
    landNumber: '',
    administrativeRegion: '',
    status: '',
    planningNature: ''
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
      label: '地块编号',
      prop: 'landNumber',
      type: 'input',
      config: {
        clearable: true
      }
    },
    {
      label: '行政区',
      prop: 'administrativeRegion',
      type: 'input',
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
        //待审核、已驳回、已发布、已下架、已发布、草稿、是数字类型的
        { label: '待审核', value: '1' },
        { label: '已驳回', value: '2' },
        { label: '已发布', value: '3' },
        { label: '已下架', value: '4' },
        { label: '已发布', value: '5' },
        { label: '草稿', value: '6' }
      ]
    },
    {
      label: '规划性质',
      prop: 'planningNature',
      type: 'input',
      config: {
        clearable: true
      }
    }
  ]
</script>
