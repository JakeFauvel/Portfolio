<template>
  <Layout class="page-layout">
    <div class="home-container">
      <div class="triangle-top"></div>
      <div class="triangle-top-right"></div>
      <div class="home-initials">
        <span class="first-letter">Jake</span>
        <span class="second-letter">Fauvel</span>
      </div>
      <div class="home-title">
        <span>Software Engineer</span>
      </div>
      <div class="hexagon-bottom-left"></div>
      <div class="circle-bottom-right"></div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Jake Fauvel - Software Engineer - Brighton, East Sussex'
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/orbit';
  @import './styles/home';
  @import '../styles/rightAnimation';
</style>