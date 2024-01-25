import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import CreateCategory from "@template/CreateCategory";
interface CreatePageProps {}
export const getServerSideProps: GetServerSideProps<CreatePageProps> = async (
  context
) => {
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
type CreatePageComponent = InferGetServerSidePropsType<
  typeof getServerSideProps
>;
const CreatePage: NextPage<CreatePageComponent> = ({}) => {
  return (
    <>
      <CreateCategory />
    </>
  );
};
export default CreatePage;
