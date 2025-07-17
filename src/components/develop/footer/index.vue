<template>
  <div class="full-screen-container">
    <div class="content">
      <slot />
    </div>
    <div class="footer">
      <el-button
        v-for="(btn, idx) in buttons"
        :key="idx"
        :type="btn.type || 'default'"
        :disabled="btn.disabled"
        @click="btn.onClick"
      >
        {{ btn.label }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  export interface FooterButton {
    label: string
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
    disabled?: boolean
    onClick: () => void
  }

  const { buttons = [] } = defineProps<{
    buttons: FooterButton[]
  }>()
</script>

<style scoped>
  .full-screen-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 110px);
  }

  .content {
    flex: 1;
    padding-bottom: 80px;
    overflow: auto;
  }

  .footer {
    position: relative;
    z-index: 10;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    background-color: var(--el-bg-color);
    border-top: 1px solid var(--el-border-color);
    box-shadow: 0 -1px 4px rgb(0 0 0 / 5%);
  }

  @media (width <= 768px) {
    .footer {
      flex-wrap: wrap;
      height: auto;
      padding: 16px;
    }
  }
</style>
