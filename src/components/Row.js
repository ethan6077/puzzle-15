import React from 'react';
import Tile from './Tile';

function renderTiles(rowValues) {
  return rowValues.map((val) => {
    return <Tile key={val} value={val} />
  });
}

function Row(props) {
  const { rowValues } = props;
  console.log('rowValues -->', rowValues);
  return (
    <div className="row">
      {renderTiles(rowValues)}
    </div>
  );
}

export default Row;
