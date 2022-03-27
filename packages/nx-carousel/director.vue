<template>
  <div class="director prev">
    <a href="javascript:;" @click="$emit('dirClick', 'prev')">&lt;</a>
  </div>
  <div class="director next">
    <a href="javascript:;" @click="$emit('dirClick', 'next')">&gt;</a>
  </div>
</template>

<script>
export default {
  name: 'NxCarouselDirector'
}
</script>
<script setup>
</script>

<style lang="less" scoped>
.director {
  position: absolute;
  top: 50%;
  z-index: 1;
  margin-top: -15px;
  width: 20px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  &.prev {
    left: 0;
  }
  &.next {
    right: 0;
  }
  a {
    color: white;
    text-decoration: none;
  }
}
</style>