import React from 'react';
import Tile from './Tile';
import '../styles/row.scss';

function renderTiles(moveTile, rowNumber, rowValues) {
  return rowValues.map((val, index) => {
    return (
      <Tile
        key={val}
        moveTile={moveTile}
        value={val}
        rowNumber={rowNumber}
        columnNumber={index + 1}
      />
    );
  });
}

function Row(props) {
  const { moveTile, rowNumber, rowValues } = props;
  return (
    <div className="row">
      {renderTiles(moveTile, rowNumber, rowValues)}
    </div>
  );
}

export default Row;
