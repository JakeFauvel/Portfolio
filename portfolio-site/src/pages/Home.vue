<template>
  <Layout class="page-layout">
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
  .page-layout {
    width: 100%;
  }
  .triangle-top-right {
    width: 350px;
    height: 141px;
    background: #9DC2FF;
    position: absolute;
    right: -155px;
    top: -35px;
    transform: rotate(35deg);
  }
  .home-initials {
    width: 80%;
    font-size: 65px;
    font-weight: 600;
    text-align: center;
    word-wrap: break-word;
    .first-letter {
      color: #FFA5A5;
      display: block;
      line-height: 50px;
    }
    .second-letter {
      color: #FFE79D;
      display: block;
      line-height: 50px;
    }
    @media only screen and (min-width: 375px) {
      font-size: 65px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 110px;
      .first-letter, .second-letter {
        display: initial;
        line-height: initial;
      }
    }
    @media only screen and (min-width: 1280px) {
      font-size: 135px;
    }
  }
  .home-title {
    width: 80%;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    position: relative;
    top: 10px;
    @media only screen and (min-width: 375px) {
      font-size: 25px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 30px;
      top: -30px;
    }
    @media only screen and (min-width: 1280px) {
      font-size: 35px;
    }
  }
  .hexagon-bottom-left {
    position: absolute;
    width: 300px;
    left: -230px;
    bottom: -75px;
    height: 180px;
    background-color: #F6C5A8;
    margin: 86.60px 0;
  }
  .hexagon-bottom-left:before,
  .hexagon-bottom-left:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
  }
  .hexagon-bottom-left:before {
    bottom: 100%;
    border-bottom: 86.60px solid #F6C5A8;
  }
  .hexagon-bottom-left:after {
    top: 100%;
    width: 0;
    border-top: 86.60px solid #F6C5A8;
  }
  .circle-bottom-right {
    width: 250px;
    height: 250px;
    background: #F2D4FF;
    border-radius: 200px;
    position: absolute;
    right: -170px;
    bottom: 10px;
  }
</style>