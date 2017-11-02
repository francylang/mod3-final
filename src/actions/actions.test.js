import * as actions from './index.js';
import houses from '../helpers/mockData.js';

describe('actions', () => {
  it('should create an action to get all house data', () => {
    const expectedAction = {
      type: 'GRAB_HOUSE_DATA',
      houses: houses
    };

    expect(actions.grabHouseData(houses)).toEqual(expectedAction);
  });
});
