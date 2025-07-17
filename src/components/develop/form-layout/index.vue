<template>
  <div class="full-screen-container">
    <div class="content">
      <div class="crad-list">
        <template v-for="(block, index) in blocks" :key="index">
          <el-row class="content-body">
            <el-col :xl="24" :lg="24" :xs="24">
              <div class="custom-card art-custom-card visitor-insights">
                <div class="custom-card-header">
                  <img src="@imgs/land/title-logo.png" class="title-icon" alt="ico" />
                  <span class="title">{{ block.title }}</span>
                </div>
                <div class="card-slot">
                  <slot :name="block.slot" />
                </div>
              </div>
            </el-col>
          </el-row>
        </template>
      </div>
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

  defineProps<{
    buttons: FooterButton[]
    blocks: {
      title: string
      slot: string // 对应插槽名
    }[]
  }>()
</script>

<style scoped lang="scss">
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

  .crad-list {
    .content-body {
      padding: 10px 0;
    }

    :deep(.custom-card) {
      background: var(--art-main-bg-color);
      border-radius: calc(var(--custom-radius) + 4px) !important;

      .card-slot {
        margin: 15px 100px 20px;
      }
    }

    :deep(.custom-card-header) {
      display: flex;
      align-items: center;
      padding: 18px 20px;

      .title-icon {
        width: 14px;
        height: 14px;
        margin: 0 5px;
      }

      .title {
        font-size: 16px;
        font-weight: 400;
        color: var(--art-text-gray-900);
      }
    }

    .el-card {
      border: 1px solid #e8ebf1;
      box-shadow: none;
    }
  }
</style>
