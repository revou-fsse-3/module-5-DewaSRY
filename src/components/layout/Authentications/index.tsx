// import SingIn from "@page/Authentications/page/SignIn";
import { NavigationLoader } from "@/features/utils/next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react";

import useIsAuthentications from "@/components/template/Authentication/useIsAuthentications";
// import dynamic from "next/dynamic";
// // const AuthenticationsPage = dynamic(() => import("./useIsAuthentications"), {
// //   ssr: false,
// // });

import Link from "next/link";
type AuthenticationsProps = HTMLAttributes<HTMLDivElement> & {
  page: ReactNode;
};
type AuthenticationsComponents = FC<AuthenticationsProps> & PropsWithChildren;
const Authentications: AuthenticationsComponents = ({ children, page }) => {
  // useIsAuthentications();
  return (
    <>
      {children}
      <nav className="max-w-[1000px] px-8 py-4">
        <Link className="text-red-300" href="?auth=sign-in">
          {" "}
          Sing In{" "}
        </Link>
        <Link href="?auth=sign-up"> Sing Up </Link>
      </nav>
      <main>{page}</main>
    </>
  );
};

export default Authentications;

// export const loader: NavigationLoader<null> = async () => {
//   const currentEmail = localStorage.getItem("email"),
//     currentPassword = localStorage.getItem("password");
//   // console.log(currentEmail);
//   // console.log(currentPassword);
//   if (!currentEmail || !currentPassword) {
//     window.history.pushState({}, "", "authentications/sign-up");
//   } else {
//     window.history.pushState({}, "", "authentications/sign-in");
//   }
//   return null;
// };
