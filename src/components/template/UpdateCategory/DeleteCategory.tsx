import { FC, HTMLAttributes, PropsWithChildren } from "react";
import Button from "@common/Button";
import useDelCategory from "@/features/query/Collections/DeleteCategory";
import useToCollections from "@features/hooks/useToCollection";
type DeleteCategoryProps = HTMLAttributes<HTMLDivElement> & {
  id: string;
};
type DeleteCategoryComponents = FC<DeleteCategoryProps> & PropsWithChildren;
const DeleteCategory: DeleteCategoryComponents = ({ id }) => {
  const navigate = useToCollections();
  const { mutate } = useDelCategory(navigate);

  const handleDelete = () => {
    mutate(id);
  };

  return <Button onClick={handleDelete}>Delete</Button>;
};

export default DeleteCategory;
