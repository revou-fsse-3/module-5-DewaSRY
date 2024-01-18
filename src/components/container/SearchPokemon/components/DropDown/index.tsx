import { FC, HTMLAttributes, PropsWithChildren, useRef } from "react";
import usePokemonSearch from "@container/SearchPokemon/provider/useSearch";
import PokemonCards from "./PokemonCards";
import Panel from "@common/Panel";
interface PokemonDropDownProps extends HTMLAttributes<HTMLDivElement> {}
type PokemonDropDownComponents = FC<PokemonDropDownProps> & PropsWithChildren;
const PokemonDropDown: PokemonDropDownComponents = ({ ...resProps }) => {
  const { data, getReset } = usePokemonSearch();
  const pokemonSearch = useRef<HTMLDivElement | null>(null);
  const handleCloseDopeDown = () => {
    getReset();
  };

  return (
    <div
      {...resProps}
      ref={pokemonSearch}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {data.length > 0 ? (
        <Panel
          handleClose={handleCloseDopeDown}
          parent={pokemonSearch.current!}
        >
          {data.map((p, id) => (
            <PokemonCards key={p.name + id} pokemon={p} />
          ))}
        </Panel>
      ) : null}
    </div>
  );
};

export default PokemonDropDown;
