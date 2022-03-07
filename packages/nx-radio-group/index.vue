<template >
  <div class="nx-radio-group" ref="root">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'NxRadioGroup'
}
</script>
<script setup>
import { provide, defineProps, ref, getCurrentInstance } from 'vue'
const props = defineProps({
  modelValue: null
})
const emits = defineEmits(['update:modelValue'])
const root = ref(null)
provide('RadioGroup', getCurrentInstance().proxy)
</script>
<style lang="less">
</style>