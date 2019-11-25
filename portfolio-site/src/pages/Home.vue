<template>
  <Layout>
    <div class="home-initials">
      <span class="first-letter">Jake</span>
      <span class="second-letter">Fauvel</span>
    </div>
    <div class="home-title">
      <span>Software Engineer</span>
    </div>
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
  .home-initials {
    font-size: 50px;
    font-weight: 600;
    .first-letter {
      color: #FFA5A5;
    }
    .second-letter {
      color: #FFE79D;
    }
    @media only screen and (min-width: 375px) {
      font-size: 65px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 110px;
    }
    @media only screen and (min-width: 1280px) {
      font-size: 135px;
    }
  }
  .home-title {
    width: 80%;
    text-align: center;
    position: relative;
    top: -20px;
    font-size: 20px;
    font-weight: 300;
    @media only screen and (min-width: 375px) {
      font-size: 25px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 30px;
    }
    @media only screen and (min-width: 1280px) {
      font-size: 35px;
    }
  }
</style>