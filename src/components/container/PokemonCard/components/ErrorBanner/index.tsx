import Button, { ButtonTypes } from "@common/Button";
import ErrorFetching from "@libs/Error";
import { FC, HTMLAttributes } from "react";
import { useRouter } from "next/navigation";
interface ErrorBannerProps extends HTMLAttributes<HTMLDivElement> {
  error: ErrorFetching;
}
type ErrorBannerComponents = FC<ErrorBannerProps>;
const ErrorBanner: ErrorBannerComponents = ({ error, ...resProps }) => {
  const navigate = useRouter();
  const handelBackToHome = () => {
    navigate.push("/");
  };
  return (
    <div
      {...resProps}
      className={
        "text-white min-w-[300px] w-7/12 flex justify-center flex-col my-8  mx-auto p-6  bg-card rounded-2xl" +
        " gap-8 " +
        ` ${resProps.className ? resProps.className : ""}`
      }
    >
      <h2 className="bg-title text-[2rem] py-4 px-2  ">
        Oops ... no pokemon name
        <span className="mx-4 underline ">{error.info}</span>
      </h2>
      <span className="text-xl text-red-500 underline flex gap-3 flex-wrap ">
        <span>{error.message}</span>
      </span>
      <span className="text-xl text-gray-600"> Code : {error.code}</span>
      <Button
        onClick={handelBackToHome}
        className="py-3 text-xl"
        ButtonType={ButtonTypes.TernaryButton}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default ErrorBanner;
