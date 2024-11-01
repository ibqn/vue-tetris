<script setup lang="ts">
import { Block, BlockVariant } from '../types'
import Board from './board.vue'
import Button from './button.vue'
import Score from './score.vue'
import UpcomingBlocks from './upcoming-blocks.vue'

const upcomingBlocks: BlockVariant[] = [
  {
    block: Block.J,
    shapeIndex: 1,
  },
  {
    block: Block.T,
    shapeIndex: 1,
  },
]
</script>

<template>
  <div class="flex flex-row gap-4">
    <Board />
    <div class="flex flex-col">
      <UpcomingBlocks :upcomingBlocks />
      <Score />
      <Button>start</Button>
    </div>
  </div>
</template>
