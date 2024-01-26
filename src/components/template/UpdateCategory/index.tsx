import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { useSearchParams } from "next/navigation";
import UpdateCategory from "./UpdateCategory";
import useGetCategory from "@/features/query/Collections/GetCategory";
type UpdatePageProps = HTMLAttributes<HTMLDivElement>;
type UpdatePageComponents = FC<UpdatePageProps> & PropsWithChildren;
const UpdatePage: UpdatePageComponents = () => {
  const param = useSearchParams();
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
