<template >
  <div class="nx-switch" @click="handleClick" :class="{ 'is-checked': modelValue }">
    <span class="nx-switch__core" ref="core">
      <span class="nx-switch__button"></span>
    </span>
    <input type="hidden" :name="name" value="modelValue" />
  </div>
</template>
<script>
export default {
  name: 'NxSwitch'
}
</script>
<script setup>
import { defineProps, ref, watchEffect } from 'vue';
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true
  },
  activeColor: {
    type: String,
    default: ''
  },
  inactiveColor: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }

})
// 控制开关的颜色
const core = ref(null)
watchEffect(() => {
  if ((props.activeColor || props.inactiveColor) && core.value) {
    const color = props.modelValue ? props.activeColor : props.inactiveColor
    const coreEl = core.value
    coreEl.style.borderColor = color
    coreEl.style.backgroundColor = color
  }
})
const emit = defineEmits(['update:modelValue'])
const handleClick = (e) => {
  emit('update:modelValue', !props.modelValue)
}
</script>
<style lang="less">
.nx-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .nx-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .nx-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .nx-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .nx-switch__button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.nx-switch_input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>