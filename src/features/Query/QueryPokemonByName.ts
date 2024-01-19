import { useQuery } from "@tanstack/react-query";
import { FetchPokemonByName } from "@libs/pokemon";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
import { GetAllResult } from "@libs/pokemon/GetAllPokemon";

import ErrorFetching from "@libs/Error";
export default function QueryPokemonByName(pokemonNames: GetAllResult[]) {
  return useQuery<GetPokemonProps[], ErrorFetching>({
    queryKey: [`pokemon-start-${pokemonNames.at(0)?.name}`],
    queryFn: ({ signal }) => FetchPokemonByName(pokemonNames, signal),
  });
}
