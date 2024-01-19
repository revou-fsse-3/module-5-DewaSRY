import { FC, ImgHTMLAttributes, PropsWithChildren } from "react";
// import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps"
import PokemonImg from "@ui/PokemonImg";
import Link from "next/link";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
interface PokemonSearchCardProps extends ImgHTMLAttributes<HTMLImageElement> {
  pokemon: GetPokemonProps;
}
type PokemonSearchCardComponents = FC<PokemonSearchCardProps> &
  PropsWithChildren;
const PokemonSearchCard: PokemonSearchCardComponents = ({
  children,
  pokemon,
  ...resProps
}) => {
  return (
    <Link href={pokemon.name}>
      <PokemonImg
        {...resProps}
        className={` ${resProps.className ? resProps.className : ""}`}
        width={50}
        height={50}
        pokemon={pokemon}
      />
      {pokemon.name}
    </Link>
  );
};

export default PokemonSearchCard;
