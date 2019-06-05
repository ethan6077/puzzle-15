import React from 'react';
import '../styles/header.scss';

function Header(props) {
  return (
    <div className="header">
      <span>Done! Congratulations!</span>
      <button onClick={() => window.location.reload()}>RESTART</button>
    </div>
  )
}

export default Header;
