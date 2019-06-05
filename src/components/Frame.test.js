import React from 'react';
import { shallow } from 'enzyme';
import Frame from './Frame';

it('renders without crashing', () => {
  shallow(<Frame changePuzzleStatus={() => {}} isPuzzleDone={false} />);
});

it('changePuzzleStatus should be called once when tileValues are equal to doneValues', () => {
  const changePuzzleStatusMock = jest.fn();
  const propertyPageWrapper = shallow(<Frame changePuzzleStatus={changePuzzleStatusMock} isPuzzleDone={false} />);
  propertyPageWrapper.setState({ tileValues: [1,2,3,4,5,6,7,8,9] });
  expect(changePuzzleStatusMock).toHaveBeenCalledTimes(1);
});

it('changePuzzleStatus should be called once when the last tile moved to the right place', () => {
  const changePuzzleStatusMock = jest.fn();
  const propertyPageWrapper = shallow(<Frame changePuzzleStatus={changePuzzleStatusMock} isPuzzleDone={false} />);
  propertyPageWrapper.setState({ tileValues: [1,2,3,4,5,6,7,9,8] });
  propertyPageWrapper.instance().moveTile(8);
  expect(changePuzzleStatusMock).toHaveBeenCalledTimes(1);
});
