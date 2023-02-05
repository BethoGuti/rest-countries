import { OptionSelect } from "./OptionSelect";

const getUrlRegion = region => {
  return `https://restcountries.com/v3.1/region/${region}`;
}

export function FilterSelect( { setUrl } ) {

  const onChangeRegion = ({target}) => {
    if (target.value === '1') {
      setUrl('https://restcountries.com/v3.1/all');
    } else {
      setUrl(getUrlRegion(target.value));
    }
  }

  return (
    <div>
        <select name="region" onChange={onChangeRegion} >
            <OptionSelect value='1' text='Filter by Region' />
            <OptionSelect value='Africa' text='Africa' />
            <OptionSelect value='Americas' text='America' />
            <OptionSelect value='Asia' text='Asia' />
            <OptionSelect value='Europe' text='Europe' />
            <OptionSelect value='Oceania' text='Oceania' />
        </select>
    </div>
  )
}
