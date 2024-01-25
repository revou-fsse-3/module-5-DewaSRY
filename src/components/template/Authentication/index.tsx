import { FC, HTMLAttributes, PropsWithChildren } from "react";
import SingIn from "@template/Authentication/SignIn";
import SignUp from "@template/Authentication/SignUp";
import useIsAuthentications from "./useIsAuthentications";
type AuthenticationProps = HTMLAttributes<HTMLElement> & {
  auth: string;
};
type AuthenticationComponents = FC<AuthenticationProps> & PropsWithChildren;
const Authentication: AuthenticationComponents = ({ auth, ...resProps }) => {
  useIsAuthentications();
  return (
    <section
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {auth === "sign-in" && <SingIn />}
      {auth === "sign-up" && <SignUp />}
    </section>
  );
};

export default Authentication;
