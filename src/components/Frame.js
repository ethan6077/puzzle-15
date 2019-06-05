import React from 'react';
import Row from './Row';
import { getRandomArray } from '../utils';
import '../styles/frame.scss';

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileValues: getRandomArray(1, 9),
      doneValues: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { changePuzzleStatus, isPuzzleDone } = this.props;
    if (isPuzzleDone) {
      return;
    }
    const isFrameDone = this.state.tileValues.every((val, index) => {
      return (val === this.state.doneValues[index])
    });
    if (isFrameDone) {
      changePuzzleStatus();
    }
  }

  moveTile = (value) => {
    // exchange the positions between the empty tile (9) and the tile pressed
    this.setState({
      tileValues: this.state.tileValues.map((val) => {
        if (val === value) {
          return 9;
        }
        if (val === 9) {
          return value;
        }
        return val;
      })
    });
  }

  renderRows(tileValues, numberOfRows) {
    return (
      <React.Fragment>
        <Row key={1} rowValues={tileValues.slice(0, numberOfRows)} moveTile={this.moveTile} />
        <Row key={2} rowValues={tileValues.slice(numberOfRows, numberOfRows * 2)} moveTile={this.moveTile} />
        <Row key={3} rowValues={tileValues.slice(numberOfRows * 2, numberOfRows * 3)} moveTile={this.moveTile} />
      </React.Fragment>
    );
  }

  render() {
    const numberOfRows = Math.sqrt(this.state.tileValues.length);
    // in the frame, numberOfRows is always equal to the numberOfColumns
    return (
      <div className="frame">
        {this.renderRows(this.state.tileValues, numberOfRows)}
      </div>
    );
  }
}

export default Frame;
