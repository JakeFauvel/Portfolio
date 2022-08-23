<template>
  <Layout class="page-layout">
    <div class="home-container">
      <div class="home-initials">
        <h1 class="home-initials">Jake Fauvel</h1>
      </div>

      <div class="home-title typewrite"></div>
    </div>
  </Layout>
</template>
<script>
export default {
  metaInfo: {
    title: 'Jake Fauvel - Lead Developer | Software Engineer | Full Stack Developer | Düsseldorf, Germany'
  },
  data() {
    return {
      stringToType: '[ "Current role...", "Lead Developer / Head of Web Development", "I am a...", "Coder 💻", "Planner 📝", "Problem solver 😅", "General tech guy 🤓" ]'
    }
  },
  mounted() {
    this.typewriterEffect();
  },
  methods: {
    // Reference
    // https://codepen.io/hi-im-si/pen/ALgzqo
    typewriterEffect() {
      let TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };

      TxtType.prototype.tick = function() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span height="40px" class="wrap">'+this.txt+'</span>';

        let that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function() {
          that.tick();
        }, delta);
      };

      let elements = document.getElementsByClassName('typewrite');
      for (let i = 0; i < elements.length; i++) {
        let toRotate = this.stringToType;
        let period = this.stringToType;
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      let css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    }
  }
}
</script>
<style>
  body {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
<style lang="scss" scoped>
  @import './styles/home';
</style>
