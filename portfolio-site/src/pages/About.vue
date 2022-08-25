<!-- Suppress ALL -->
<template>
  <Layout class="about-layout">
    <div class="about-container">
      <img v-if="!supportsWebP" class="jf-image" src="../assets/jf.jpg" alt="Jake Fauvel">
      <img v-if="supportsWebP" class="jf-image" src="../assets/jf.webp" alt="Jake Fauvel">
      <h1 class="about-title">Hey, I'm Jake. A Full-Stack Web Developer based in Düsseldorf, Germany.</h1>
      <div class="about-info">
        <p>I am a University of Brighton graduate with a degree in Digital Media Development (BSc), I achieved first class honours.</p>
        <p>My current role is the Lead Developer / Head of Web Development at <a href="https://www.bricoflor.de/" target="_blank" style="background: #6F1A35; color: #FFF;">BRICOFLOR GmbH</a>, based in Wuppertal Germany. I am responsible for all of the companies technical aspects, from internal tools to the companies production ecommerce websites. We have websites in all of the major European countries.</p>

        <p>I specialise in full-stack development and the following technologies:</p>
        <div class="list-block">
          <ul class="block-one">
            <li>VueStorefront (Version 1)</li>
            <li>Vue.js</li>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>HTML, CSS + Sass</li>
            <li>Magento 2</li>
            <li>Laravel</li>
            <li>Bootstrap</li>
          </ul>

          <ul class="block-two">
            <li>Infrastructure, Nginx, Varnish, pm2</li>
            <li>Mobile App Development</li>
            <li>Documenting, testing and planning</li>
            <li>API's / AJAX</li>
            <li>Relational databases</li>
            <li>Atlassian Suite, Git, AWS</li>
            <li>Cordova</li>
            <li>Phaser.io</li>
          </ul>
        </div>

        <br>My previous roles include: <a href="https://community.musictribe.com/" target="_blank" style="background: #DA0402; color: #FFF;">Music Tribe</a> in Willich, Germany. Creating hybrid mobile applications for their mixing consoles.
        <p>Before that, I was working at <a href="https://tillo.io" target="_blank" style="background: #5854E5; color: #FFF;">Tillo</a> in Brighton & Hove, United Kingdom. The main part of my role was developing new features for their Sass web application / API service.</p>

        <br>
        <h3>Want to know more or see a full list of my skills?</h3>
        <div class="call-to-actions">
          <a href="/JakeFauvel_CV_Public_EN.pdf" target="_blank" style="color: #FFF; cursor: pointer;">TAKE A LOOK AT MY CV</a>
          <a href="/projects" style="color: #FFF; cursor: pointer;">SEE SOME PROJECTS</a>
          <a href="/contact" style="color: #FFF; cursor: pointer;">CONTACT ME!</a>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Me | Lead Developer | Düsseldorf, DE',
    meta: [{
      vmid: 'description',
      name: 'description',
      content: 'About me, overview of my academic and professional experience. My previous jobs and university qualifiations are listed here.'
    }],
  },
  data() {
    return {
      supportsWebP: false
    }
  },
  mounted() {
    this.checkForWebP('lossy', (feature, result) => {
      this.supportsWebP = result
    });
  },
  methods: {
    checkForWebP (feature, callback) {
      let kTestImages = {
        lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
        lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
        alpha: 'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
        animation: 'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA'
      };
      let img = new Image();
      img.onload = function () {
        let result = (img.width > 0) && (img.height > 0);
        callback(feature, result);
      };
      img.onerror = function () {
        callback(feature, false);
      };
      img.src = 'data:image/webp;base64,' + kTestImages[feature];
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
