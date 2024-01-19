import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { filterPokemon } from "./useFilterPokemon";
import {
  PokemonType,
  PokemonTypes,
  filterPokemonType,
} from "@libs/pokemon/PokemonType";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";

interface FilterProviderProps extends HTMLAttributes<HTMLDivElement> {
  allPokemon: GetPokemonProps[];
}
type FilterProviderComponents = FC<FilterProviderProps> & PropsWithChildren;
const FilterProvider: FilterProviderComponents = ({ children, allPokemon }) => {
  const storeAllPokemon = useRef<GetPokemonProps[]>(allPokemon);
  const [data, setData] = useState(allPokemon);

  const storeType = useRef<PokemonTypes | "" | "favorite">("");
  const setFilterPokemon = async (
    data: GetPokemonProps[],
    type?: PokemonType | "favorite"
  ) => {
    if (type?.trim()) {
      storeType.current = type;
    } else {
      storeType.current = "";
    }
    setData(data);
  };

  useEffect(() => {
    let newType: GetPokemonProps[] = allPokemon;
    if (storeType.current.trim().length > 0) {
      newType = filterPokemonType(
        allPokemon,
        storeType.current as PokemonTypes
      );
    }
    setData(newType);
  }, [allPokemon]);
  return (
    <filterPokemon.Provider
      value={{
        data,
        setFilterPokemon,
        type: storeType.current,
        allPokemon: storeAllPokemon.current,
      }}
    >
      {children}
    </filterPokemon.Provider>
  );
};

export default FilterProvider;
