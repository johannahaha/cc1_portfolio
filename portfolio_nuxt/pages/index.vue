<template>
   <div>
      <section class="home">
         <div class="home_infos">
            <div class="home_infos-section">
               <h4 class="home_infos-section-title">about me</h4>
               <div class="about">
                  <img src="/portraet_bw.jpg" id="portraet" />
                  <div>
                     <p>
                        Hi, I am a freelance Creative Technologist and Data
                        Visualization Designer & Developer based in Berlin.
                        Currently, I am studying Creative Technologies (M. A.)
                        at the Filmuniversity Babelsberg Konrad Wolf. I have a
                        Bachelor in Digital Media (B. Sc.), at University of
                        Bremen. My main topics of interests are data
                        visualization, creative web development and the role of
                        algorithms and tech for society.
                     </p>
                     <div>contact: johanna.hartmann@gmx.de</div>
                  </div>
               </div>
            </div>
            <Social />
            <div class="home_infos-section">
               <h4 class="home_infos-section-title projects-section-title">
                  latest projects
               </h4>
               <FilterMenu />
               <ProjectList />
            </div>
         </div>
      </section>
   </div>
</template>


<script setup lang="ts">
</script>


