<template>
  <Layout class="contact-layout">
    <div class="contact-container">
      <div class="triangle-top"></div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  }
}
</script>
<style>
body {
  position: absolute;
  height: 100%;
  width: 100%;
}
.contact-layout footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 75px;
}
</style>
<style lang="scss" scoped>
@import './styles/contact';
</style>

