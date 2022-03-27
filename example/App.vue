<template>
  <div class="box">
    <nx-carousel :initial="2" :duration="2000">
      <nx-carousel-item v-for="(item, index) in state.imgList" :key="index">
        <img :src="item.url" />
      </nx-carousel-item>
    </nx-carousel>
  </div>
</template>


<script setup>
import { reactive } from 'vue';

const state = reactive({
  imgList: [
    { url: 'example/assets/images/4.png' },
    { url: 'example/assets/images/2.png' },
    { url: 'example/assets/images/1.png' },
  ]
})

</script>
<style lang="less">
.box {
  width: 520px;
  height: 280px;
  margin: 20px auto;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
