import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import PokemonFilter from "@container/PokemonTable";
import type { NextPageWithLayout } from "@pages/_app";
import Head from "next/head";
import Layout from "@components/layout";
import GetAllPokemon, {
  GetAllResult,
} from "@/features/libs/pokemon/GetAllPokemon";
interface HomeProps {
  AllPokemon: GetAllResult[];
}
const POKEMON_LIMIT = 50;

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  try {
    let currentPage = Number(context.query["page"] ?? 0);
    if (currentPage < 0) {
      currentPage = 0;
    }
    const pokemonOffset = POKEMON_LIMIT * currentPage;
    const AllPokemon = await GetAllPokemon(POKEMON_LIMIT, pokemonOffset);

    return {
      props: {
        AllPokemon,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw Error("failed to fetch all data");
  }
};
type HomeComponent = InferGetServerSidePropsType<typeof getServerSideProps>;
const Home: NextPageWithLayout<HomeComponent> = ({ AllPokemon }) => {
  return <PokemonFilter pokemonNames={AllPokemon} />;
};
export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <Layout page={page}>
      <Head>
        <title>Pokemon </title>
      </Head>
    </Layout>
  );
};
