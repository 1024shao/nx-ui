<template>
  <div class="dot-wrapper">
    <div class="dot-item" v-for="item in itemLen" :key="item">
      <a
        href="javascript:;"
        class="dot-lk"
        :style="{ 'backgroundColor': currentIndex === (item - 1) ? dotBgColor : 'white' }"
        @click="$emit('dotClick', item - 1)"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "nx-carousel-dot"
}
</script>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  dotBgColor: {
    type: String,
    default: '#008c8c'
  },
  itemLen: Number,
  currentIndex: Number
})
</script>

<style lang="less" scoped>
.dot-wrapper {
  width: 70px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 15px;
  text-align: center;
  font-size: 0;
  left: 50%;
  z-index: 1;
  margin-left: -39px;
  background-color: rgba(255, 255, 255, 0.3);
  .dot-item {
    display: inline-block;
    margin: 3px;
    .dot-lk {
      display: block;
      padding-top: 8px;
      width: 8px;
      height: 0;
      border-radius: 50%;
      background-color: #fff;
    }
  }
}
</style>