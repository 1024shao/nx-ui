<template >
  <button
    class="nx-button"
    :class="[`nx-button-${type}`, {
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }]"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-show="icon" :class="[icon]"></i>
    <span v-if="slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'NxButton'
}
</script>
<script setup>
import { defineProps, useSlots } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    required: false
  },
  plain: {
    type: Boolean,
    default: false,
    required: false
  },
  round: {
    type: Boolean,
    default: false,
    required: false
  },
  circle: {
    type: Boolean,
    default: false,
    required: false
  },
  icon: {
    type: String,
    default: '',
    required: false
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false
  }
})
// 相当于 vue2.x 中的 $slots 
const slots = useSlots()
const emits = defineEmits(['click'])
// 给nx-button 添加Emit回调,让外部无需使用@click.native 来触发点击事件
const handleClick = (e) => {
  emits('click', e)
}

</script>

<style lang="less">
.nx-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.nx-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.nx-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.nx-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.nx-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.nx-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
// 朴素按钮样式
.nx-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.nx-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.nx-button-success.is-plain {
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.nx-button-info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.nx-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.nx-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round属性
.nx-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// circle属性
.nx-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// icon配套样式
.nx-button [class*="nx-icon-"] + span {
  margin-left: 5px;
}
// disabled属性
.nx-button.is-disabled {
  cursor: no-drop;
}
</style>