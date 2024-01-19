import {
  FC,
  Fragment,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react";
import Navbar from "@layout/Navbar";
import MainContainer from "@layout/MainContainer";

interface indexProps extends HTMLAttributes<HTMLDivElement> {
  page: ReactNode;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, page, ...resProps }) => {
  return (
    <Fragment>
      {children}
      <Navbar />
      <MainContainer>{page}</MainContainer>
    </Fragment>
  );
};

export default index;
