import { getCookies } from "@libs/cookies";
import { NavigationLoader } from "@features/utils/Route";
import { FC, HTMLAttributes, PropsWithChildren, Fragment } from "react";
import { Outlet } from "react-router-dom";
import userSignIn from "@features/fetch/user/user-sign-in";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children }) => {
  return (
    <Fragment>
      {children}
      <main>
        hallo
        <Outlet />
      </main>
    </Fragment>
  );
};

export default index;
export const loader: NavigationLoader<null> = async () => {
  const currentCookie = getCookies();
  if (!currentCookie) {
    window.history.pushState({}, "", "/authentications");
  } else {
    await userSignIn();
    window.history.pushState({}, "", "/collection");
  }

  return null;
};
