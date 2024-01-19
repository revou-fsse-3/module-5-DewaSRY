import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
interface indexProps extends HTMLAttributes<HTMLElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children }) => {
  return <main className={inter.className}>{children}</main>;
};

export default index;
