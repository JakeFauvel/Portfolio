<template>
  <div class="layout">
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
  export default {
    data () {
      return {
        copyrightText: `${new Date().getFullYear()} Jake Fauvel`
      }
    },
  }
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

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
}
</style>
