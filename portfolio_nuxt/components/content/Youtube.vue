<template>
    <div class="youtube">
        <lite-youtube :videoid="props.id" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    id: { type: String, required: true }
})
</script>