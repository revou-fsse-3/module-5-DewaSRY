import { useState, ChangeEvent } from "react";

export default function useOnChangeInput() {
  const [value, setValue] = useState("");

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return {
    value,
    setValue,
    handelChange,
  };
}
