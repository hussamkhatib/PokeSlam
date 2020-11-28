export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;


export const getPokemons = async function () {
  const pokemon = [];
  for (let i = 0; i < 5; i++) {
    pokemon.push(fetch(`https://pokeapi.co/api/v2/pokemon/${random(1, 800)}`));
  }
  return Promise.all(pokemon)
    .then((data) => {
      const parsedData = [];
      data.forEach(async (d) => {
        const resJson = await d.json()
        parsedData.push(resJson);
      });
       return parsedData
    })
    .catch((err) => {
      console.log(err);
    });
};