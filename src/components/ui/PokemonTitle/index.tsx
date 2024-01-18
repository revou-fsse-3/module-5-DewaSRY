import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ pokemon, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={
        "flex justify-between w-full " +
        " bg-title px-4 text-white  font-bold " +
        `${resProps.className ? resProps.className : ""}`
      }
    >
      <span className="text-[2rem]   "># {pokemon.id}</span>
      <span className={" text-xl   "}>{pokemon.name.toLocaleUpperCase()}</span>
    </div>
  );
};

export default index;
