import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Collections from "@template/Collections";
interface CollectionPageProps {}
export const getServerSideProps: GetServerSideProps<
  CollectionPageProps
> = async (context) => {
  try {
    return {
      props: {},
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw Error("failed to fetch all data");
  }
};
type CollectionPageComponent = InferGetServerSidePropsType<
  typeof getServerSideProps
>;
const CollectionPage: NextPage<CollectionPageComponent> = ({}) => {
  return (
    <>
      <Collections />
    </>
  );
};
export default CollectionPage;
