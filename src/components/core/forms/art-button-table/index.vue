<!-- 表格按钮 -->
<template>
  <div
    :class="['btn-text', buttonClass]"
    :style="{ backgroundColor: buttonBgColor, color: iconColor }"
    @click="handleClick"
  >
    <i
      v-if="iconContent"
      class="iconfont-sys"
      v-html="iconContent"
      :style="{ color: iconColor }"
    ></i>
    <!-- 标题 -->
    <span v-if="showTitle" class="btn-title" :style="{ color: iconColor }">
      {{ computedTitle }}
    </span>
  </div>
</template>

<script setup lang="ts">
  import { BgColorEnum } from '@/enums/appEnum'

  defineOptions({ name: 'ArtButtonTable' })

  interface Props {
    /** 按钮类型 */
    type?: 'add' | 'edit' | 'delete' | 'more' | 'view'
    /** 按钮图标 */
    icon?: string
    /** 按钮样式类 */
    iconClass?: BgColorEnum
    /** icon 颜色 */
    iconColor?: string
    /** 按钮背景色 */
    buttonBgColor?: string
    /** 按钮标题 */
    title?: string
    /** 是否显示标题 */
    showTitle?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    showTitle: true
  })

  const emit = defineEmits<{
    (e: 'click'): void
  }>()

  // 默认按钮配置
  const defaultButtons = {
    add: { icon: '&#xe602;', color: BgColorEnum.PRIMARY, title: '新增' },
    edit: { icon: '&#xe642;', color: BgColorEnum.SECONDARY, title: '编辑' },
    delete: { icon: '&#xe783;', color: BgColorEnum.ERROR, title: '删除' },
    view: { icon: '&#xe689;', color: BgColorEnum.INFO, title: '查看' },
    more: { icon: '&#xe6df;', color: '', title: '更多' }
  } as const

  // 获取图标内容
  const iconContent = computed(() => {
    return props.icon || (props.type ? defaultButtons[props.type]?.icon : '') || ''
  })

  // 获取按钮样式类
  const buttonClass = computed(() => {
    return props.iconClass || (props.type ? defaultButtons[props.type]?.color : '') || ''
  })

  // 计算标题文字
  const computedTitle = computed(() => {
    return props.title || (props.type ? defaultButtons[props.type]?.title : '') || ''
  })

  const handleClick = () => {
    emit('click')
  }
</script>

<style scoped lang="scss">
  .btn-text {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 34px;
    height: 34px;
    padding: 0 10px;
    margin-right: 10px;
    font-size: 13px;
    cursor: pointer;
    background-color: rgba(var(--art-gray-200-rgb), 0.7);
    border-radius: 6px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: rgba(var(--art-gray-300-rgb), 0.5);
    }

    // 新增标题样式
    .btn-title {
      margin-left: 4px;
      font-size: 13px;
      line-height: 1;
    }
  }
</style>
