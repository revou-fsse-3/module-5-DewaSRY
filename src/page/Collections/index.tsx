import { FC, HTMLAttributes, PropsWithChildren } from "react";
import CategoryData from "./CategoryData";
interface CollectionPageProps extends HTMLAttributes<HTMLElement> {}
type CollectionPageComponents = FC<CollectionPageProps> & PropsWithChildren;
import useGetAllCategory from "@features/query/Collections/GetAllCategory";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "@common/Button";
const CollectionPage: CollectionPageComponents = ({ ...resProps }) => {
  const navigation = useNavigate();
  const [param] = useSearchParams();
  const currentPage = Number(param.get("page") ?? 1);
  const { data, refetch } = useGetAllCategory(currentPage);
  const handlePage = (numPage: number) => {
    if (numPage < 0) {
      numPage = 0;
    }
    navigation(`?page=${numPage}`);
    console.log("get call");
    refetch();
  };

  const handelCreateCategory = () => {
    navigation("create");
  };

  return (
    <main
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <CategoryData key={data.data.length} data={data.data} />

      <Button onClick={handlePage.bind(null, currentPage + 1)}>
        More Page
      </Button>
      <Button onClick={handelCreateCategory}>Create Category</Button>
    </main>
  );
};

export default CollectionPage;
