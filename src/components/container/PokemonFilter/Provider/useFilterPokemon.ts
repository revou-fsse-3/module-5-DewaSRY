import { createContext, useContext } from "react";
import { PokemonType, PokemonTypes } from "@libs/pokemon/PokemonType";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
// import { pokemonInitValue } from "@store/StateFavoritePokemon";
const filterPokemon = createContext({
  setFilterPokemon: async (
    _data: GetPokemonProps[],
    _type?: PokemonType | "favorite"
  ) => {},
  data: [] as GetPokemonProps[],
  isLoading: false,
  type: "" as PokemonTypes | "" | "favorite",
  // getResetPokemon: () => {},
  // getFavoritePokemon: async () => {},
  // addPokemonFavorite: (_data: string) => {},
  // ...pokemonInitValue,
});

export default function useFilterPokemon() {
  const context = useContext(filterPokemon);
  if (!context)
    throw Error("please use this hooks inside the filterPokemon context");
  return context;
}

export { filterPokemon };
