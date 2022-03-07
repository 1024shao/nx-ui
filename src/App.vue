<template>
  <div class="box">
    <nx-form :model="state.model" labelWidth="80px">
      <nx-form-item label="用户名">
        <nx-input placeholder="请输入用户名"></nx-input>
      </nx-form-item>
      <nx-form-item label="选择">
        <nx-switch v-model="state.model.active"></nx-switch>
      </nx-form-item>
    </nx-form>
  </div>
</template>


<script setup>
import { reactive } from 'vue';
const state = reactive({
  visible: false,
  a: false,
  gender: 0,
  hobby: ['1', '2', '3'],
  model: {
    username: '',
    active: true,
  }
})

</script>
<style lang="less">
.box {
  width: 200px;
}
</style>
