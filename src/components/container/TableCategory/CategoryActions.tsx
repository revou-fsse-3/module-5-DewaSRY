import { FC, HTMLAttributes, PropsWithChildren } from "react";
import Button from "@common/Button";
import { useNavigate } from "react-router-dom";
type CategoryActionsProps = HTMLAttributes<HTMLDivElement> & {
  id: string;
};
type CategoryActionsComponents = FC<CategoryActionsProps> & PropsWithChildren;
const CategoryActions: CategoryActionsComponents = ({ id }) => {
  const navigation = useNavigate();
  const handleActions = () => {
    navigation("update?id=" + id);
  };
  return <Button onClick={handleActions}>Actions</Button>;
};

export default CategoryActions;
