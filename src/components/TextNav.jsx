import PropTypes from 'prop-types'

export  function TextNav( { text } ) {

  return (
    <div className='title'>
        <p className='title' >{text}</p>
    </div>
  )
}

TextNav.prototype = {
  text: PropTypes.string.isRequired
}