<template >
  <label class="nx-radio" :class="{ 'is-checked': label == value }">
    <span class="nx-radio__input">
      <span class="nx-radio__inner"></span>
      <!-- 指定name属性是为了提交表单的方便 后端需要获取键值  -->
      <!-- 使用 <ne-radio label='1' v-model='gender'/ >  -->
      <!-- label是当前radio标签的值 v-model绑定的gender是收集的数据 -->
      <!-- 当v-model中传入的modelValue = value的时候radio会被选中 -->
      <input type="radio" class="nx-radio__original" :value="label" :name="name" v-model="model" />
    </span>
    <span class="nx-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
<script>
export default {
  name: 'NxRadio'
}
</script>
<script setup>
import { defineProps, computed, inject } from 'vue'
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  label: {
    type: [String, Boolean, Number],
    default: ''
  },
  modelValue: null
})
const RadioGroup = inject('RadioGroup')
// 判断是否存在radio-group
const value = computed(() => {
  return RadioGroup ? RadioGroup.modelValue : props.modelValue
})

console.log(RadioGroup, 'child')
// RadioGroup.$emit('update:modelValue', 3)
const emits = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    if (RadioGroup) {
      RadioGroup.$emit('update:modelValue', newValue)
    } else {
      emits('update:modelValue', newValue)
    }
  }
})
</script>
<style lang="less">
.nx-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .nx-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .nx-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .nx-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .nx-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.nx-radio.is-checked {
  .nx-radio__input {
    .nx-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .nx-radio_label {
    color: #409eff;
  }
}
</style>