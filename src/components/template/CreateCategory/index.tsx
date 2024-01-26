import { FC, HTMLAttributes, PropsWithChildren } from "react";
import useCreateCategory from "@/features/query/Collections/CreateCategory";
import CategoryCreate from "@container/CategoryCreate";
import Button from "@common/Button";
import useToCollections from "@hooks/useToCollection";
type CreatePageProps = HTMLAttributes<HTMLDivElement>;
type CreatePageComponents = FC<CreatePageProps> & PropsWithChildren;
const CreatePage: CreatePageComponents = ({ ...resProps }) => {
  const navigate = useToCollections();
  const { mutate } = useCreateCategory(navigate);
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <CategoryCreate
        data={{
          name: "",
        }}
        handleCreate={mutate}
      >
        <Button>Create Category</Button>
      </CategoryCreate>
    </div>
  );
};

export default CreatePage;
