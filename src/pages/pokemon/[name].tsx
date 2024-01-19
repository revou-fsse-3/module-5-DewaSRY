import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

import PokemonCard from "@container/PokemonCard";
interface PokemonProps {
  pokemonName: string;
}
export const getServerSideProps: GetServerSideProps<PokemonProps> = async (
  context
) => {
  const pokemonName = context.params!["name"] as string;
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
      <PokemonCard pokemonName={pokemonName} />
    </>
  );
};
export default Pokemon;
