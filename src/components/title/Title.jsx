import React from 'react'

const Title = (props) => {

  const { title, subtitle, color, id } = props

  const titleStyles = {
    fontSize: 'clamp(1.7rem, 5vw, 3rem)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem',
  }

  const subtitleStyles = {
    fontSize: 'clamp(.7rem, 3vw, 1.3rem)',
    textAlign: 'center',
    margin: '2rem 0'
  }

  const emphasizedStyles = {
    color: color,
  };



  return (
    <div id={id} >
      <h1 style={titleStyles}>
        { title.emphasize && <span style={emphasizedStyles}>{title.emphasize}</span> }
        { title.remaining }
      </h1>
      <p style={subtitleStyles}>{subtitle}</p>
    </div>
  );

};

export default Title;
