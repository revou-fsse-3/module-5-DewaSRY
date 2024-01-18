import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
import H2 from "@common/H2";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ pokemon, ...resProps }) => {
  return (
    <div className="text-white">
      <H2 className=" my-2 ">Element</H2>
      <div>
        {pokemon.types.map((type) => {
          return (
            <span
              {...resProps}
              key={type.type.name}
              className={
                `${resProps.className ? resProps.className : ""} ` +
                ` ${type.type.name} inline-block px-8 py-1 rounded-xl ml-4`
              }
            >
              {type.type.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default index;
