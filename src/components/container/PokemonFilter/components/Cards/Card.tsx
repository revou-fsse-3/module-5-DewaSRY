import { FC, HTMLAttributes } from "react";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
import Link from "next/link";
import PokemonType from "@ui/pokemonType";
import PokemonImg from "@ui/PokemonImg";
import PokemonTitle from "@ui/PokemonTitle";
interface CardDisplayProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type CardDisplayComponents = FC<CardDisplayProps>;
const CardDisplay: CardDisplayComponents = ({ pokemon, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : " "}`}
    >
      <PokemonImg
        className="w-[300px] h-[300px]  bg-card   "
        pokemon={pokemon}
      />
      <Link href={"/pokemon/" + pokemon.name} title={pokemon.name}>
        <PokemonTitle pokemon={pokemon} />
      </Link>
      <PokemonType pokemon={pokemon} className="text-lg" />
    </div>
  );
};

export default CardDisplay;
