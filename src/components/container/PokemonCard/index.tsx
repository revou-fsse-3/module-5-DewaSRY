import { FC, Fragment, HTMLAttributes } from "react";
import PokemonGallery from "@container/PokemonCard/components/PokemonGallery";
import PokemonStatus from "@container/PokemonCard/components/PokemonStatus";
import PokemonBMI from "@container/PokemonCard/components/PokemonBMI";
import PokemonImg from "@ui/PokemonImg";
import PokemonTitle from "@ui/PokemonTitle";
import PokemonType from "@ui/pokemonType";
import type { GetPokemonProps } from "@libs/pokemon/GetPokemon";
import ErrorFetching from "@libs/Error";
import { useQuery } from "@tanstack/react-query";
import { GetPokemon } from "@libs/pokemon";
import ErrorBanner from "./components/ErrorBanner";
import Shimmer from "@/components/common/Shimmer";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  pokemonName: string;
}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ pokemonName }) => {
  const {
    data: pokemon,
    isLoading,
    error,
  } = useQuery<GetPokemonProps, ErrorFetching>({
    queryKey: ["pokemon"],
    queryFn: () => GetPokemon(pokemonName),
  });
  return (
    <Fragment>
      {pokemon && (
        <>
          <PokemonImg
            pokemon={pokemon}
            height={500}
            width={400}
            className="bg-card rounded-xl "
          />
          <PokemonTitle pokemon={pokemon} />
          <PokemonBMI pokemon={pokemon} />
          <PokemonType pokemon={pokemon} className="text2xl px-6 py-2" />
          <PokemonStatus
            pokemon={pokemon}
            className="lg:col-start-2 lg:col-end-3 "
          />
          <PokemonGallery className=" " pokemon={pokemon} />
        </>
      )}
      {isLoading && <Shimmer times={3} className="mb-2 py-[150px]" />}
      {error && <ErrorBanner error={error} />}
    </Fragment>
  );
};

export default index;
