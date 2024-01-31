import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";

import "@fortawesome/fontawesome-svg-core/styles.css";

import {
   faEye,
   faEnvelope,
   faAngleLeft,
   faAngleRight,
   faLink,
} from "@fortawesome/free-solid-svg-icons";

import {
   faGithub,
   faTwitter,
   faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(
   faGithub,
   faTwitter,
   faEye,
   faLink,
   faLinkedin,
   faEnvelope,
   faAngleLeft,
   faAngleRight
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
