<template>
    <i class="fa-solid" :class="`fa-${$props.name}`"></i>
</template>

<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true,
    },
})
</script>
