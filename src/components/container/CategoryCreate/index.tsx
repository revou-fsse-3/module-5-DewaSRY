import { FC, FormHTMLAttributes, PropsWithChildren } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Label, { getLabelInputProps } from "@common/FormsUtils/Label";

import { CreateCategoryPayload as CreatePayload } from "@fetch/collections/collection-create";
interface CategoryCreateProps extends FormHTMLAttributes<HTMLFormElement> {
  handleCreate: (payload: CreatePayload) => void;
  data: CreatePayload;
}
type CategoryCreateComponents = FC<CategoryCreateProps> & PropsWithChildren;
const CategoryCreate: CategoryCreateComponents = ({
  handleCreate,
  children,
  ...resProps
}) => {
  const {
    register,
    handleSubmit: handle,
    formState: { errors },
    reset,
  } = useForm<CreatePayload>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<CreatePayload> = (payload) => {
    handleCreate(payload);
    reset();
  };
  return (
    <form
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
      onSubmit={handle(onSubmit)}
      action=""
    >
      <Label label="name">
        <input
          {...getLabelInputProps("name")}
          {...register("name")}
          type="name"
          role="input-name"
        />
        <p>{errors.name?.message}</p>
      </Label>
      {children}
    </form>
  );
};

export default CategoryCreate;
const schema = yup.object({
  name: yup.string().required(),
});
