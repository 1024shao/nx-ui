<template>
  <div class="nx-carousel" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <div class="nx-carousel-inner">
      <nx-carousel-dot
        :itemLen="itemLen"
        :dotBgColor="dotBgColor"
        :currentIndex="currentIndex"
        @dotClick="dotClick"
      />
      <nx-director @dirClick="setIndex" />
      <slot></slot>
    </div>
  </div>
</template>

<script>// @ts-nocheck
import { getCurrentInstance, onMounted, onUnmounted, reactive, toRefs } from 'vue';
import NxCarouselDot from './dot.vue'
import NxDirector from './director.vue'
export default {
  name: 'NxCarousel',
  components: {
    NxCarouselDot,
    NxDirector
  },
  props: {
    duration: {
      type: Number,
      default: 2000
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    initial: {
      type: Boolean,
      default: 0
    },
    hasDot: {
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: true
    },
    dotBgColor: String
  },
  setup (props) {
    const state = reactive({
      currentIndex: props.initial,
      // 用于控制当前显示的 carousel-item
      time: null, // 计数器,
    })
    const instance = getCurrentInstance()
    const itemLen = instance.slots.default()[0].children.length  // 获取 carousel-item 的个数

    const setIndex = (dir) => {
      switch (dir) {
        case 'next':
          state.currentIndex = (state.currentIndex + 1) % itemLen
          break
        case 'prev':
          state.currentIndex = state.currentIndex - 1 >= 0 ? state.currentIndex - 1 : itemLen - 1
          break
      }
    }
    const autoPlay = () => {
      if (props.autoplay) {
        state.time = setInterval(() => {
          setIndex('next')
        }, props.duration)
      }
    }
    const mouseenter = () => {
      clearInterval(state.time)
      state.time = null
    }
    const mouseleave = () => {
      autoPlay()
    }
    const dotClick = (index) => {
      state.currentIndex = index
    }

    onMounted(() => {
      autoPlay()
    })

    onUnmounted(() => {
      clearInterval(state.time)
      state.time = null
    })
    return {
      ...toRefs(state),
      itemLen,
      mouseenter,
      mouseleave,
      dotClick,
      setIndex
    }
  }
}
</script>

<style lang="less" scoped>
.nx-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .nx-carousel-inner {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
}
</style>