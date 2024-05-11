<script setup lang="ts">
import type { Pokemon } from 'env';
import getPokemonOptions from './Api/getPokemonOptions';
import { ref } from 'vue';
import PokemonOptions from './components/PokemonOptions.vue';
import PokemonPicture from './components/PokemonPicture.vue';

  const pokemonArr = ref<Pokemon[]>([])
  const pokemon = ref<Pokemon>()

  const mixPokemonArray =async()=>{
    pokemonArr.value = await getPokemonOptions()
    const randomInt = Math.floor(Math.random() * 4)
    pokemon.value = pokemonArr.value[randomInt]
    console.log(pokemon.value)
    console.log(pokemonArr.value)
  }
mixPokemonArray()
</script>

<template>
 <div class="m-12">
  <PokemonPicture v-if="pokemon" :pokemon-id="pokemon.id"/>
  <PokemonOptions :pokemons="pokemonArr"/>
 </div> 
</template>

