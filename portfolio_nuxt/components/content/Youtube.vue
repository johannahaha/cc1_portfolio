<template>
    <div class="youtube">
        <!-- https://debbie.codes/blog/migrating-nuxt2-nuxt3 -->
        <lite-youtube :videoid="props.id" :style="style" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    id: { type: String, required: true },
    thumbnail: { type: String, required: false }
})

const style = computed(() => {
    if (props.thumbnail !== undefined) {
        return 'background-image: url(' + props.thumbnail + ')';
    }
    else {
        return ""
    }
})

</script>