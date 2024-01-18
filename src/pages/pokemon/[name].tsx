import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

import QueryProvider from "@features/Query";
import PokemonCard from "@container/PokemonCard";
interface PokemonProps {
  pokemonName: string;
}
export const getServerSideProps: GetServerSideProps<PokemonProps> = async (
  context
) => {
  const pokemonName = context.params!["name"] as string;
  console.log(pokemonName);
  try {
    return {
      props: {
        pokemonName,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw Error("failed to fetch all data");
  }
};
type PokemonComponent = InferGetServerSidePropsType<typeof getServerSideProps>;
const Pokemon: NextPage<PokemonComponent> = ({ pokemonName }) => {
  return (
    <>
      <QueryProvider>
        <PokemonCard pokemonName={pokemonName} />
      </QueryProvider>
    </>
  );
};
export default Pokemon;
