import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { CollectionsProps } from "@utils/collections.type";
import EditCategory from "@/components/container/CategoryEdit";
import useCategoryEdit from "@query/Collections/UpdateCategory";
import useToCollections from "@features/hooks/useToCollection";
import Button from "@common/Button";
import DeleteCategory from "./DeleteCategory";
type UpdateCategoryProps = HTMLAttributes<HTMLDivElement> & {
  data: CollectionsProps;
};
type UpdateCategoryComponents = FC<UpdateCategoryProps> & PropsWithChildren;
const UpdateCategory: UpdateCategoryComponents = ({ data, ...resProps }) => {
  const navigate = useToCollections();
  const { mutate } = useCategoryEdit(navigate);
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <EditCategory
        data={{
          id: data.id,
          is_active: data.is_active,
          name: data.name,
        }}
        handleSubmit={mutate}
      >
        <Button>Update Category</Button>
        <DeleteCategory id={data.id} />
      </EditCategory>
    </div>
  );
};

export default UpdateCategory;
