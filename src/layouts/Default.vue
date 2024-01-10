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
   data() {
      return {
         // options: {
         //     mouseControls: true,
         //     touchControls: true,
         //     gyroControls: false,
         //     minHeight: 200.00,
         //     minWidth: 200.00,
         //     highlightColor: 0xf5cf6f,
         //     midtoneColor: 0x8040e8,
         //     lowlightColor: 0x5782ed,
         //     baseColor: 0xffffff,
         //     blurFactor: 0.71,
         //     speed: 0.40,
         //     zoom: 0.20
         // }
      };
   },
};
</script>
<style>
/*
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
*/
</style>
