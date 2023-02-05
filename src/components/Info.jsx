import React from "react";
import PropTypes from 'prop-types';

export function Info({ clave, value }) {
  return <>
    <p><span className="title-info">{ clave }: </span>{ value }</p>
  </>;
}

Info.prototype = {
  clave: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}