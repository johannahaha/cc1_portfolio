<template>
    <div class="projects_item">
        <g-image
            :src="post.preview_img"
            class="projects_item-preview-img"
            alt="post.title"
            @click="open(post.path)"
            @mouseover="showDetails = true"
            @mouseleave="showDetails = false"
            :style="{opacity: imgOpacity}"
        />
        <div
            class="projects_item_details"
            v-show="showDetails"
            @mouseover="showDetails = true"
            @mouseleave="showDetails = false"
            @click="open(post.path)"
        >
            <h4>{{ post.title }}</h4>
            <div class="projects_item_details_tags">
                <div v-for="tag in post.tags" :key="tag.id" @click.stop="open(tag.path)">
                    {{ tag.title }}
                </div>
                <!-- <g-link v-for="tag in post.tags" :key="tag.id" :to="tag.path" @click.stop="open(tag.path)">
                    {{ tag.title }}
                </g-link> -->
            </div>
            <p>{{ post.year }}</p>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        imgOpacity: function(){
            if(this.showDetails) return 0.25
            else return 1.0
        }
    },
    props: {
        post: {},
    },
    data: function () {
        return {
            showDetails: false,
        };
    },
    methods: {
        open: function (path) {
            console.log(path)
            window.location.href = path;
        },
    },
};
</script>