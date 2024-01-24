import { FC, HTMLAttributes, PropsWithChildren } from "react";
import useCategoryData, { withWrapper } from "@context/Category";
import CategoryTable from "@container/TableCategory";
interface CategoryDataProps extends HTMLAttributes<HTMLDivElement> {}
type CategoryDataComponents = FC<CategoryDataProps> & PropsWithChildren;
const CategoryData: CategoryDataComponents = () => {
  const { catagories } = useCategoryData();
  return (
    <section>
      <CategoryTable data={catagories} />
    </section>
  );
};

export default withWrapper(CategoryData);
