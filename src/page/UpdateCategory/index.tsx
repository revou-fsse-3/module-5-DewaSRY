import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { useSearchParams } from "react-router-dom";
import UpdateCategory from "./UpdateCategory";
import useGetCategory from "@query/Collections/GetCategory";
type UpdatePageProps = HTMLAttributes<HTMLDivElement>;
type UpdatePageComponents = FC<UpdatePageProps> & PropsWithChildren;
const UpdatePage: UpdatePageComponents = () => {
  const [param] = useSearchParams();
  const idParam = param.get("id") ?? "";
  const { data, isLoading, error } = useGetCategory(idParam);
  return (
    <section>
      {data?.data && <UpdateCategory data={data.data} />}
      {isLoading && <p>Loading</p>}
      {error && <p>error</p>}
    </section>
  );
};

export default UpdatePage;
