<template>
  <ElForm ref="formRef" :model="form" :rules="rules" label-width="140px">
    <el-row :gutter="20">
      <el-col :sm="12" :md="12">
        <ElFormItem label="地块编号" prop="landNumber">
          <component
            :is="props.isEdit ? FormDisplay : ElInput"
            v-model="form.landNumber"
            :value="form.landNumber"
            placeholder="请输入地块编号"
          />
        </ElFormItem>
      </el-col>
      <el-col :sm="12" :md="12">
        <ElFormItem label="地块名称" prop="landName">
          <component
            :is="props.isEdit ? FormDisplay : ElInput"
            v-model="form.landName"
            :value="form.landName"
            placeholder="请输入地块名称"
          />
        </ElFormItem>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="12" :md="12">
        <ElFormItem label="所属行政区域" prop="administrativeRegion">
          <template v-if="props.isEdit">
            <FormDisplay :value="form.administrativeRegion" />
          </template>
          <template v-else>
            <ElSelect placeholder="请选择" v-model="form.administrativeRegion">
              <ElOption label="请选择" value="1" />
              <!-- 更多选项 -->
            </ElSelect>
          </template>
        </ElFormItem>
      </el-col>
      <el-col :sm="12" :md="12">
        <ElFormItem label="规划性质" prop="planningNature">
          <template v-if="props.isEdit">
            <FormDisplay :value="form.planningNature" />
          </template>
          <template v-else>
            <ElSelect placeholder="请选择" v-model="form.planningNature">
              <ElOption label="请选择" value="1" />
              <!-- 更多选项 -->
            </ElSelect>
          </template>
        </ElFormItem>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="12" :md="12">
        <ElFormItem label="地块面积（平方米）" prop="landArea">
          <component
            :is="props.isEdit ? FormDisplay : ElInput"
            v-model="form.landArea"
            :value="form.landArea"
            placeholder="请输入地块面积"
          />
        </ElFormItem>
      </el-col>
      <el-col :sm="12" :md="12">
        <ElFormItem label="容积率" prop="plotRatio">
          <component
            :is="props.isEdit ? FormDisplay : ElInput"
            v-model="form.plotRatio"
            :value="form.plotRatio"
            placeholder="请输入容积率"
          />
        </ElFormItem>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="12" :md="12">
        <ElFormItem label="所有权板块" prop="ownershipBlock">
          <component
            :is="props.isEdit ? FormDisplay : ElInput"
            v-model="form.ownershipBlock"
            :value="form.ownershipBlock"
            placeholder="请输入所有权板块"
          />
        </ElFormItem>
      </el-col>
      <el-col :sm="12" :md="12">
        <ElFormItem label="业务类型" prop="businessType">
          <component
            :is="props.isEdit ? FormDisplay : ElInput"
            v-model="form.businessType"
            :value="form.businessType"
            placeholder="请输入业务类型"
          />
        </ElFormItem>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="12" :md="12">
        <ElFormItem label="联系电话" prop="contactPhone">
          <component
            :is="props.isEdit ? FormDisplay : ElInput"
            v-model="form.contactPhone"
            :value="form.contactPhone"
            placeholder="请输入联系电话"
          />
        </ElFormItem>
      </el-col>
    </el-row>
  </ElForm>
</template>

<script setup lang="ts">
  import FormDisplay from '@/components/develop/form-display/index.vue'
  import { ElInput, ElSelect, ElOption, ElForm, ElFormItem, ElRow, ElCol } from 'element-plus'

  const props = defineProps<{
    isEdit: boolean
  }>()

  const formRef = ref(null)
  const form = reactive<any>({
    landNumber: '',
    landName: '',
    administrativeRegion: '',
    planningNature: '',
    landArea: '',
    plotRatio: '',
    ownershipBlock: '',
    businessType: '',
    contactPhone: ''
  })

  const rules = reactive<any>({
    landNumber: [{ required: true, message: '请输入地块编号', trigger: 'blur' }],
    landName: [{ required: true, message: '请输入地块名称', trigger: 'blur' }],
    administrativeRegion: [{ required: true, message: '请选择所属行政区域', trigger: 'blur' }],
    planningNature: [{ required: true, message: '请选择规划性质', trigger: 'blur' }],
    landArea: [{ required: true, message: '请输入地块面积（平方米）', trigger: 'blur' }],
    plotRatio: [{ required: true, message: '请输入容积率', trigger: 'blur' }],
    ownershipBlock: [{ required: true, message: '请输入所有权板块', trigger: 'blur' }],
    businessType: [{ required: true, message: '请输入业务类型', trigger: 'blur' }],
    contactPhone: [{ required: true, message: '请输入联系电话', trigger: 'blur' }]
  })

  defineExpose({
    formRef,
    form
  })
</script>
