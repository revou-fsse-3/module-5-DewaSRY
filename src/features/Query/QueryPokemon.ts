import { useQuery } from "@tanstack/react-query";
import { GetPokemon } from "@/libs/pokemon";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
import ErrorFetching from "@/libs/Error";
export default function useQueryPokemon(name: string) {
  return useQuery<GetPokemonProps, ErrorFetching>({
    queryKey: [`pokemon-${name}`],
    queryFn: ({ signal }) => GetPokemon(name, signal),
  });
}
