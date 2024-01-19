import { FC, HTMLAttributes, PropsWithChildren } from "react";

import PokemonFilter from "@container/PokemonFilter/components/Filters";
import PokemonCards from "@container/PokemonFilter/components/Cards";
import FilterProvider from "./Provider/FilterProvider";
import ErrorBanner from "@common/ErrorBanner";
import Shimmer from "@/components/common/Shimmer";
import { GetAllResult } from "@libs/pokemon/GetAllPokemon";
import QueryPokemonByName from "@features/Query/QueryPokemonByName";
import CardsWrapper from "./components/Cards/CardsWrapper";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  pokemonNames: GetAllResult[];
}
type indexComponents = FC<indexProps> & PropsWithChildren;

const index: indexComponents = ({ pokemonNames }) => {
  const { data, error, isLoading } = QueryPokemonByName(pokemonNames);
  return (
    <>
      {data && (
        <>
          <FilterProvider allPokemon={data}>
            <PokemonFilter />
            <PokemonCards />
          </FilterProvider>
        </>
      )}

      {isLoading && (
        <>
          <Shimmer times={2} className="mb-2 py-[20px]" />
          <CardsWrapper>
            {Array(24)
              .fill(null)
              .map((_val, id) => (
                <Shimmer key={id} times={1} className="mb-2.5 py-[180px]" />
              ))}
          </CardsWrapper>
        </>
      )}
      {error && <ErrorBanner error={error} />}
    </>
  );
};

export default index;
