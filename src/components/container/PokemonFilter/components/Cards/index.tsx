import { FC, Fragment, HTMLAttributes, PropsWithChildren } from "react";
import useFilterPokemon from "@container/PokemonFilter/Provider/useFilterPokemon";
import PokemonCard from "./Card";
import Shimmer from "@common/Shimmer";
interface PokemonCardsProps extends HTMLAttributes<HTMLDivElement> {}
type PokemonCardsComponents = FC<PokemonCardsProps> & PropsWithChildren;
const PokemonCards: PokemonCardsComponents = ({ children, ...resProps }) => {
  const { data, isLoading } = useFilterPokemon();
  return (
    <div
      {...resProps}
      className={
        " grid grid-cols-pokemon-table max-w-[1800px] gap-x-4 gap-y-8  px-6 py-10 lg:mx-auto place-content-center" +
        ` ${resProps.className ? resProps.className : ""}`
      }
    >
      {isLoading ? (
        <Fragment>
          {Array(24)
            .fill(null)
            .map((_val, id) => (
              <Shimmer key={id} times={1} className="mb-2.5 py-[180px]" />
            ))}
        </Fragment>
      ) : (
        <Fragment>
          {data.map((p, id) => (
            <PokemonCard className=" " key={p.name + id + p.id} pokemon={p} />
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default PokemonCards;
