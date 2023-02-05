import { Bandera, DivInfo } from "./";
import PropTypes from 'prop-types';

export const DivItem = ( {src, population, region, capital, title} ) => {
  return (
    <div className="div-item">
      <Bandera src={src} country={title} />
      <DivInfo
        population={population}
        region={region}
        capital={capital}
        title={title}
      />
    </div>
  );
}



DivItem.prototype = {
  title: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}
