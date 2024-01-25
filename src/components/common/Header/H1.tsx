import { FC, HTMLAttributes, PropsWithChildren } from "react";

type H1Props = HTMLAttributes<HTMLHeadingElement>;
type H1Components = FC<H1Props> & PropsWithChildren;
const H1: H1Components = ({ children, ...resProps }) => {
  return (
    <h1
      {...resProps}
      className={`
          text-bold underline text-3xl
      ${resProps.className ? resProps.className : ""}`}
    >
      {children}
    </h1>
  );
};

export default H1;
