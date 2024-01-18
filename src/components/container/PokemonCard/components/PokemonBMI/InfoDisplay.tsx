import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface InfoDisplayProps extends HTMLAttributes<HTMLParagraphElement> {
  title: string;
}
type InfoDisplayComponents = FC<InfoDisplayProps> & PropsWithChildren;
const InfoDisplay: InfoDisplayComponents = ({
  children,
  title,
  ...resProps
}) => {
  return (
    <p
      {...resProps}
      className={
        "w-full flex justify-between text-xl  " +
        `${resProps.className ? resProps.className : ""}`
      }
    >
      <span className="text-gray-500">{title}</span>
      <span className="">{children}</span>
    </p>
  );
};

export default InfoDisplay;
