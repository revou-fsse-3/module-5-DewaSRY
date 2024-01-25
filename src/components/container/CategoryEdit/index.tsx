import { FC, FormHTMLAttributes, PropsWithChildren } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Label, { getLabelInputProps } from "@common/FormsUtils/Label";
import { CollectionsUpdatePayload as UpdateProps } from "@fetch/collections/collection-update";
type UpdatePayload = Omit<UpdateProps, "id">;
interface CategoryEditProps extends FormHTMLAttributes<HTMLFormElement> {
  data: UpdateProps;
  handleSubmit: (payload: UpdateProps) => void;
}
type CategoryEditComponents = FC<CategoryEditProps> & PropsWithChildren;
const CategoryEdit: CategoryEditComponents = ({
  data,
  handleSubmit,
  children,
  ...resProps
}) => {
  const {
    register,
    handleSubmit: handel,
    formState: { errors },
  } = useForm<UpdatePayload>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: data.name,
      is_active: data.is_active,
    },
  });
  const onSubmit: SubmitHandler<UpdatePayload> = (payload) => {
    const newPayload = {
      ...payload,
      id: data.id,
    };
    console.log(newPayload);
    handleSubmit(newPayload);
  };
  return (
    <form
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
      onSubmit={handel(onSubmit)}
      action=""
    >
      <Label label="name">
        <input
          {...getLabelInputProps("name")}
          {...register("name")}
          type="text"
        />
        <p>{errors.name?.message}</p>
      </Label>
      <Label label="is_active">
        <input
          {...getLabelInputProps("is_active")}
          {...register("is_active")}
          type="checkbox"
        />
        <p>{errors.is_active?.message}</p>
      </Label>
      {children}
    </form>
  );
};

export default CategoryEdit;
const schema = yup.object({
  name: yup.string().required(),
  is_active: yup.bool().required(),
});
