import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface CardsWrapperProps extends HTMLAttributes<HTMLDivElement> {}
type CardsWrapperComponents = FC<CardsWrapperProps> & PropsWithChildren;
const CardsWrapper: CardsWrapperComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className=" grid grid-cols-pokemon-table max-w-[2000px] gap-x-4 gap-y-8  px-6 py-10 lg:mx-auto place-content-center"
    >
      {children}
    </div>
  );
};

export default CardsWrapper;
