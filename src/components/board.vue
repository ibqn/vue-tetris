<script setup lang="ts">
import { ref } from 'vue'
import Cell from './cell.vue'
import { getEmptyBoard } from '../utils/empty-board'
import { Block } from '../types'

const board = ref(getEmptyBoard())

board.value[190] = Block.I
board.value[191] = Block.O
</script>

<template>
  <div class="grid grid-cols-10 gap-px border bg-black/70 p-px shadow-glow">
    <Cell v-for="cell in board" :cell />
  </div>
</template>
