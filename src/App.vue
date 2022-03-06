<template>
  <div class="container">
    <Nx-Button @click="fn" disabled>这是内容1</Nx-Button>
    <Nx-Button type="primary">这是内容1</Nx-Button>
    <Nx-Button type="danger">这是内容2</Nx-Button>
    <Nx-Button type="warning">这是内容3</Nx-Button>
    <Nx-Button type="success">这是内容3</Nx-Button>
    <Nx-Button type="info">这是内容3</Nx-Button>
  </div>
  <div class="container">
    <Nx-Button plain>这是内容1</Nx-Button>
    <Nx-Button plain type="primary">这是内容1</Nx-Button>
    <Nx-Button plain type="danger">这是内容2</Nx-Button>
    <Nx-Button plain type="warning">这是内容3</Nx-Button>
    <Nx-Button plain type="success">这是内容3</Nx-Button>
    <Nx-Button plain type="info" round>这是内容3</Nx-Button>
  </div>
  <div class="container">
    <Nx-Button round plain>这是内容1</Nx-Button>
    <Nx-Button round plain type="primary">这是内容1</Nx-Button>
    <Nx-Button round plain type="danger">这是内容2</Nx-Button>
    <Nx-Button round plain type="warning">这是内容3</Nx-Button>
    <Nx-Button round plain type="success">这是内容3</Nx-Button>
    <Nx-Button round plain type="info">这是内容3</Nx-Button>
  </div>
  <div class="container">
    <Nx-Button circle plain>1</Nx-Button>
    <Nx-Button circle plain type="primary">1</Nx-Button>
    <Nx-Button circle plain type="danger">2</Nx-Button>
    <Nx-Button circle plain type="warning">3</Nx-Button>
    <Nx-Button circle plain type="success">4</Nx-Button>
    <Nx-Button circle plain type="info">5</Nx-Button>
  </div>
  <div class="container">
    <Nx-Button icon="nx-icon-delete" circle plain></Nx-Button>
    <Nx-Button icon="nx-icon-delete" circle plain type="primary"></Nx-Button>
    <Nx-Button icon="nx-icon-delete" circle plain type="danger"></Nx-Button>
    <Nx-Button icon="nx-icon-delete" circle plain type="warning"></Nx-Button>
    <Nx-Button icon="nx-icon-delete" circle plain type="success"></Nx-Button>
    <Nx-Button icon="nx-icon-delete" circle plain type="info"></Nx-Button>
  </div>
</template>


<script setup>
const fn = (e) => {
  console.log(e.target, 1)
}
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
