import { FC, LabelHTMLAttributes, PropsWithChildren } from "react";
// import * as SOP from "@/utils/StringOperations";
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
}
type LabelComponent = FC<LabelProps> & PropsWithChildren;
const Label: LabelComponent = ({ label, children, ...resProps }) => {
  // const CapitalizeLabel = useMemo(
  //   () => SOP.getStringCamelChaseToLabel(label),
  //   []
  // );
  return (
    <label {...resProps} className="form-field pr-4 flex flex-col ">
      {children}
      {/* <h3 className=" font-light hidden">{CapitalizeLabel}</h3> */}
    </label>
  );
};

export default Label;
