<template>
  <div class="box">
    <nx-switch v-model="state.active" activeColor="#008c8c" inactiveColor="blue" name="username"></nx-switch>
  </div>
</template>


<script setup>
import { reactive } from 'vue';
const state = reactive({
  visible: false,
  a: false,
  username: '',
  active: true
})

</script>
<style lang="less">
.box {
  width: 200px;
}
</style>
