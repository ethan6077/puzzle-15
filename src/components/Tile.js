import React from 'react';
import classNames from 'classnames';

class Tile extends React.Component {
  _onDragStart = (e) => {
    const { value } = this.props;
    console.log('_onDragStart')
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData('value', value);
  }

  _onDragOver = (e) => {
    e.preventDefault();
  }

  _onDrop = (e) => {
    const { value, moveTile } = this.props;
    console.log('_onDrop');
    if (value === 9) {
      const valueToDrop = parseInt(e.dataTransfer.getData('value'));
      console.log(valueToDrop);
      moveTile(valueToDrop);
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
        {value}
      </div>
    );
  }
}

export default Tile;
