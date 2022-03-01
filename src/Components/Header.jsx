import React from 'react'
import PropTypes from 'prop-types'
function Header(props) {
    const headerStyle =
        {backgroundColor:props.bgcolor,
        color:props.fontColor,}
  return (
    
    
    <header style={headerStyle}>
        <div className="container">
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}
Header.defaultProps={
    text:"FeedBack UI Ok",
    bgcolor:'rgba(0,0,0,0.4)',
    fontColor:'#ff6a95',
}
Header.prototype={
    text:PropTypes.string,
    bgcolor:PropTypes.string,
    fontColor:PropTypes.string,
}
export default Header