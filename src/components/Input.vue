<template>
    <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form-control"
    />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
    modelValue: string
    label?: string
    placeholder?: string
    type?: string
}>()

defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>

<style scoped>
input {
    max-width: 190px;
    font-size: 1rem;
    border: 1.5px solid #1899d6;
    border-radius: 0.5rem;
    box-shadow: 2.5px 3px 0 #1cb0f6;
    outline: none;
    transition: ease 0.25s;
}

input:focus {
    outline: none;
    box-shadow: 2.5px 3px 0 #1cb0f6;
    border: 1.5px solid #1899d6;
}
</style>
