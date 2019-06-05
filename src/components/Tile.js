import React from 'react';

function Tile(props) {
  const { value } = props;
  return (
    <div className="tile">
      {value}
    </div>
  );
}

export default Tile;
