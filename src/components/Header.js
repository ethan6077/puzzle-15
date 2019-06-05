import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <span>Done! Congratulations!</span>
      <button onClick={() => window.location.reload()}>RESTART</button>
    </div>
  )
}

export default Header;
