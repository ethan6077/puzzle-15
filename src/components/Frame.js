import React from 'react';
import Row from './Row';
import { getRandomArray } from '../utils';

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileValues: getRandomArray(1, 9),
    };
  }

  renderRows(tileValues, numberOfRows) {
    return (
      <React.Fragment>
        <Row key={1} rowValues={tileValues.slice(0, numberOfRows)} />
        <Row key={2} rowValues={tileValues.slice(numberOfRows, numberOfRows * 2)} />
        <Row key={3} rowValues={tileValues.slice(numberOfRows * 2, numberOfRows * 3)} />
      </React.Fragment>
    );
  }

  render() {
    console.log('tileValues --->', this.state.tileValues);
    const numberOfRows = Math.sqrt(this.state.tileValues.length);
    console.log('numberOfRows --->', numberOfRows);
    // in the frame, numberOfRows is always equal to the numberOfColumns
    return (
      <div className="frame">
        {this.renderRows(this.state.tileValues, numberOfRows)}
      </div>
    );
  }
}

export default Frame;
