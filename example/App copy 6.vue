<template>
  <div class="box">
    <nx-checkbox v-model="state.active">是否选中</nx-checkbox>
    <br />
    <nx-checkbox-group v-model="state.hobby">
      <nx-checkbox label="1"></nx-checkbox>
      <nx-checkbox label="2"></nx-checkbox>
      <nx-checkbox label="3"></nx-checkbox>
    </nx-checkbox-group>
  </div>
</template>


<script setup>
import { reactive } from 'vue';
const state = reactive({
  visible: false,
  a: false,
  username: '',
  active: true,
  gender: 0,
  hobby: ['1', '2', '3']
})

</script>
<style lang="less">
.box {
  width: 200px;
}
</style>
