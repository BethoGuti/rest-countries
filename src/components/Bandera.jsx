import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function Bandera({ src, country }) {
  return (
    <Link to={'/aboutcountries/'+country}>
      <img src={src} className="flags" alt={country} />
    </Link>
  )
}

Bandera.propTypes = {
  src: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}