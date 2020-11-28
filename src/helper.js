export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;


/*export const getPokemons = () => (
    Promise.all(
      Array.from({ length: 5 }, async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random(1, 800)}`);
        return response.json();
      })
    )
  );*/
  export function getPokemons() {
    return Promise.all(
      Array.from({ length: 5 }, () => fetch(`https://pokeapi.co/api/v2/pokemon/${random(1, 800)}`)
      .then(r => r.json()))
    )
 }