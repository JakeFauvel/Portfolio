<!-- Suppress ALL -->
<template>
  <Layout class="about-layout">
    <div class="about-container">
      <img class="jf-image" src="../assets/jf.jpg" alt="Jake Fauvel">
      <h1 class="about-title">Hey, I'm Jake.</h1>
      <div class="about-info">
        <p>I am a University of Brighton graduate with a degree in Digital Media Development (BSc), I achieved first class honours.</p>
        <p>My current role is the Lead Developer / Head of Web Development at <a href="https://www.bricoflor.de/" target="_blank" style="background: #6F1A35; color: #FFF;">BRICOFLOR GmbH</a>, based in Wuppertal Germany. I am responsible for all of the companies technical aspects, from internal tools to the companies production websites.</p>
        <p>A large part of my role is actively developing new features, creating workflows/requirements, documentation and leading a small team of developers.</p>
        <p>I specialise in full-stack development and the following technologies:</p>

        <div class="list-block">
          <ul class="block-one">
            <li>VueStorefront (Version 1)</li>
            <li>Vue.js</li>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>HTML, CSS + Sass</li>
            <li>Mobile App Development</li>
            <li>Bootstrap</li>
            <li>Infrastructure, Nginx, Varnish + more</li>
          </ul>

          <ul class="block-two">
            <li>Documenting, testing and planning</li>
            <li>Magento 2</li>
            <li>Laravel</li>
            <li>API's / AJAX</li>
            <li>Relational databases</li>
            <li>Atlassian suite, Git, AWS</li>
            <li>Cordova</li>
            <li>Phaser.io</li>
          </ul>
        </div>

        My previous roles include: <a href="https://community.musictribe.com/" target="_blank" style="background: #DA0402; color: #FFF;">Music Tribe</a> in Willich, Germany. Creating hybrid mobile applications for their mixing consoles.

        <p>Before that, I was working at <a href="https://tillo.io" target="_blank" style="background: #5854E5; color: #FFF;">Tillo</a> in Brighton & Hove, United Kingdom. The main part of my role was developing new features for their Sass web application / API <service class=""></service></p>
        <p>Want to know more or see a full list of my skills? <a href="" style="color: #FFF; cursor: pointer;">Take a look at my CV</a> or my <a href="" style="color: #FFF; cursor: pointer;">personal projects.</a></p>
      </div>
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
