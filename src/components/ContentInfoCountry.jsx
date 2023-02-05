import { Info } from "./Info";
import PropType from 'prop-types';

export const ContentInfoCountry = ( {data} ) => {
  const { flags, population, region, capital, name, subregion } = data[0];

  return (
    <div className="content-info">
      <div className="item-info img"><img src={flags.svg} /></div>
      <div className="item-info info-country">
        <h2 className="title">{name.official}</h2>
        <Info clave='Native Name' value={name.common} />
        <Info clave='Population' value={population} />
        <Info clave='Region' value={region} />
        <Info clave='Sub Region' value={subregion} />
        <Info clave='Capital' value={capital} />
      </div>
    </div>
  )
}

ContentInfoCountry.prototype = {
  data: PropType.array.isRequired
}
