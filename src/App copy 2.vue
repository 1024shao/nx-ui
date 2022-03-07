<template>
  <div class="box">
    <nx-input placeholder="请输入用户名" />
    <nx-input placeholder="请输入用户名" type="password" showPassword v-model="state.username" />
    <nx-input placeholder="请输入用户名" type="password" disabled />
    <nx-input placeholder="请输入11" clearable v-model="state.username" />
    <nx-input placeholder="请输入用户名" v-model="state.username" />
  </div>
</template>


<script setup>
import { reactive } from 'vue';
const state = reactive({
  visible: false,
  a: false,
  username: ''
})

</script>
<style lang="less">
.box {
  width: 200px;
}
</style>
