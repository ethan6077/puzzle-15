import React from 'react';
import classNames from 'classnames';
import { checkIfTileClose } from '../utils';
import '../styles/tile.scss';

class Tile extends React.Component {
  _onDragStart = (e) => {
    const { value, rowNumber, columnNumber } = this.props;
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData('value', value);
    e.dataTransfer.setData('rowNumber', rowNumber);
    e.dataTransfer.setData('columnNumber', columnNumber);
  }

  _onDragOver = (e) => {
    e.preventDefault();
  }

  _onDrop = (e) => {
    const { moveTile, value, rowNumber, columnNumber } = this.props;
    if (value === 9) {
      const valueNew = parseInt(e.dataTransfer.getData('value'));
      const rowNumberNew = parseInt(e.dataTransfer.getData('rowNumber'));
      const columnNumberNew = parseInt(e.dataTransfer.getData('columnNumber'));
      if (checkIfTileClose([rowNumberNew, columnNumberNew], [rowNumber, columnNumber])) {
        // only the tile close to the target tile can be dropped
        moveTile(valueNew);
      }
    }
  }

  render() {
    const { value } = this.props;
    return (
      <div
        draggable={value === 9 ? false : true}
        onDragStart={this._onDragStart}
        onDragOver={value === 9 ? this._onDragOver : null}
        onDrop={value === 9 ? this._onDrop : null}
        className={classNames({
        'tile1': value === 1,
        'tile2': value === 2,
        'tile3': value === 3,
        'tile4': value === 4,
        'tile5': value === 5,
        'tile6': value === 6,
        'tile7': value === 7,
        'tile8': value === 8,
        'tile9': value === 9,
        })}
      >
        {value === 9 ? null : value}
      </div>
    );
  }
}

export default Tile;
