export interface PokemonResponse {
  count: number;
  next: string;
  previous: null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface DicodingResponse {
  error: boolean;
  message: string;
  count: number;
  restaurants: Restaurant[];
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  pictureId: string;
  city: string;
  rating: number;
}

export const baseUrlPokemon: string = "https://pokeapi.co/api/v2/pokemon";
export const baseUrlDicoding: string =
  "https://restaurant-api.dicoding.dev/list";
