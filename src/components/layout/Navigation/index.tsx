import { getCookies } from "@libs/cookies";
import { NavigationLoader } from "@/features/utils/next";
import { FC, HTMLAttributes, PropsWithChildren, Fragment } from "react";
import userSignIn from "@features/fetch/user/user-sign-in";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children }) => {
  return (
    <Fragment>
      {children}
      <main>hallo</main>
    </Fragment>
  );
};

export default index;
