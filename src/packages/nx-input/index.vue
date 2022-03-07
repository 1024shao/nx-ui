<template >
  <div class="nx-input" :class="[{ 'nx-input--suffix ': showSuffix }]">
    <input
      class="nx-input__inner"
      :type="type == 'password' ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      name="name"
      :disabled="disabled"
      :class="[{ 'is-disabled': disabled }]"
      :value="modelValue"
      @input="handleInput"
    />
    <span class="nx-input__suffix" v-if="showSuffix">
      <i class="nx-input_icon nx-icon-close" v-if="clearable && modelValue" @click="clear"></i>
      <i
        class="nx-input_icon nx-icon-visible"
        v-if="showPassword && type == 'password'"
        :class="{ ' nx-icon-visible-active': passwordVisible }"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>
<script>
import { computed, ref } from 'vue';

export default {
  name: 'NxInput'
}
</script>
<script setup>


const props = defineProps({
  placeholder: {
    type: String,
    default: '',
    required: false
  },
  type: {
    type: String,
    default: 'text',
    required: false
  },
  name: {
    type: String,
    default: '',
    required: false
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false
  },
  modelValue: {
    type: String,
    default: '',
    required: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  }
})
const showSuffix = computed(() => props.showPassword || props.clearable)
const emit = defineEmits(['update:modelValue'])
const clear = () => {
  emit('update:modelValue', '')
}
// 控制显示与否密码框
const passwordVisible = ref(false)
const handlePassword = () => {
  passwordVisible.value = !passwordVisible.value
}

const handleInput = ({ target: { value } }) => {
  emit('update:modelValue', value)
}

</script>
<style lang="less">
.nx-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .nx-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.nx-input--suffix {
  .nx-input__inner {
    padding-right: 30px;
  }
  .nx-input__suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .nx-icon-visible-active {
      color: #409eff;
    }
  }
}
</style>