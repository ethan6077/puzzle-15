import React from 'react';
import classNames from 'classnames';

function Tile(props) {
  const { value } = props;
  return (
    <div className={classNames({
      'tile1': value === 1,
      'tile2': value === 2,
      'tile3': value === 3,
      'tile4': value === 4,
      'tile5': value === 5,
      'tile6': value === 6,
      'tile7': value === 7,
      'tile8': value === 8,
      'tile9': value === 9,
    })}>
      {value}
    </div>
  );
}

export default Tile;
