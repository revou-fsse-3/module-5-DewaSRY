import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface indexProps extends HTMLAttributes<HTMLHeadElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  return (
    <h2
      {...resProps}
      className={
        "text-2xl  inline-block underline " +
        ` ${resProps.className ? resProps.className : ""} `
      }
    >
      {children}
    </h2>
  );
};

export default index;
