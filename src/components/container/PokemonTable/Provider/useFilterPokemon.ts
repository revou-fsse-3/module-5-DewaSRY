import { createContext, useContext } from "react";
import { PokemonType, PokemonTypes } from "@libs/pokemon/PokemonType";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
const filterPokemon = createContext({
  setFilterPokemon: async (
    _data: GetPokemonProps[],
    _type?: PokemonType | "favorite"
  ) => {},
  data: [] as GetPokemonProps[],
  type: "" as PokemonTypes | "" | "favorite",
  allPokemon: [] as GetPokemonProps[],
});

export default function useFilterPokemon() {
  const context = useContext(filterPokemon);
  if (!context)
    throw Error("please use this hooks inside the filterPokemon context");
  return context;
}

export { filterPokemon };
