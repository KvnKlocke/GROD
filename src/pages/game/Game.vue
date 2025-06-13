<template>
  <div>
    <h3>Spieler Reihenfolge</h3>
    <draggable v-model="players" item-key="id" animation="200">
      <template #item="{ element, index }">
        <div class="player-item">
          <span>{{ index + 1 }}. {{ element.name }}</span>
          <span class="points">Punkte: {{ calculatePoints(index) }}</span>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import draggable from 'vuedraggable';

interface Player {
  id: number;
  name: string;
}

const players = ref<Player[]>([
  { id: 1, name: 'Anna' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Clara' },
  { id: 4, name: 'David' },
]);

function calculatePoints(index: number): number {
  return players.value.length - index;
}
</script>

<style scoped>
.player-item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 4px;
  background-color: #e0f7fa;
  border-radius: 4px;
  cursor: grab;
  user-select: none;
}
.points {
  font-weight: bold;
  color: #00796b;
}
</style>





