<template>
  <Layout class="contact-layout">
    <div class="contact-container">
      <div class="triangle-top"></div>
      <div class="text-container">
        <div class="gif-container">
          <img class="chat-gif" src="../assets/chat.gif" alt="Chat GIF">
        </div>

        <h1 class="about-title">Get in touch!</h1>
        <p class="contact-paragraph">Interesting in working together or have a proposal? Drop me a line on one of the following.</p>

        <div class="details-flex-container">
          <div class="left">
            <h2>Email</h2>
            <a href="mailto:hello@jakefauvel.com">hello@jakefauvel.com</a>
          </div>

          <div class="right">
            <h2>Social</h2>
            <div class="social-icons">
              <img class="linked-in" src="../assets/linkedin.svg" alt="LinkedIn Icon">
              <img class="instagram" src="../assets/instagram.svg" alt="Instagram Icon">
              <img class="youtube" src="../assets/youtube.svg" alt="YouTube Icon">
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  }
}
</script>
<style>
body {
  position: absolute;
  height: 100%;
  width: 100%;
}
.contact-layout footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 75px;
}
</style>
<style lang="scss" scoped>
@import './styles/contact';
</style>

