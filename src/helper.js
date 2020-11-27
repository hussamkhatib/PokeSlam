export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;


export function getPokemons() {
const pokemon = []
     for(let i=0;i<5;i++){
        fetch(`https://pokeapi.co/api/v2/pokemon/${random(1,800)}`)
        .then(res=>res.json())
        .then(data=>{
            pokemon.push({
                name:data.name,
                attack:data.stats[0].base_stat
            })
        })
     }
     return pokemon
}
