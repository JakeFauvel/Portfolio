<!-- Suppress ALL -->
<template>
  <Layout class="about-layout">
    <div class="about-container">
      <div class="triangle-top"></div>
      <div class="circle-top-right"></div>
      <div class="hexagon-left"></div>
      <div class="triangle-left"></div>

      <img class="jf-image" src="../assets/jf.jpg" alt="Jake Fauvel">
      <h1 class="about-title">Hey, I'm Jake.</h1>
      <div class="about-info">
        I'm currently working at <a href="https://community.musictribe.com/" target="_blank" style="color: #DA0402;">Music Tribe</a> in Willich, Germany. Creating mobile applications for their products.

        <p>A recent graduate from the University of Brighton, I obtained first class honours in Digital Media Development.</p>

        <p>I specialise in full-stack development and the following technologies:</p>

        <div class="list-block">
          <ul class="block-one">
            <li>Laravel</li>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>Vue.js</li>
            <li>Mobile App Development</li>
          </ul>

          <ul class="block-two">
            <li>HTML, CSS + Sass</li>
            <li>API's / AJAX</li>
            <li>Relational databases</li>
            <li>Cordova</li>
            <li>Atlassian suite, Git, AWS</li>
          </ul>
        </div>

        <p>However, my previous role at <a href="https://tillo.io" target="_blank" style="color: #5854E5;">Tillo</a> required me to dabble in many other tools and technologies.</p>

        <p>Want to know more or see a full list of my skills? <a href="" style="color: #FFF; cursor: pointer;">Take a look at my CV</a> or my <a href="" style="color: #FFF; cursor: pointer;">personal projects.</a></p>

      </div>
      <div class="triangle-bottom-right"></div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>
<style>
  body {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .about-layout footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 75px;
  }
</style>
<style lang="scss" scoped>
  @import './styles/about';
</style>
