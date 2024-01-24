// import SingIn from "@page/Authentications/page/SignIn";
import { NavigationLoader } from "@features/utils/Route";

import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { Outlet, Link } from "react-router-dom";
type AuthenticationsProps = HTMLAttributes<HTMLDivElement>;
type AuthenticationsComponents = FC<AuthenticationsProps> & PropsWithChildren;
const Authentications: AuthenticationsComponents = () => {
  return (
    <main>
      <nav>
        <Link to="sign-in"> Sing In </Link>
        <Link to="sign-up"> Sing Up </Link>
      </nav>

      <Outlet />
    </main>
  );
};

export default Authentications;

export const loader: NavigationLoader<null> = async () => {
  const currentEmail = localStorage.getItem("email"),
    currentPassword = localStorage.getItem("password");
  // console.log(currentEmail);
  // console.log(currentPassword);
  if (!currentEmail || !currentPassword) {
    window.history.pushState({}, "", "authentications/sign-up");
  } else {
    window.history.pushState({}, "", "authentications/sign-in");
  }
  return null;
};
