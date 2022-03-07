<template>
  <!-- 遮罩层 -->
  <transition name="dialog-fade">
    <div class="nx-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="nx-dialog" :style="{ width, top }">
        <div class="nx-dialog__header">
          <slot name="title">
            <!--slot插槽不传入内容的时候渲染默认title  -->
            <span class="nx-dialog__title">{{ title }}</span>
          </slot>
          <button class="nx-dialog__headerbtn" @click="handleClose">
            <i class="nx-icon-close"></i>
          </button>
        </div>
        <div class="nx-dialog__body">
          <slot></slot>
        </div>
        <div class="nx-dialog__footer" v-show="slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'NxDialog'
}
</script>
<script setup>
import { defineProps, useSlots } from 'vue'
const slots = useSlots()
defineProps({
  title: {
    type: String,
    default: '提示',
    required: false
  },
  width: {
    type: String,
    default: '50%',
    required: false
  },
  top: {
    type: String,
    default: '15vh',
    required: false
  },
  visible: {
    type: Boolean,
    default: false,
    required: false
  }
})
const emit = defineEmits(['update:visible'])
const handleClose = (e) => {
  emit('update:visible', false)
}
</script>
<style lang="less" scoped>
.nx-dialog__wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  .nx-dialog {
    position: relative;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    margin: 0 auto;
    &__header {
      padding: 20px 20px 10px;
      .nx-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .nx-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .nx-icon-close {
          color: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .nx-button:first-child {
        margin-right: 15px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>