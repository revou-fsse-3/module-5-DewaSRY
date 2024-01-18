import { FC, Fragment, HTMLAttributes } from "react";
import SearchPokemon from "@container/SearchPokemon/components/FormSearch";
import Link from "next/link";
interface indexProps extends HTMLAttributes<HTMLElement> {}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ ...resProps }) => {
  return (
    <nav
      {...resProps}
      className={
        "  bg-white  rounded-xl " +
        "w-full relative z-20  max-w-[1800px] mx-4 lg:mx-auto my-8  " +
        "flex flex-wrap xl:flex-nowrap " +
        `${resProps.className ? resProps.className : ""}`
      }
    >
      <Link href="/" className="w-[250px] xl:flex-1 ">
        <img
          className="h-[75px] inline-block  "
          height={50}
          src="/src/assets/Pokédex_logo.png"
          alt=""
        />
      </Link>
      <div className="h-full py-4 min-w-[600px] flex-1 xl:flex-[3] ">
        <SearchPokemon className=" " />
      </div>
    </nav>
  );
};

export default index;
