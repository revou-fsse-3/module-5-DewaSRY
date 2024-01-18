import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
import H2 from "@common/H2";
import InfoDisplay from "./InfoDisplay";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ pokemon, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={
        " text-white" + `${resProps.className ? resProps.className : ""}`
      }
    >
      <div>
        <H2>BMI</H2>
        <InfoDisplay title="Hight">
          {Number(pokemon.height / 10).toFixed(2)} M
        </InfoDisplay>
        <InfoDisplay title="Weight">{pokemon.weight} KG</InfoDisplay>
      </div>
    </div>
  );
};

export default index;
