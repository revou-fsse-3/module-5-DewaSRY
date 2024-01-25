import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { NextPageWithLayout } from "@pages/_app";
import Authentications from "@layout/Authentications";
import Head from "next/head";
import dynamic from "next/dynamic";
const AuthenticationsPage = dynamic(() => import("@template/Authentication"), {
  ssr: false,
});
import H1 from "@common/Header/H1";
interface indexProps {
  auth: string;
}
export const getServerSideProps: GetServerSideProps<indexProps> = async (
  context
) => {
  let auth = context.query!["auth"] as string | undefined;
  if (!auth) {
    auth = "sign-in";
  }
  try {
    return {
      props: {
        auth,
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
const Home: NextPageWithLayout<HomeComponent> = ({ auth }) => {
  return (
    <div>
      <H1 className="ml-4">Authentications Users</H1>
      <AuthenticationsPage auth={auth} />
    </div>
  );
};
export default Home;

Home.getLayout = (page) => {
  return (
    <Authentications page={page}>
      <Head>
        <title>Home Authentication</title>
      </Head>
    </Authentications>
  );
};
