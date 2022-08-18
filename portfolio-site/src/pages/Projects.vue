<template>
  <Layout class="projects-layout">
    <div class="projects-container">
        <div class="project">
          <div class="image">
            <img src="../assets/projects/Christoph_Screens.png" alt="Portfolio project screenshots">
          </div>

          <div class="text">
            <h2>Christoph Münks - Portfolio Site</h2>
            <p>A portfolio site for a blacksmith based in Meerbusch, Germany. This site was built using Gridsome, Vue.js and vanilla JavaScript. It features full screen overlays, custom menu setup and language selection. A basic 'CMS' style configuration for easy updates / language translations. The site was designed to be a clean and minimalist.</p>
          </div>
        </div>

      <div class="project image-right">
        <div class="text extra-padding-right">
          <h2>VinylHub - Vinyl Record Cataloging App</h2>
          <p>My final year project as part of my University degree. This web app was built entirely from scratch using Laravel, Vue.js, PHP and JavaScript. The application is for vinyl record collection cataloging. Users could digitally track and maange a vinyl collection. Records can be added via the unique code found on the record of via barcode scanning. A small selection of statistics were shown about the users collection (number of records, number by genre, favourite genre, number of artists).</p>
        </div>

        <div class="image">
          <img src="../assets/projects/VinylHub_Screens.png" alt="Vinyl Hub web app screenshots">
        </div>
      </div>

      <div class="project">
        <div class="image">
          <img src="../assets/projects/Fish_Frenzy_Screen.png" alt="Fish Frenzy JavaScript screenshot">
        </div>

        <div class="text">
          <h2>Fish Frenzy - JavaScript Game</h2>
          <p>A JavaScript game made with Phaser.io. Players have to evade sharks, scuba divers and swordfish to eat the small fish. Eating the small fish improves your score.</p>
        </div>
      </div>

      <div class="project image-right">
        <div class="text extra-padding-right">
          <h2>Modern House Render</h2>
          <p>A modern house modelled in Blender, complete with realistic trees, swimming pool, grass/hill landscape, realistic textures and lighting. Everything modelled in the scene was modelled by hand from scratch. The final render took over 2 days.</p>
        </div>

        <div class="image">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/WaNoFcVuvYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
export default {
  metaInfo: {
    title: 'Jake Fauvel - Projects | Düsseldorf, Software Engineer / Developer'
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

