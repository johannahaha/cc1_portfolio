<template>
   <div>
      <!-- <v-vanta id="vanta-background" effect="fog" :options=options></v-vanta> -->
      <Header></Header>
      <slot> </slot>
   </div>
</template>

<script>
import Header from "@/components/Header.vue";
//import VVanta from 'vue-vanta';

export default {
   components: {
      Header,
      //VVanta
   },
};
</script>
