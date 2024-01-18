import { FC, HTMLAttributes, PropsWithChildren } from "react";

import PokemonFilter from "@container/PokemonFilter/components/Filters";
import PokemonCards from "@container/PokemonFilter/components/Cards";
import FilterProvider from "./Provider/FilterProvider";

interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({}) => {
  return (
    <FilterProvider>
      <PokemonFilter />
      <PokemonCards />
    </FilterProvider>
  );
};

export default index;
