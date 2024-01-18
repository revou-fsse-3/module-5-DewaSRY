import { FC, ButtonHTMLAttributes, PropsWithChildren, Fragment } from "react";
import Button, { ButtonTypes } from "@common/Button";
import useFilterPokemon from "@container/PokemonFilter/Provider/useFilterPokemon";
import useFavorite from "@/features/store/StateFavoritePokemon";
import { FetchPokemonByName } from "@libs/pokemon";
interface ButtonFavoriteProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
type ButtonFavoriteComponents = FC<ButtonFavoriteProps> & PropsWithChildren;
const ButtonFavorite: ButtonFavoriteComponents = ({
  children,
  ...resProps
}) => {
  const { favoritePokemonNames } = useFavorite();
  const { setFilterPokemon, type } = useFilterPokemon();
  const getFavoritePokemon = async () => {
    const favoritePokemon = await FetchPokemonByName(favoritePokemonNames);
    setFilterPokemon(favoritePokemon, "favorite");
  };
  return (
    <Fragment>
      {favoritePokemonNames.length ? (
        <Button
          {...resProps}
          disabled={type === "favorite"}
          onClick={getFavoritePokemon}
          ButtonType={ButtonTypes.FiveButton}
          className={`${resProps.className ? resProps.className : ""}`}
        >
          Favorite ({favoritePokemonNames.length})
        </Button>
      ) : null}
    </Fragment>
  );
};

export default ButtonFavorite;
