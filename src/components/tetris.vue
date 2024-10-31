<script setup lang="ts">
import Board from './board.vue'
import Button from './button.vue'
import Score from './score.vue'
import UpcomingBlocks from './upcoming-blocks.vue'
</script>

<template>
  <div class="flex flex-row gap-4">
    <Board />
    <div class="flex flex-col">
      <UpcomingBlocks />
      <Score />
      <Button>start</Button>
    </div>
  </div>
</template>
