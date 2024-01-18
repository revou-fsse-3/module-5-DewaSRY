import Button, { ButtonTypes } from "@common/Button";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import usePokemon from "@/features/store/StatePokemon";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  const { isLoading, getMorePokemon, allPokemon } = usePokemon();
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <Button
        isLoading={isLoading}
        ButtonType={ButtonTypes.TernaryButton}
        onClick={getMorePokemon}
      >
        ({allPokemon.length}) pokemon get More
      </Button>
    </div>
  );
};

export default index;
