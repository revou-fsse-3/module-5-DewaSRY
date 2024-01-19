import { FC, PropsWithChildren, AnchorHTMLAttributes } from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
interface NavigatePokemonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  addNum: number;
}
type NavigatePokemonComponents = FC<NavigatePokemonProps> & PropsWithChildren;

const NavigatePokemon: NavigatePokemonComponents = ({
  children,
  addNum,
  ...resProps
}) => {
  const param = useSearchParams();

  let currentPage = Number(param.get("page") ?? 0);
  currentPage += addNum;
  console.log(currentPage);
  // TODO : make some router button
  return (
    <Link
      href={`/?page=${currentPage}`}
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavigatePokemon;
