<template>
    <button
        :style="{
            padding: `${$props.padding}px 15px`,
        }"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineProps({
    padding: {
        type: Number,
        required: false,
        default: 5,
    },
})
</script>

<style scoped>
button {
    appearance: button;
    background-color: #1899d6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: din-round, sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 20px;
    margin: 0;
    outline: none;
    overflow: visible;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    transform: translateZ(0);
    transition: filter 0.2s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
}

button:after {
    background-clip: padding-box;
    background-color: #1cb0f6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
}

button,
button:focus {
    user-select: auto;
}

button:hover:not(:disabled) {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
}

button:disabled {
    cursor: auto;
}

button:active {
    border-width: 4px 0 0;
    background: none;
}
</style>
