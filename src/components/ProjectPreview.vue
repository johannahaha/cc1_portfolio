<template>
    <div class="projects_item">
            <g-image :src="post.preview_img" class="projects_item-preview-img" alt="post.title"/>
            <div class="projects_item_details">
                <h4>{{ post.title }}</h4>
                <h5>{{ post.keywords }}</h5>
            </div>
            <!-- <div class="projects_btns">
                <g-link :to="post.path" class="projects-button"> 
                    <font-awesome :icon="['fas', 'eye']"/> 
                </g-link>
            </div> -->
    </div>
</template>

<script>
export default {
    props: { 
        post: {}
    }    
};
</script>