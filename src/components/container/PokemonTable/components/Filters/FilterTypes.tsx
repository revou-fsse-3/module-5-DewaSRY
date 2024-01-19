import { FC, HTMLAttributes, PropsWithChildren } from "react";
import Expanded from "@common/Expanded";
import { TypeArray, matherType, PokemonTypes } from "@libs/pokemon/PokemonType";
import FilterType from "./FilterType";
import FilterReset from "./FilterReset";
import FilterFavorite from "./FilterFavorite";
import useFilterPokemon from "@container/PokemonTable/Provider/useFilterPokemon";
interface FilterTypesProps extends HTMLAttributes<HTMLDivElement> {}
type FilterTypesComponents = FC<FilterTypesProps> & PropsWithChildren;
const FilterTypes: FilterTypesComponents = ({ children, ...resProps }) => {
  const { type } = useFilterPokemon();
  return (
    <Expanded
      expended={
        <h3 className="text-lg font-light my-5 underline mx-4 ">
          {type.trim() ? `# ${type}` : "Pokemon's"}
        </h3>
      }
    >
      <div className=" bg-white absolute left-0 px-10 py-4 ">
        {TypeArray.map((type, id) => (
          <FilterType
            key={type + id}
            className={` ${type}  font-bold  text-white`}
            pokemonType={matherType(type as PokemonTypes)}
          />
        ))}
        <FilterReset />
        <FilterFavorite />
      </div>
    </Expanded>
  );
};

export default FilterTypes;
