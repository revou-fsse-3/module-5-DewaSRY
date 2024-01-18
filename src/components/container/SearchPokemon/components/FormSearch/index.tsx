import { FC, FormHTMLAttributes, PropsWithChildren } from "react";
import PokemonInput from "@container/SearchPokemon/components/PokemonInput";
import SearchButton from "@container/SearchPokemon/components/SearchButton";
import SearchProvider from "@container/SearchPokemon/provider";
import DropDown from "@container/SearchPokemon/components/DropDown";

interface indexProps extends FormHTMLAttributes<HTMLFormElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  return (
    <SearchProvider>
      <form
        {...resProps}
        className={
          "relative " + ` ${resProps.className ? resProps.className : " "} `
        }
      >
        <PokemonInput
          placeholder="type pokemon here"
          className="text-xl"
          label="name"
        />
        <SearchButton
          type="submit"
          className="cursor-pointer absolute right-0 top-0 "
        />
      </form>
      <DropDown className="absolute  max-h-[15rem] overflow-y-auto px-8 rounded-xl bg-white " />
    </SearchProvider>
  );
};

export default index;
