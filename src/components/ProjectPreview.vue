<template>
    <div class="projects_item">
            <g-image :src="post.preview_img" class="projects_item-preview-img" alt="post.title" @click="open(post.path)"/>
            <div class="projects_item_details">
                <h4>{{ post.title }}</h4>
                <div class="projects_item_details_tags">
                    <g-link v-for="tag in post.tags":key="tag.id":to="tag.path"> {{ tag.title }} </g-link>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    props: { 
        post: {}
    },    
    methods: {
        open: function(path){
            window.location.href = path;
        }
    }
};
</script>