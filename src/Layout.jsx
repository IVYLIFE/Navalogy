import React, { useEffect } from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  useEffect(() => {
    const cursorDiv = document.getElementById('cursorDiv');

    const updatePosition = (e) => {
      cursorDiv.style.left = e.pageX + 'px';
      cursorDiv.style.top = e.pageY + 'px';
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  const cursorDivStyle = {
    position: 'absolute',
    pointerEvents: 'none',
    width: '100px',
    height: '100px',
    filter : 'blur(50px)',
    // filter : 'drop-shadow(0px 0px 2px var(--primary))',
    borderRadius: '50%',
    backgroundColor: 'var(--primary)',
    zIndex: '9999',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.1s, height 0.1s, transform 0.1s',
  };

  return (
    <>
      <div id="cursorDiv" style={cursorDivStyle}></div>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout