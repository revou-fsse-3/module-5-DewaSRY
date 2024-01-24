import { FC, InputHTMLAttributes, PropsWithChildren } from "react";
import Label, { getLabelInputProps } from "./Label";
export interface InputProps extends InputHTMLAttributes<HTMLDivElement> {
  label: string;
}
type InputComponent = FC<InputProps> & PropsWithChildren;
const Input: InputComponent = ({ label, children, ...resProps }) => {
  return (
    <Label label={label}>
      <input
        {...getLabelInputProps(label)}
        {...resProps}
        className={`${
          resProps.className
            ? resProps.className
            : `active:outline-none focus:outline-none px-3 h-6 font-light  py-6 `
        }
          `}
      />
      {children}
    </Label>
  );
};

export default Input;
