import { Inter } from "next/font/google";

import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react";

import Link from "next/link";
type AuthenticationsProps = HTMLAttributes<HTMLDivElement> & {
  page: ReactNode;
};
type AuthenticationsComponents = FC<AuthenticationsProps> & PropsWithChildren;
const Authentications: AuthenticationsComponents = ({ children, page }) => {
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
