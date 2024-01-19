import { FC, Fragment, HTMLAttributes, PropsWithChildren } from "react";
import useFilterPokemon from "@container/PokemonTable/Provider/useFilterPokemon";
import PokemonCard from "./Card";
import CardsWrapper from "./CardsWrapper";

interface PokemonCardsProps extends HTMLAttributes<HTMLDivElement> {}
type PokemonCardsComponents = FC<PokemonCardsProps> & PropsWithChildren;
const PokemonCards: PokemonCardsComponents = ({ children, ...resProps }) => {
  const { data } = useFilterPokemon();
  return (
    <CardsWrapper {...resProps}>
      {data && (
        <Fragment>
          {data.map((p, id) => (
            <PokemonCard className=" " key={p.name + id + p.id} pokemon={p} />
          ))}
        </Fragment>
      )}

      {/* {isLoading ? (
        <Fragment>
          {Array(24)
            .fill(null)
            .map((_val, id) => (
              <Shimmer key={id} times={1} className="mb-2.5 py-[180px]" />
            ))}
        </Fragment>
      ) : (
  
      )} */}
    </CardsWrapper>
  );
};

export default PokemonCards;
