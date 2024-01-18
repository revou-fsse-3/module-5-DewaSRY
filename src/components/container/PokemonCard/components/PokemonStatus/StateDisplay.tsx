import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { Stat } from "@libs/pokemon/GetPokemon/GetPokemonProps";
import Progress from "@common/Progress";
interface StateDisplayProps extends HTMLAttributes<HTMLDivElement> {
  status: Stat;
}
type StateDisplayComponents = FC<StateDisplayProps> & PropsWithChildren;
const StateDisplay: StateDisplayComponents = ({ status, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`h-[1rem] z-2   w-full mb-[1.5rem] ${
        resProps.className ? resProps.className : ""
      }`}
    >
      <h3 className="text-lg font-light  z-4  w-full flex justify-between">
        <span className="text-xl  font-light   ">{status.stat.name}</span>
        <span>{status.base_stat}</span>
      </h3>
      <Progress
        className=" translate-y-[-20%]  h-[1rem]  "
        denominator={100}
        numerator={Math.min(status.base_stat, 100)}
      />
    </div>
  );
};

export default StateDisplay;
