import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface StartWrapperProps extends HTMLAttributes<HTMLSpanElement> {}
type StartWrapperComponents = FC<StartWrapperProps> & PropsWithChildren;
const StartWrapper: StartWrapperComponents = ({ children, ...resProps }) => {
  return (
    <span
      {...resProps}
      className={
        "inline-block text-[3rem] text-yellow-500 " +
        `${resProps.className ? resProps.className : ""}`
      }
    >
      {children}
    </span>
  );
};

export default StartWrapper;
