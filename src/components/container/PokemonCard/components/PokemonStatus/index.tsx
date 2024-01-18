import { FC, Fragment, HTMLAttributes, PropsWithChildren } from "react";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
import StatusDisplay from "./StateDisplay";
import H2 from "@common/H2";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ pokemon, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={
        "w-full text-white " +
        ` ${resProps.className ? resProps.className : ""}`
      }
    >
      <H2>Status</H2>
      <div className=" py-6 px-4 rounded-lg ">
        {pokemon.stats.map((d, id) => (
          <Fragment key={id}>
            <StatusDisplay status={d} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default index;
