<template>
  <div ref="mainLayout" class="main-layout">
    <header class="header" :class="{open: this.hamburgerClicked}">
      <hamburger @hamburgerClick="onHamburgerClick"></hamburger>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/projects/">Projects</g-link>
        <g-link class="nav__link" to="/contact/">Contact</g-link>
      </nav>
    </header>
    <transition name="fade" appear>
      <main>
        <slot></slot>
      </main>
    </transition>
  </div>
</template>

<script>
  import Hamburger from '~/components/nav/Hamburger.vue'
  export default {
    components: {
      Hamburger
    },
    data () {
      return {
        hamburgerClicked: false
      }
    },
    methods: {
      onHamburgerClick() {
        this.hamburgerClicked = !this.hamburgerClicked;
        if (this.hamburgerClicked) {
          this.$refs.mainLayout.style.overflow = 'hidden';
        } else {
          this.$refs.mainLayout.style.overflow = 'initial';
        }
      }
    }
  }
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,600,800&display=swap');
  html {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  body {
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
    position: relative;
    background: #212227;
  }
  body.light {
    background: #FFF;
  }
  footer {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 75px;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .main-layout {
    overflow: hidden;
  }
  @media only screen and (min-width: 1024px) {
    header {
      z-index: 1000;
    }
  }
  nav {
    z-index: 1000;
  }
</style>
<style lang="scss" scoped>
  @import '../pages/styles/main';
</style>
