<template>
  <Layout class="about-layout">
    <div class="about-container">
      <div class="circle-top-right"></div>
      <div class="hexagon-left"></div>
      <img class="jf-image" src="../assets/jf.jpg" alt="Jake Fauvel">
      <h1 class="about-title">Hey, I'm Jake.</h1>
      <div>
        Currently working at <a href="https://community.musictribe.com/" target="_blank" style="color: #DA0402;">Music Tribe</a> in Willich, Germany. Working on mobile applications for their products.

        <p>A recent graduate from the University of Brighton, I obtained first class honours in Digital Media Development.</p>

        <p>I specialise in full-stack development and the following technologies:</p>
        <ul>
          <li>Laravel</li>
          <li>PHP</li>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>Mobile App Development</li>
        </ul>

        <p>However, my previous role at <a href="https://tillo.io" target="_blank" style="color: #5854E5;">Tillo</a> required me to dabble in many other tools and technologies.</p>

        <p>Want to know more or see a full list of my skills? <a href="">Take a look at my CV</a> or my <a href="">personal projects.</a></p>
      </div>

      <div class="triangle-bottom-right"></div>

      <footer>
        &copy; {{ copyrightText }}
      </footer>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  },

  data() {
    return {
      copyrightText: `${new Date().getFullYear()} Jake Fauvel`
    }
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
