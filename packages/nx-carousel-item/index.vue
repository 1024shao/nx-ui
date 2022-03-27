<template>
  <transition>
    <div class="nx-carousel-item" v-show="state.currentIndex == state.selfIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NxCarouselItem'
}
</script>
<script setup>
import { getCurrentInstance, isReactive, reactive, watch } from 'vue'
const instance = getCurrentInstance()
const state = reactive({
  selfIndex: instance.vnode.key,
  currentIndex: instance.parent.ctx.currentIndex,
})

watch(() => {
  return instance.parent.ctx.currentIndex
}, (value) => {
  state.currentIndex = value
})
console.log('boolean', isReactive(instance))



</script>

<style lang="less" scoped>
.nx-carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s linear;
}

.v-enter-active {
  transform: translateX(100%);
}
.v-enter-to {
  transform: translateX(0);
}
.v-leave-active {
  transform: translateX(0);
}

.v-leave-to {
  transform: translateX(-100%);
}
</style>