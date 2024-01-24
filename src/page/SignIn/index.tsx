import { FC, HTMLAttributes, PropsWithChildren } from "react";
import SingInForm from "@container/SingInForm";
import Button from "@common/Button";

import useUserLogIn from "@query/user/UserLogIn";
import { getUserEmailAndPassword as getInitValue } from "@utils/user.utils";
import useToCollections from "@hooks/useToCollection";
interface SignInPageProps extends HTMLAttributes<HTMLDivElement> {}
type SignInPageComponents = FC<SignInPageProps> & PropsWithChildren;
const SignInPage: SignInPageComponents = () => {
  const navigate = useToCollections();
  const { mutate } = useUserLogIn(navigate);
  return (
    <section>
      <SingInForm handleSubmit={mutate} data={getInitValue()}>
        <Button>Sing in</Button>
      </SingInForm>
    </section>
  );
};

export default SignInPage;
