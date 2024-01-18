import { create } from "zustand";
// import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { GetAllResult } from "@libs/pokemon/GetAllPokemon";
const pokemonInitValue = {
  favoritePokemonNames: [] as GetAllResult[],
};
type Actions = {
  addPokemonFavorite: (data: string) => void;
};
type State = typeof pokemonInitValue;

const StateFavoritePokemon = create(
  persist<State & Actions>(
    (set, get) => ({
      ...pokemonInitValue,
      addPokemonFavorite: (data) =>
        set({
          favoritePokemonNames: [
            ...get().favoritePokemonNames,
            {
              name: data,
              url: "https://pokeapi.co/api/v2/pokemon/" + data,
            },
          ],
        }),
    }),
    { name: "pokemon-favorite" }
  )
);

export default StateFavoritePokemon;

export { pokemonInitValue };
