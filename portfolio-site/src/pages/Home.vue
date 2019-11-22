<template>
  <Layout>
    <h1 class="home-title">
      <span class="first-letter">J</span>
      <span class="second-letter">F</span>
    </h1>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss" scoped>
  .home-title {
    font-size: 200px;
    letter-spacing: -30px;
    .first-letter {
      color: #FFA5A5;
    }
    .second-letter {
      color: #FFE79D;
    }
  }
</style>