<template>
    <Page>
        <div class="row mt-5">
            <div class="col text-center">
                <span class="fs-2 fw-bold">Guess Right or Drink</span>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <Button
                    :padding="12"
                    @click="startGame"
                    :disabled="!players.length"
                    >Starten</Button
                >
            </div>
        </div>
        <div class="row mt-4">
            <div class="col text-center">
                <h4>Wer spielt mit?</h4>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col d-flex justify-content-center">
                <Input v-model="newPlayer" placeholder="Name" class="me-2" />
                <Button @click="addPlayer"><Icon name="plus" /></Button>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col d-flex justify-content-center">
                <div class="playerContainer">
                    <div
                        v-for="(player, index) in players"
                        :key="index"
                        class="mb-2 d-flex justify-content-between"
                    >
                        <span class="fs-5 fw-bold">{{ player }}</span>
                        <DeleteButton @click="deletePlayer(index)"
                            ><Icon style="font-size: 10px" name="trash"
                        /></DeleteButton>
                    </div>
                </div>
            </div>
        </div>
    </Page>
</template>

<script setup lang="ts">
import Page from '@/components/Page.vue'
import Icon from '@/components/Icon.vue'
import Button from '@/components/Button.vue'
import DeleteButton from '@/components/DeleteButton.vue'
import Input from '@/components/Input.vue'
import router from '@/router'
import { ref } from 'vue'

const newPlayer = ref('')

const players = ref<string[]>([])

const emit = defineEmits(['startGame'])

function addPlayer() {
    if (!newPlayer.value) return
    players.value.push(newPlayer.value.trim())
    newPlayer.value = ''
}

function deletePlayer(index: number) {
    players.value.splice(index, 1)
}

function startGame() {
    localStorage.setItem('player', JSON.stringify(players.value))
    router.push({ name: 'Game' })
}
</script>

<style scoped>
.playerContainer {
    width: 230px;
}
</style>
