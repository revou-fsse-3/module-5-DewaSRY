import { FC, InputHTMLAttributes, useEffect } from "react";
import usePokemonSearch from "@layout/Navbar/provider/useSearch";
import useDebounce from "@hooks/useDebounce";
import useOnChangeInput from "@hooks/useOnChangeInput";
import Input from "@common/FormsUtils/Input";
interface PokemonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
type PokemonInputComponents = FC<PokemonInputProps>;
const PokemonInput: PokemonInputComponents = ({ label, ...resProps }) => {
  const { value, handelChange } = useOnChangeInput();
  const { getSearchByName } = usePokemonSearch();
  const debounce = useDebounce(value);
  useEffect(() => {
    getSearchByName(debounce);
  }, [debounce]);
  return (
    <Input
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
      value={value}
      onChange={handelChange}
      label={label}
    />
  );
};

export default PokemonInput;
