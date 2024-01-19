import { FC, HTMLAttributes } from "react";
import FilterTypes from "./FilterTypes";
// import FilterType from "./FilterTypes";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

import NavigatePokemon from "./NavigatePokemon";
import Button, { ButtonTypes } from "@common/Button";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ ...resProps }) => {
  return (
    <div className="bg-white flex sticky top-0  px-8 pb-2 max-w-[1000px]  m-auto  z-20  py-4 rounded-xl">
      <Button className="text-3xl" ButtonType={ButtonTypes.BaseButton}>
        <NavigatePokemon addNum={-1}>
          <FaAnglesLeft className="" />
        </NavigatePokemon>
      </Button>
      <FilterTypes />
      <Button className="text-3xl" ButtonType={ButtonTypes.BaseButton}>
        <NavigatePokemon addNum={1}>
          <FaAnglesRight />
        </NavigatePokemon>
      </Button>
    </div>
  );
};

export default index;
