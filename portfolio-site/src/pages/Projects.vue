<template>
  <Layout class="projects-layout">
    <div class="about-container"></div>
  </Layout>
</template>
<script>
export default {
  metaInfo: {
    title: 'Projects'
  }
}
</script>
<style>
body {
  position: absolute;
  height: 100%;
  width: 100%;
}
.projects-layout footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 75px;
}
</style>
<style lang="scss" scoped>
@import './styles/projects';
</style>

