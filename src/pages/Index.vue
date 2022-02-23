<template>
    <Layout>
        <!-- <Sketch></Sketch> -->
        <section class="home">
            <div class="home_title">                 
                <h1 class="home_infos_name">Johanna Hartmann</h1>
            </div>
            <div class="home_infos">
                <div class="skill_section">
                    <div class="skills">
                        <h1>Creative Technologies - Digital Media</h1>
						<div class="skills_item">
                            <h2 class="skills_item_title">Contact</h2>
                            <h3 class="skills_item_content">johanna.hartmann@filmuniversitaet.de
                            </h3>
                        </div>
						<div class="skills_item">
                            <h2 class="skills_item_title">Topics Of Interest</h2>
                            <h3 class="skills_item_content">
                                Human Computer Interaction, Critical Data
                                Studies, Data Visualization, Algorithmic Bias,
                                Impact of Technology, Web Storytelling
                            </h3>
                        </div>
                        <div class="skills_item">
                            <h2 class="skills_item_title">Coding</h2>
                            <h3 class="skills_item_content">
                                Javascript, Python, C++, Unity
                            </h3>
                        </div>
                        <div class="skills_item">
                            <h2 class="skills_item_title">Web Development</h2>
                            <h3 class="skills_item_content">
                                Three.js, Vue.js, Gridsome, d3, GSAP, Scrollama
                            </h3>
                        </div>
                        <div class="skills_item">
                            <h2 class="skills_item_title">Languages</h2>
                            <h3 class="skills_item_content">
                                German (Native), English (C1), Spanish (B1)
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script>
import Sketch from "@/components/Sketch.vue";

export default {
    metaInfo: {
        title: "Home",
    },
    components: {
        Sketch,
    },
};
</script>

<style>
.home-links a {
    margin-right: 1rem;
}
</style>
