import React from 'react';
import Tile from './Tile';

function renderTiles(rowValues, moveTile) {
  return rowValues.map((val) => {
    return <Tile key={val} value={val} moveTile={moveTile} />
  });
}

function Row(props) {
  const { rowValues, moveTile } = props;
  console.log('rowValues -->', rowValues);
  return (
    <div className="row">
      {renderTiles(rowValues, moveTile)}
    </div>
  );
}

export default Row;
