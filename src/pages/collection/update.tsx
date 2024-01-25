import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import EditCategory from "@template/UpdateCategory";
interface UpdatePageProps {}
export const getServerSideProps: GetServerSideProps<UpdatePageProps> = async (
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
type UpdatePageComponent = InferGetServerSidePropsType<
  typeof getServerSideProps
>;
const UpdatePage: NextPage<UpdatePageComponent> = ({}) => {
  return (
    <>
      <EditCategory />
    </>
  );
};
export default UpdatePage;
