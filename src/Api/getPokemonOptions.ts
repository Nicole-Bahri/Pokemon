import { pokemonApi } from "./pokemonapi";
import type { Pokemon } from 'env';

const getPokemons = ():number[] =>{
    const pokemonArr = Array.from(Array(650))
    return pokemonArr.map((_, index)=> index+1)
}

const pokemonName = async(pokemon:number[]): Promise<Pokemon[]> =>{
    if(pokemon.length != 4) throw "Error"
    const[a,b,c,d]= pokemon
    const promiseArr =[
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]
    const[{data:p1},{data:p2}, {data:p3},{data:p4}] = await Promise.all(promiseArr)
    return[
        {name:p1.name, id:p1.id},
        {name:p2.name, id:p2.id},
        {name:p3.name, id:p3.id},
        {name:p4.name, id:p4.id},
    ]
}

const getPokemonOptions = async ()=>{
    const mixedPokemons = getPokemons().sort(()=>Math.random()-0.5)
    const pokemons = await pokemonName(mixedPokemons.splice(0,4))
    return pokemons 
}

export default getPokemonOptions