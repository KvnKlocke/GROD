<template>
    <Page>
        <div class="row mt-5">
            <div class="col">
                <button @click="test">afaf</button>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                {{ players }}
            </div>
        </div>
    </Page>
</template>

<script setup lang="ts">
import Page from '@/components/Page.vue'
import { ref } from 'vue'

const players = ref<string[]>([])

function test() {
    const data = localStorage.getItem('player')
    players.value = JSON.parse(data)
}
</script>
