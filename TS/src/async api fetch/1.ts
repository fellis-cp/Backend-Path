import { baseUrlPokemon, PokemonResponse } from "./callbackutils";

const fetchPokemon = async (): Promise<PokemonResponse> => {
  const response = await fetch(baseUrlPokemon);
  if (!response.ok) {
    throw new Error("failed to fetch");
  }
  const data = await response.json();
  return data;
};

const getName = async (): Promise<string[]> => {
  const PokemonDataName = await fetchPokemon();
  const names = PokemonDataName.results.map((pokemon) => pokemon.name);
  return names;
};

const getUrl = async (): Promise<string[]> => {
  const pokemonUrl = await fetchPokemon();
  const urls = pokemonUrl.results.map((urls) => urls.url);
  return urls;
};

let pokemonNames: string[];
let pokemonUrls: string[];

(async function () {
  try {
    pokemonNames = await getName();
    pokemonUrls = await getUrl();

    console.log(pokemonNames);
    console.log(pokemonUrls);
  } catch (e) {
    console.error(e);
  }
})();
