import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

const getUrlSearch = (search) => {
  if(search) {
    return `https://restcountries.com/v3.1/name/${search}`;
  } else {
    return `https://restcountries.com/v3.1/all`;
  }
};

export function InputSearch({ setUrl }) {
  const { search, onInputChange } = useForm({ search: "" });

  useEffect(() => {
    setUrl(getUrlSearch(search));
  }, [search, setUrl]);

  return (
    <div className="search">
      <input
        type="text"
        name="search"
        onChange={onInputChange}
        placeholder="Search for a country..."
        value={search}
      />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}
