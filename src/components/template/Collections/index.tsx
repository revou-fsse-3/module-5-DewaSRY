import { FC, HTMLAttributes, PropsWithChildren } from "react";
import CategoryData from "./CategoryData";
interface CollectionPageProps extends HTMLAttributes<HTMLElement> {}
type CollectionPageComponents = FC<CollectionPageProps> & PropsWithChildren;
import useGetAllCategory from "@/features/query/Collections/GetAllCategory";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const CollectionPage: CollectionPageComponents = ({ ...resProps }) => {
  const params = useSearchParams();
  const currentPage = Number(params.get("page") ?? 1);
  const { data } = useGetAllCategory(currentPage);
  return (
    <main>
      <CategoryData key={data.data.length} data={data.data} />
      <Link href={`?page=${currentPage + 1}`}>Load more</Link>
      <Link href="/collection/create">Create Category</Link>
    </main>
  );
};

export default CollectionPage;
