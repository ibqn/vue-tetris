<script setup lang="ts">
import { computed } from 'vue'
import { BlockVariant } from '../types'
import { getShape } from '../utils/get-shape'
import Cell from './cell.vue'

type Props = {
  upcomingBlocks: BlockVariant[]
}

const { upcomingBlocks } = defineProps<Props>()

const nextBlockShape = computed(() => {
  const [nextBlockVariant] = upcomingBlocks
  return getShape(nextBlockVariant)
})
</script>

<template>
  <div class="flex h-48 w-36 flex-col items-center gap-4 border bg-black/70 p-4 shadow-glow">
    <div class="uppercase text-white">next</div>

    <div class="flex flex-col gap-px">
      <div v-for="row in nextBlockShape" class="flex flex-row gap-px">
        <Cell v-for="cell in row" :cell="cell" />
      </div>
    </div>
  </div>
</template>
