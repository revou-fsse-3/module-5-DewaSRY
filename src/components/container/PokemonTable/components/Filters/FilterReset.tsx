import { FC, ButtonHTMLAttributes, PropsWithChildren } from "react";
import Button from "@common/Button";
import useFilterPokemon from "@container/PokemonFilter/Provider/useFilterPokemon";
interface ButtonResetProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
type ButtonResetComponents = FC<ButtonResetProps> & PropsWithChildren;
const ButtonReset: ButtonResetComponents = ({ children, ...resProps }) => {
  const { setFilterPokemon, allPokemon } = useFilterPokemon();
  const handleResetPokemon = () => {
    setFilterPokemon(allPokemon);
  };
  return (
    <Button
      {...resProps}
      onClick={handleResetPokemon}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      ALl Pokemon ({allPokemon.length})
    </Button>
  );
};

export default ButtonReset;
