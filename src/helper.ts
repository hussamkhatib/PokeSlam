export const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

export function getPokemons(totalCards: number) {
    return Promise.all(
        Array.from({ length: totalCards }, () =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${random(1, 800)}`).then((r) => r.json())
        )
    );
}
