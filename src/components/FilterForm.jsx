import { FilterSelect, InputSearch } from "./";

export function FilterForm( { setUrl } ) {
  return (
    <form>
        <InputSearch setUrl={setUrl} />
        <FilterSelect setUrl={setUrl} />
    </form>
  )
}
