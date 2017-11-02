import grabHouseData from './houseReducer';

describe('house reducer', () => {
  it('should have a default state', () => {
    expect(grabHouseData(undefined, {})).toEqual([]);
  });
});
