import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SearchPokemon from "@container/SearchPokemon";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SearchPokemon />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
