import { FC, LabelHTMLAttributes, PropsWithChildren } from "react";
import { getStringCamelChaseToLabel } from "@utils/StringOperations";
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
}
type LabelComponent = FC<LabelProps> & PropsWithChildren;
const Label: LabelComponent = ({ label, children, ...resProps }) => {
  const CapitalizeLabel = getStringCamelChaseToLabel(label);

  return (
    <label
      {...resProps}
      htmlFor={label}
      className={`${
        resProps.className
          ? resProps.className
          : `flex flex-col text-left gap-4`
      }`}
    >
      <span className=" font-light ">{CapitalizeLabel}</span>
      {children}
    </label>
  );
};

export default Label;
export function getLabelInputProps(label: string) {
  return {
    id: label,
    name: label,
  };
}
