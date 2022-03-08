<template>
  <nx-button @click="state.visible = true" type="primary">弹出对话款</nx-button>
  <!-- :visible.syn 等同于 :visible = 'visible' @update:visible='fn'-->
  <nx-dialog width="50%" top="100px" v-model:visible="state.visible">
    <template v-slot:title>
      <h3>我是标题</h3>
    </template>
    我是内容
    <template #footer>
      <nx-button @click="state.visible = false">取消</nx-button>
      <nx-button type="primary" @click="state.visible = false">确定</nx-button>
    </template>
  </nx-dialog>
</template>


<script setup>
import { reactive } from 'vue';
const state = reactive({
  visible: false,
  a: false
})


</script>
<style lang="less">
.container {
  width: 100px;
  margin: 20px auto;
  text-align: center;
  display: flex;
  .nx-button {
    margin: 20px;
  }
}
</style>
