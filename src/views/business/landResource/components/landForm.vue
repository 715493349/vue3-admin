<template>
  <FullScreenCardPage :buttons="footerButtons" :blocks="cardBlocks">
    <template #basic>
      <!-- {{ isEdit ? '编辑模式：基本信息' : '新增模式：基本信息' }} -->
      <BasicInfo ref="landFormRef" :isEdit="isEdit" />
    </template>
    <template #media> {{ isEdit ? '编辑模式：媒体信息' : '新增模式：媒体信息' }} </template>
    <template #description> {{ isEdit ? '编辑模式：地块解读' : '新增模式：地块解读' }} </template>
    <template #other> {{ isEdit ? '编辑模式：其他信息' : '新增模式：其他信息' }} </template>
  </FullScreenCardPage>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import FullScreenCardPage, { FooterButton } from '@/components/develop/form-layout/index.vue'
  import { ElMessage } from 'element-plus'
  import BasicInfo from './form/basic.vue'

  const route = useRoute()
  const router = useRouter()
  const isEdit = computed(() => route.name === 'LandEdit')
  console.log(isEdit.value)
  const landFormRef = ref()

  const footerButtons: FooterButton[] = [
    { label: '取消', onClick: () => router.back() },
    { label: '暂存', type: 'default', onClick: () => ElMessage.success('暂存成功') },
    { label: '提交', type: 'primary', onClick: () => submitForm() }
  ]

  const submitForm = async () => {
    const formRef = landFormRef.value.formRef
    const formData = landFormRef.value.form
    formRef.validate((valid: boolean) => {
      if (valid) {
        console.log('验证通过，表单数据：', formData)
        // 可以传给 API 或存储在某处
      } else {
        console.warn('表单校验未通过')
      }
    })
  }

  const cardBlocks = [
    { title: '基本信息', slot: 'basic' },
    { title: '图片/视频/位置信息', slot: 'media' },
    { title: '地块解读', slot: 'description' },
    { title: '其他信息', slot: 'other' }
  ]
</script>
