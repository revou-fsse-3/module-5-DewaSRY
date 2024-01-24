import { FC, FormHTMLAttributes, PropsWithChildren } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LogInPayload } from "@features/utils/user.type";
import Label, { getLabelInputProps } from "@common/FormsUtils/Label";

interface SingInFormProps extends FormHTMLAttributes<HTMLFormElement> {
  data: LogInPayload;
  handleSubmit: (payload: LogInPayload) => void;
}
type SingInFormComponents = FC<SingInFormProps> & PropsWithChildren;
const SingInForm: SingInFormComponents = ({
  data,
  handleSubmit,
  children,
  ...resProps
}) => {
  const {
    register,
    handleSubmit: handle,
    formState: { errors },
  } = useForm<LogInPayload>({
    resolver: yupResolver(schema),
    defaultValues: data,
  });

  const onSubmit: SubmitHandler<LogInPayload> = (payload) => {
    handleSubmit(payload);
  };
  return (
    <form
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
      onSubmit={handle(onSubmit)}
      action=""
    >
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

export default SingInForm;
const schema = yup.object({
  email: yup.string().email("insert a valid email please").required(),
  password: yup.string().min(4, "please insert longer password").required(),
});
