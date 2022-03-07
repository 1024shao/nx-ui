<template >
  <div class="nx-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'NxForm'
}
</script>
<script setup>
import { defineProps, getCurrentInstance, provide } from "vue";
const props = defineProps({
  model: {
    type: Object,
    required: true
  },
  labelWidth: {
    type: String,
    default: '80px'
  }
})
provide('Form', getCurrentInstance().proxy)

</script>
<style lang="less">
</style>