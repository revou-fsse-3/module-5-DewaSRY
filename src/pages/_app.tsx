import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import Provider from "@query/Provider";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <Provider>{getLayout(<Component {...pageProps} />)}</Provider>;
}
