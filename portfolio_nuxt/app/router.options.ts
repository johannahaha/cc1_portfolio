import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
   //always scroll to top
   scrollBehavior: (to, from, savedPosition) => {
      return {
         left: 0,
         top: 0,
         behavior: "smooth",
      };
   },
};
