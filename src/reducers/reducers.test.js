import { houseReducer } from './houseReducer';
import houses from '../helpers/mockData.js';

describe('house reducer', () => {
  it('should have a default state', () => {
    expect(houseReducer(undefined, [])).toEqual([]);
  });

  it('should grab house data', () => {
    const action = {
      type: 'GRAB_HOUSE_DATA',
      houses: houses
    };

    expect(houseReducer(undefined, action)).toEqual(houses);
  });
});
