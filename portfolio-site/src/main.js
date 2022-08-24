// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Main from '~/layouts/Main.vue'
import VueGtm from 'vue-gtm'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', Main)

  if (isClient) {
    Vue.use(VueGtm, {
      vueRouter: router,
      id: 'GTM-WWG59FP',
      enabled: true,
      debug: false
    })
  }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,600,800&display=swap',
  })
};
