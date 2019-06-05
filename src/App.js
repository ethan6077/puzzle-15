import React from 'react';
import Header from './components/Header';
import Frame from './components/Frame';
import './styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPuzzleDone: false,
    };
  }

  changePuzzleStatus = () => {
    this.setState({
      isPuzzleDone: !this.state.isPuzzleDone,
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.isPuzzleDone ? <Header /> : null}
        <Frame
          changePuzzleStatus={this.changePuzzleStatus}
          isPuzzleDone={this.state.isPuzzleDone}
        />
      </div>
    );
  }
}

export default App;
