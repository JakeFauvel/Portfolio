<template>
  <div class="layout">
    <hamburger @hamburgerClick="onHamburgerClick"></hamburger>
    <header class="header">
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/projects/">Projects</g-link>
        <g-link class="nav__link" to="/contact/">Contact</g-link>
      </nav>
    </header>
    <slot/>
    <footer>
      &copy; {{ copyrightText }}
    </footer>
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
        copyrightText: `${new Date().getFullYear()} Jake Fauvel`
      }
    },

    methods: {
      onHamburgerClick(hamburgerState) {
        if (hamburgerState) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'initial';
        }
      },
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
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,600&display=swap');

  body {
    font-family: 'Raleway', sans-serif;;
    margin:0;
    padding:0;
    line-height: 1.5;
  }
</style>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  position: absolute;
  top: 20px;
  @media only screen and (min-width: 768px) {
    left: 20px;
  }
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
}

.nav__link {
  margin-left: 20px;
  @media only screen and (max-width: 767px) {
    display: none;
  }
}
</style>
