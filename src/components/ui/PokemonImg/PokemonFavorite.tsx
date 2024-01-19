import { FC, ButtonHTMLAttributes, PropsWithChildren } from "react";
import Button, { ButtonTypes } from "@common/Button";
import useFilterPokemon from "@/features/store/StateFavoritePokemon";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
import StartWrapper from "./StartWrapper";
import { stringComparator } from "@features/utils/StringOperations";
interface indexProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pokemon: GetPokemonProps;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ pokemon, ...resProps }) => {
  const { addPokemonFavorite, favoritePokemonNames, removePokemonFavorite } =
    useFilterPokemon();

  let isFavorite = favoritePokemonNames.find((p) =>
    stringComparator(p.name, pokemon.name)
  )
    ? true
    : false;

  const handleClick = () => {
    let favoriteHandle = addPokemonFavorite;
    if (isFavorite) {
      favoriteHandle = removePokemonFavorite;
    }
    favoriteHandle(pokemon.name);
  };
  return (
    <Button
      title={
        isFavorite
          ? `Remove ${pokemon.name} from yor favorite`
          : `Add ${pokemon.name} to your favorite`
      }
      onClick={handleClick}
      ButtonType={ButtonTypes.BaseButton}
      {...resProps}
      className={" p-2" + `  ${resProps.className ? resProps.className : ""}`}
    >
      {isFavorite ? (
        <StartWrapper>&#9733;</StartWrapper>
      ) : (
        <StartWrapper>&#x2606;</StartWrapper>
      )}
    </Button>
  );
};

export default index;
