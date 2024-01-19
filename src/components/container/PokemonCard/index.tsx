import { FC, Fragment, HTMLAttributes } from "react";
import PokemonGallery from "@container/PokemonCard/components/PokemonGallery";
import PokemonStatus from "@container/PokemonCard/components/PokemonStatus";
import PokemonBMI from "@container/PokemonCard/components/PokemonBMI";
import PokemonImg from "@ui/PokemonImg";
import PokemonTitle from "@ui/PokemonTitle";
import PokemonType from "@ui/pokemonType";
import ErrorBanner from "@common/ErrorBanner";
import Shimmer from "@/components/common/Shimmer";
import QueryPokemon from "@features/Query/QueryPokemon";

interface indexProps extends HTMLAttributes<HTMLDivElement> {
  pokemonName: string;
}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ pokemonName }) => {
  const { data: pokemon, isLoading, error } = QueryPokemon(pokemonName);
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
