export const swornMemberReducer = (state = [], action) => {
  switch (action.type) {
  case 'GRAB_SWORN_MEMBERS':
    return action.swornMembers;
  default:
    return state;
  }
};
