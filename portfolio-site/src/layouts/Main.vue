<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/about/">Projects</g-link>
        <g-link class="nav__link" to="/about/">Contact</g-link>
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

<style>
body {
  width: 100%;
  height: 100%;
  position: absolute;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  grid-template-columns: 1fr 600px 1fr;
  grid-template-rows: 1fr 100px;
  display: grid;
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2;
}

.nav__link {
  margin-left: 20px;
}
</style>
