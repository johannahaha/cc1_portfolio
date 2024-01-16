<template>
    <div class="youtube">
        <!-- https://debbie.codes/blog/migrating-nuxt2-nuxt3 -->
        <lite-youtube :videoid="props.id" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    id: { type: String, required: true }
})
</script>