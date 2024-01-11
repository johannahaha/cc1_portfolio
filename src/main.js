// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/main.scss";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";

import { faEye, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
   faGithub,
   faTwitter,
   faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "@fontsource/archivo-black";

import "@fontsource/archivo/400.css";
import "@fontsource/archivo/variable.css";

config.autoAddCss = false;

export default function (Vue, { router, head, isClient }) {
   library.add(faGithub, faTwitter, faEye, faLinkedin, faEnvelope);

   // Set default layout as a global component
   Vue.component("font-awesome", FontAwesomeIcon);

   head.link.push({
      rel: "stylesheet",
      href: "https://use.typekit.net/mix2txx.css",
   });
}
