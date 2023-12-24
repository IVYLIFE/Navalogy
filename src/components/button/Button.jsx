import React from 'react'
import './button.css'

const button = (props) => {

  const { text, color, bcgColor, id, style } = props

  return (
    <button 
      id={id}
      style={{ color : color, backgroundColor : bcgColor, ...style  }} >
      {text}
    </button>
  )
}

export default button