<!-- components/FormDisplay.vue -->
<template>
  <div class="form-display">
    {{ value || '-' }}
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    value: string | number
  }>()
</script>

<style scoped>
  .form-display {
    padding-left: 8px;
    font-size: 14px;
    line-height: 32px;
    color: #606266;
  }
</style>
