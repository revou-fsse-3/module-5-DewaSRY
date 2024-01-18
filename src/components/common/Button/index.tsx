import { FC, ButtonHTMLAttributes, ReactNode, PropsWithChildren } from "react";
export const enum ButtonTypes {
  BaseButton = "border-none ",
  PrimaryButton = "bg-green-400 text-white border-green-400 ",
  SecondaryButton = "bg-blue-400 text-white border-blue-400 ",
  TernaryButton = "bg-sky-400 text-white border-sky-400 ",
  FourButton = "bg-red-400 text-white border-red-400 ",
  FiveButton = "bg-yellow-400 text-white border-yellow-400 ",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  ButtonType?: ButtonTypes;
  hidedButton?: boolean;
  activeButton?: boolean;
  isLoading?: boolean;
}
type ButtonComponent = FC<ButtonProps> & PropsWithChildren;
const Button: ButtonComponent = ({
  children,
  ButtonType = "",
  hidedButton = false,
  activeButton = false,
  isLoading = false,
  ...restProps
}) => {
  return (
    <button
      {...restProps}
      disabled={isLoading}
      className={
        `${hidedButton ? " hidden " : " inline-block "}` +
        `${activeButton ? " brightness-75 text-black " : "  "}` +
        " my-1 border-2 px-8 text-lg rounded-sm " +
        `${restProps.disabled ? "" : "hover:brightness-50 "} ` +
        " disabled:brightness-10 disabled:border-none  disabled:bg-gray-600 " +
        ButtonType +
        `${restProps.className ? restProps.className : ""}`
      }
    >
      {children}
    </button>
  );
};

export default Button;
