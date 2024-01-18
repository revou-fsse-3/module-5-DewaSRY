import { FC, ImgHTMLAttributes } from "react";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
import PokemonFavorite from "./PokemonFavorite";
interface indexProps extends ImgHTMLAttributes<HTMLImageElement> {
  pokemon: GetPokemonProps;
}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ pokemon, ...resProps }) => {
  return (
    <div className="relative inline-block">
      <PokemonFavorite className="absolute top-0 right-0" pokemon={pokemon} />
      <img
        {...resProps}
        src={pokemon?.sprites?.other?.dream_world.front_default}
        alt={`Pokemon ${pokemon?.name}`}
        className={` ${resProps.className ? resProps.className : ""} `}
      />
    </div>
  );
};

export default index;
