<template>
  <div class="box">
    <nx-radio label="0" v-model="state.gender">男</nx-radio>
    <nx-radio label="1" v-model="state.gender">女</nx-radio>
    <br />
    <nx-radio label="0" v-model="state.gender"></nx-radio>
    <nx-radio label="1" v-model="state.gender"></nx-radio>
  </div>
</template>


<script setup>
import { reactive } from 'vue';
const state = reactive({
  visible: false,
  a: false,
  username: '',
  active: true,
  gender: 0
})

</script>
<style lang="less">
.box {
  width: 200px;
}
</style>
