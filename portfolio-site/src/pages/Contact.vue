<template>
  <Layout class="contact-layout">
    <div class="contact-container">
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
              <a href="https://github.com/JakeFauvel" target="_blank">
                <img class="github" src="../assets/github.svg" alt="GitHub Icon">
              </a>
              <a href="https://www.linkedin.com/in/jake-fauvel/" target="_blank">
                <img class="linked-in" src="../assets/linkedin.svg" alt="LinkedIn Icon">
              </a>
              <a href="https://www.instagram.com/jake_fauvel/" target="_blank">
                <img class="instagram" src="../assets/instagram.svg" alt="Instagram Icon">
              </a>
              <a href="https://www.youtube.com/channel/UCr-nTZOycVIm4CXF2U1PUbw" target="_blank">
                <img class="youtube" src="../assets/youtube.svg" alt="YouTube Icon">
              </a>
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
    title: 'Jake Fauvel - Contact Me | Düsseldorf, Software Engineer / Developer'
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

