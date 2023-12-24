import React from 'react'
import './button.css'

const button = (props) => {

  const { text, color, bcgColor } = props

  return (
    <button style={{ color : color, backgroundColor : bcgColor }} >
        {text}
    </button>
  )
}

export default button