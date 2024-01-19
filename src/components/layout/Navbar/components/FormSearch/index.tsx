import { FC, FormEvent, FormHTMLAttributes, PropsWithChildren } from "react";
import Button, { ButtonTypes } from "@common/Button";
import { CiSearch } from "react-icons/ci";
import Input from "@common/FormsUtils/Input";
import { useRouter } from "next/router";

interface indexProps extends FormHTMLAttributes<HTMLFormElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  const router = useRouter();

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const pokemonInput = formElement.querySelector(
      "input[name='name']"
    ) as HTMLInputElement;
    router.push("pokemon/" + pokemonInput.value);
  };
  return (
    <form
      onSubmit={handelSubmit}
      {...resProps}
      className="flex items-center justify-end "
    >
      <Input
        placeholder="type pokemon here"
        className="text-xl flex-2"
        label="name"
      />
      <Button
        ButtonType={ButtonTypes.BaseButton}
        className={`${resProps.className ? resProps.className : ""}`}
      >
        <CiSearch className="inline-block text-4xl " />
        <span className="text-lg">Search</span>
      </Button>
    </form>
  );
};

export default index;
