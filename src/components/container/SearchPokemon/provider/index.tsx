import { pokemonSearch } from "./useSearch";
import { FC, HTMLAttributes, PropsWithChildren, useState, useRef } from "react";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
import usePokemon from "@/features/store/StatePokemon";
interface PokemonSearchProviderProps extends HTMLAttributes<HTMLDivElement> {}
type PokemonSearchProviderComponents = FC<PokemonSearchProviderProps> &
  PropsWithChildren;
const PokemonSearchProvider: PokemonSearchProviderComponents = ({
  children,
}) => {
  const allPokemon = usePokemon((s) => s.allPokemon);
  const [data, setData] = useState<GetPokemonProps[]>([]);
  const searchText = useRef("");
  const getSearchByName = (name: string) => {
    searchText.current = name;
    let matchPokemon: GetPokemonProps[] = [];
    if (searchText.current.trim()) {
      matchPokemon = allPokemon.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    setData(matchPokemon);
  };
  const getReset = () => {
    setData([]);
  };
  return (
    <pokemonSearch.Provider
      value={{
        data,
        getSearchByName,
        getReset,
        searchText: searchText.current,
      }}
    >
      {children}
    </pokemonSearch.Provider>
  );
};

export default PokemonSearchProvider;
