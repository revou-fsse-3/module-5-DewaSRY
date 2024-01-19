import GetPokemon, { GetPokemonProps } from "@libs/pokemon/GetPokemon";
import { GetAllResult } from "@libs/pokemon/GetAllPokemon";

export default async function FetchPokemonALlByName(
  pokemonNames: GetAllResult[],
  signal?: AbortSignal
): Promise<GetPokemonProps[]> {
  try {
    const mapPokemon = pokemonNames.map(
      async (p) => await GetPokemon(p.name, signal)
    );
    const result = await Promise.all(mapPokemon);
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw Error("failed to fetch pokemon ");
    } else return [];
  }
}
