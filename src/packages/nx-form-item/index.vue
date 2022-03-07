<template>
  <div class="nx-form-item">
    <label class="nx-form-item__label" :style="{ width: Form.labelWidth }">{{ label }}</label>
    <div class="nx-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NxFormItem'
}
</script>
<script setup>
import { defineProps, inject } from "vue";
const props = defineProps({
  label: {
    type: String,
    default: ''
  }
})
const Form = inject('Form')
</script>
<style lang="less">
.nx-form-item {
  margin-bottom: 22px;
  &::before,
  &::after {
    display: table;
    content: "";
  }
  .nx-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .nx-form-item__content {
    line-height: 40px;
    overflow: hidden;
    position: relative;
    font-size: 14px;
    &::before,
    &::after {
      display: table;
      content: "";
    }
  }
}
</style>