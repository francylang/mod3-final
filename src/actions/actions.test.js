import * as actions from './index.js';

describe('actions', () => {
  it('should create an action to get all house data', () => {
    const expectedAction = {
      type: 'GRAB_HOUSE_DATA',
      houses: {house: 'House Lannister of Casterly Rock'}
    };

    expect(actions
      .grabHouseData({ house: 'House Lannister of Casterly Rock' }))
      .toEqual(expectedAction);
  });
});
