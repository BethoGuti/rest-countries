import React from 'react'
import PropTypes from "prop-types";

export const BtnChangeTheme = ( {theme, text, setTheme} ) => {

    const onClickSetTheme = () => {
        setTheme(!theme);
    }

    return (
        <div className='mode' onClick={onClickSetTheme} >
            <ion-icon name='moon-outline'></ion-icon>
            <p className='mode' >{text}</p>
        </div>
    )
}

BtnChangeTheme.prototype = {
    theme: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}