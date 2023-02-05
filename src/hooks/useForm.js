import { useState } from "react";

export function useForm(initialForm = {}) {
  const [input, setInput] = useState(initialForm);

  function onInputChange({ target }) {
    const { name, value } = target;

    setInput({
      ...input,
      [name]: value,
    });
  }

  return {
    ...input,
    input,
    onInputChange,
  };
}
