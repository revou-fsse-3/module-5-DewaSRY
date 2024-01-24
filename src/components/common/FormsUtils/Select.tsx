import { FC, SelectHTMLAttributes, PropsWithChildren } from "react";
import Label, { getLabelInputProps } from "./Label";
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options?: string[];
}
type SelectComponent = FC<SelectProps> & PropsWithChildren;
const Select: SelectComponent = ({
  children,
  label,
  options,
  ...restProps
}) => {
  if (options === undefined) options = [];
  return (
    <Label label={label}>
      <select
        {...getLabelInputProps(label)}
        {...restProps}
        className={`${
          restProps.className
            ? restProps.className
            : `active:outline-none focus:outline-none border-b-4 h-12 font-light`
        }
 
          `}
      >
        <option value="">Select Yours {label}</option>
        {options.map((op, id) => (
          <option value={op} key={id}>
            {op}
          </option>
        ))}
      </select>
      {children}
    </Label>
  );
};

export default Select;
