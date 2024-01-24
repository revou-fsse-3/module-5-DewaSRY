import { FC, FormHTMLAttributes, PropsWithChildren } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterPayload } from "@features/utils/user.type";
import Label, { getLabelInputProps } from "@common/FormsUtils/Label";
// import Button from "@common/Button";
// import useUserSingUp from "@query/user/UserRegister";
// import { useNavigate } from "react-router-dom";
interface SingUpFormProps extends FormHTMLAttributes<HTMLFormElement> {
  data: RegisterPayload;
  handleSubmit: (payload: RegisterPayload) => void;
}
type SingUpFormComponents = FC<SingUpFormProps> & PropsWithChildren;
const SingUpForm: SingUpFormComponents = ({
  data,
  handleSubmit,
  children,
  ...resProps
}) => {
  // const navigation = useNavigate();
  // const { mutate } = useUserSingUp(() => navigation("/collection"));
  const {
    register,
    handleSubmit: handle,
    formState: { errors },
  } = useForm<RegisterPayload>({
    resolver: yupResolver(schema),
    defaultValues: data,
  });
  const onSubmit: SubmitHandler<RegisterPayload> = (payload) => {
    handleSubmit(payload);
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
        />
        <p>{errors.email?.message}</p>
      </Label>
      <Label label="email">
        <input
          {...getLabelInputProps("email")}
          {...register("email")}
          type="email"
        />
        <p>{errors.email?.message}</p>
      </Label>
      <Label label="password">
        <input
          {...getLabelInputProps("password")}
          {...register("password")}
          type="password"
        />
        <p>{errors.password?.message}</p>
      </Label>
      {children}
    </form>
  );
};

export default SingUpForm;
const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});
