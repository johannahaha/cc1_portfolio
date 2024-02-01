<template>
    <div class="youtube">
        <lite-youtube v-if="props.addunderscore" :videoid="'_' + props.id" :style="style" />
        <!-- https://debbie.codes/blog/migrating-nuxt2-nuxt3 -->
        <lite-youtube v-if="!props.addunderscore" :videoid="props.id" :style="style" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    id: { type: String, required: true },
    thumbnail: { type: String, required: false },
    addunderscore: { type: Boolean, required: false, default: false }
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