<template>
  <div class="flex flex-col items-center mt-14 space-y-10">
    <li class="text-3xl" v-for="pokemon in pokemons":key="pokemon.id">
      {{ pokemon.name }}
    </li>
  </div>
</template>

<script lang="ts" setup>
import type { Pokemon } from 'env'

defineProps<{
    pokemons: Pokemon[]
}>()
</script>