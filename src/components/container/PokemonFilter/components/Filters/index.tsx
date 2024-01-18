import { FC, HTMLAttributes } from "react";
import { TypeArray, matherType, PokemonTypes } from "@libs/pokemon/PokemonType";
import useFilterPokemon from "@container/PokemonFilter/Provider/useFilterPokemon";
import usePokemon from "@features/store/StatePokemon";
import Expanded from "@common/Expanded";
import ButtonFilter from "./FilterType";
import ButtonReset from "./FilterReset";
import ButtonFavorite from "./FilterFavorite";
import ButtonGetMore from "@ui/ButtonGetMore";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ ...resProps }) => {
  const { type, data } = useFilterPokemon();
  const amountPokemon = usePokemon((s) => s.allPokemon.length);
  return (
    <div
      {...resProps}
      className={
        " sticky  top-0 z-10 h-[3rem] max-w-[1000px] m-auto " +
        `   ${resProps.className ? resProps.className : ""}`
      }
    >
      <Expanded
        expended={
          <nav className=" mt-8 bg-white px-8 py-2 rounded-xl ">
            <span className="underline text-2xl block">Pokemon table </span>
            <span className="inline-block">({amountPokemon}) Pokemon</span>
            <span className="inline-block mx-4">
              {type.trim() ? `type #${type} (${data.length}) ` : ""}
            </span>
          </nav>
        }
      >
        <div className="bg-white px-8 pb-2 absolute translate-y-[-10px] ">
          <h3 className="text-lg font-light my-5 underline">Pokemon type</h3>
          {TypeArray.map((type, id) => (
            <ButtonFilter
              key={type + id}
              className={` ${type}  font-bold  text-white`}
              pokemonType={matherType(type as PokemonTypes)}
            />
          ))}
          <ButtonReset />
          <ButtonFavorite />
          <ButtonGetMore />
        </div>
      </Expanded>
    </div>
  );
};

export default index;
