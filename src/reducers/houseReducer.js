export const houseReducer = (state = [], action) => {
  switch (action.type) {
  case 'GRAB_HOUSE_DATA':
    return action.houses;
  default:
    return state;
  }
};
