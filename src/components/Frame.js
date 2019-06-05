import React from 'react';
import Tile from './Tile';
import { getRandomArray } from '../utils';

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileValues: getRandomArray(1, 9),
    };
  }

  renderTiles(tileValues) {
    return tileValues.map((val) => {
      return <Tile key={val} value={val} />
    });
  }

  render() {
    console.log('tileValues --->', this.state.tileValues);
    return (
      <div className="frame">
        {this.renderTiles(this.state.tileValues)}
      </div>
    );
  }
}

export default Frame;
