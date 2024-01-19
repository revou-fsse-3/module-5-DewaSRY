import { FC, HTMLAttributes } from "react";
import { TypeArray, matherType, PokemonTypes } from "@libs/pokemon/PokemonType";
import FilterType from "./FilterType";
import FilterReset from "./FilterReset";
import FilterFavorite from "./FilterFavorite";
import NavigatePokemon from "./NavigatePokemon";
import Button from "@common/Button";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ ...resProps }) => {
  return (
    <div {...resProps} className={" m-auto "}>
      <div className="bg-white px-8 pb-2 ">
        <h3 className="text-lg font-light my-5 underline">Pokemon table </h3>
        <FilterReset />
        <FilterFavorite />
        <Button>
          <NavigatePokemon addNum={1}>Next pokemon</NavigatePokemon>
        </Button>
        <Button>
          <NavigatePokemon addNum={-1}>Prev pokemon</NavigatePokemon>
        </Button>
      </div>

      <div className="bg-white px-8 pb-2 ">
        <h3 className="text-lg font-light my-5 underline">Pokemon type</h3>
        {TypeArray.map((type, id) => (
          <FilterType
            key={type + id}
            className={` ${type}  font-bold  text-white`}
            pokemonType={matherType(type as PokemonTypes)}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
