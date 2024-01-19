import { FC, ButtonHTMLAttributes, PropsWithChildren } from "react";
import Button from "@common/Button";
import { filterPokemonType, PokemonType } from "@libs/pokemon/PokemonType";
import useFilterPokemon from "@container/PokemonFilter/Provider/useFilterPokemon";
interface ButtonFilterProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pokemonType: PokemonType;
}
type ButtonFilterComponents = FC<ButtonFilterProps> & PropsWithChildren;
const ButtonFilter: ButtonFilterComponents = ({
  children,
  pokemonType,
  ...resProps
}) => {
  const { setFilterPokemon, type, allPokemon } = useFilterPokemon();
  const pokemonTypeArr = filterPokemonType(allPokemon, pokemonType);
  const handleSetPokemon = () => {
    setFilterPokemon(pokemonTypeArr, pokemonType);
  };
  return (
    <>
      {pokemonTypeArr.length > 0 ? (
        <Button
          {...resProps}
          disabled={pokemonType === type}
          onClick={handleSetPokemon}
          className={`${resProps.className ? resProps.className : ""}`}
        >
          {pokemonType} ({pokemonTypeArr.length})
        </Button>
      ) : null}
    </>
  );
};

export default ButtonFilter;
