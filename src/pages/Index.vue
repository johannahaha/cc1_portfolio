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
                            <h2 class="skills_item_title">contact</h2>
                            <h3 class="skills_item_content">johanna.hartmann@filmuniversitaet.de
                            </h3>
                        </div>
						<div class="skills_item">
                            <h2 class="skills_item_title">topics of interest</h2>
                            <h3 class="skills_item_content">
                                human computer interaction, critical data
                                studies, data visualization, algorithmic bias,
                                impact of technology, web storytelling, creative coding
                            </h3>
                        </div>
                        <div class="skills_item">
                            <h2 class="skills_item_title">coding</h2>
                            <h3 class="skills_item_content">
                                python, javascript, c++, unity
                            </h3>
                        </div>
                        <div class="skills_item">
                            <h2 class="skills_item_title">web development</h2>
                            <h3 class="skills_item_content">
                                three.js, vue.js, gridsome, d3, gsap, Scrollama, scss
                            </h3>
                        </div>
                        <div class="skills_item">
                            <h2 class="skills_item_title">languages</h2>
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
