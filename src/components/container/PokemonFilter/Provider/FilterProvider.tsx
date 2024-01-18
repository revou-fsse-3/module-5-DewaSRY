import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import usePokemon from "@/features/store/StatePokemon";
import { filterPokemon } from "./useFilterPokemon";
import {
  PokemonType,
  PokemonTypes,
  filterPokemonType,
} from "@libs/pokemon/PokemonType";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
interface FilterProviderProps extends HTMLAttributes<HTMLDivElement> {}
type FilterProviderComponents = FC<FilterProviderProps> & PropsWithChildren;
const FilterProvider: FilterProviderComponents = ({ children }) => {
  const { allPokemon, getMorePokemon, isLoading } = usePokemon();
  const [data, setData] = useState(allPokemon);
  // const [isLoading, setIsLoading] = useState(false);
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
  useEffect(() => {
    getMorePokemon();
  }, []);
  return (
    <filterPokemon.Provider
      value={{
        data,
        isLoading,
        setFilterPokemon,
        type: storeType.current,
      }}
    >
      {children}
    </filterPokemon.Provider>
  );
};

export default FilterProvider;
