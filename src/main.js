// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/main.scss';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import "@fontsource/aileron"
import "@fontsource/archivo-black"

import "@fontsource/archivo/400.css"
import "@fontsource/archivo/variable.css";

import "@fontsource/koh-santepheap/700.css";
import "@fontsource/koh-santepheap/900.css";


import "@fontsource/koh-santepheap"

config.autoAddCss = false; 


export default function (Vue, { router, head, isClient }) {
  library.add(faGithub, faTwitter,faEye);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/mix2txx.css'
  });

}
