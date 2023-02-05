import { Info } from "./Info";
import PropTypes from 'prop-types';


export function DivInfo( { title, population, region, capital } ) {
  return (
    <div className="div-info">
        <h2 className="title">{ title }</h2>
        <Info clave='Population' value={population} />
        <Info clave='Region' value={region} />
        <Info clave='Capital' value={capital} />
    </div>
  )
}


DivInfo.prototype = {
  title: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired
}