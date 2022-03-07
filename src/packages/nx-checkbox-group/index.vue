<template >
  <div class="nx-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'NxCheckboxGroup'
}
</script>
<script setup>
import { defineProps, defineEmits, getCurrentInstance, provide } from "vue";
const props = defineProps({
  modelValue: {
    type: Array
  }
})
const emit = defineEmits(['update:modelValue'])
provide('CheckboxGroup', getCurrentInstance().proxy)
</script>
