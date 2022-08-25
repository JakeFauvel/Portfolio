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
        hamburgerClicked: false,
        consentManager: null
      }
    },
    mounted() {
      let ccCookieStatus = localStorage.getItem('cc_cookie');
      let ccAccepted = localStorage.getItem('cc_accepted');
      if (typeof window.initCookieConsent !== 'function' && ccCookieStatus === null && !ccAccepted) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.defer = true;
        script.async = true;
        document.head.appendChild(script);
        script.addEventListener("load", () => {
          this.cookieConsentLoaded();
        });
        script.src = 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.5/dist/cookieconsent.js';

        const cssFile = document.createElement('link');
        cssFile.type = 'text/css';
        cssFile.rel = 'stylesheet';
        cssFile.href = 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.5/dist/cookieconsent.css';
        document.head.appendChild(cssFile);
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
      },
      cookieConsentLoaded() {
        document.body.classList.add('c_darkmode');
        this.consentManager = window.initCookieConsent();
        this.loadConsentManager();
      },
      loadConsentManager() {
        this.consentManager.run({
          current_lang: 'en',
          autoclear_cookies: false,
          page_scripts: true,
          hide_from_bots: true,
          gui_options: {
            consent_modal: {
              layout: 'box',
              position: 'bottom left',
              transition: 'slide'
            },
            settings_modal: {
              layout: 'bar',
              position: 'right',
              transition: 'slide'
            }
          },
          onFirstAction: function(user_preferences, cookie) {
            // Callback triggered only once
          },
          onAccept: function (cookie) {
            localStorage.setItem('cc_accepted', true);
          },
          onChange: function (cookie, changed_preferences) {
            // ...
          },
          languages: {
            'en': {
              consent_modal: {
                title: 'Just to let you know',
                description: 'In order to see how many people have visited my site, I use Google Analytics. None of the data is personally identifiable.',
                primary_btn: {
                  text: 'Acknowledge',
                  role: 'accept_all'
                }
              },
              settings_modal: {
                title: 'Cookie usage 🍪',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                blocks: [
                  {
                    description: 'We would like to use some additional services and cookies on the website to enhance your online experience. You can choose for each category to opt-in/out whenever you want. Some cookies are not optional for functional purposes. For more details relating to cookies and other sensitive data, please read the full <a href="/privacy" class="cc-link">privacy policy</a>.'
                  }, {
                    title: 'Strictly necessary cookies',
                    description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.',
                    toggle: {
                      value: 'necessary',
                      enabled: true,
                      readonly: true
                    }
                  }, {
                    title: 'Performance and Analytics cookies',
                    description: 'These cookies allow the website to remember the choices you have made in the past. They also allow us to see the number of views and optimise content.',
                    toggle: {
                      value: 'analytics',
                      enabled: true,
                      readonly: true
                    }
                  }, {
                    title: 'Advertisement and Targeting cookies',
                    description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on, if a purchase was made and so on! All of the data is anonymized and cannot be used to identify you.',
                    toggle: {
                      value: 'targeting',
                      enabled: true,
                      readonly: false
                    }
                  }, {
                    title: 'More information',
                    description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="/contacts">contact us</a>.'
                  }
                ]
              }
            }
          }
        })
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
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,600,800&display=swap');
  html {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow-x: hidden;
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
  #cm {
    background: #212227 !important;
    color: #FFF !important;
    border: 1px solid #FFF;
  }
  #cm #c-inr #c-bns button {
    background: #FFF !important;
  }
</style>
<style lang="scss" scoped>
  @import '../pages/styles/main';
</style>
