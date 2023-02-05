import React from 'react';
import { BtnChangeTheme, TextNav } from './';
import PropTypes from 'prop-types';

export function Nav( {setTheme, theme} ) {
  return (
    <nav className='nav'>
        <TextNav text='Where in the world?' />
        <BtnChangeTheme text='Dark Mode' setTheme={setTheme} theme={theme} />
    </nav>
  )
}

Nav.prototype = {
  theme: PropTypes.string.isRequired
}