import { FC, HTMLAttributes, PropsWithChildren } from "react";
import SignUpForm from "@container/SignUpForm";
import Button from "@common/Button";
import useUserSingUp from "@query/user/UserRegister";
import useToCollections from "@hooks/useToCollection";

interface SignUpPageProps extends HTMLAttributes<HTMLDivElement> {}
type SignUpPageComponents = FC<SignUpPageProps> & PropsWithChildren;
const SignUpPage: SignUpPageComponents = () => {
  const navigate = useToCollections();
  const { mutate } = useUserSingUp(navigate);
  return (
    <section>
      <SignUpForm
        handleSubmit={mutate}
        data={{
          email: "",
          password: "",
          name: "",
        }}
      >
        <Button>Sing Up</Button>
      </SignUpForm>
    </section>
  );
};

export default SignUpPage;
