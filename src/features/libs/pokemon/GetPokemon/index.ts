import { BASE_URL } from "@libs/pokemon";
import { makeFetchError } from "@libs/Error";
// import { GetPokemonProps } from "@/utils/pokemon/GetPokemonProps";
import { addDocument, getDocument } from "@libs/indexDB";
import type GetPokemonProps from "./GetPokemonProps";
import ErrorFetching from "@libs/Error";
export default async function GetPokemon(
  name = "",
  signal?: AbortSignal
): Promise<GetPokemonProps> {
  let POKEMON_URL = BASE_URL + "pokemon" + "/" + name;
  let pokemon = await getDocument<GetPokemonProps>(POKEMON_URL);
  if (pokemon) return pokemon;
  try {
    pokemon = await fetchPokemon(POKEMON_URL, signal);
    console.log(pokemon);
    console.log("testing ");
    await addDocument(POKEMON_URL, pokemon);
    return pokemon;
  } catch (error) {
    if (error instanceof ErrorFetching) {
      throw error;
    } else {
      throw new ErrorFetching("pokemon not found", name, 404);
    }
  }
}

async function fetchPokemon(
  url: string,
  signal?: AbortSignal
): Promise<GetPokemonProps> {
  const req = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    signal: signal,
  });
  await makeFetchError(req, "Failed to fetch pokemon with this " + name);
  const response = (await req.json()) as unknown as GetPokemonProps;
  if (!response) throw new ErrorFetching("pokemon not found", "", 404);
  return response as GetPokemonProps;
}

export { GetPokemonProps };
