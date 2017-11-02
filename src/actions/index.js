export const grabHouseData = houses => ({
  type: 'GRAB_HOUSE_DATA',
  houses
});

export const fetchHouseData = () => (dispatch) => {
  return (
    fetch(`http://localhost:3001/api/v1/houses`)
      .then(res => res.json())
      .then(houses => dispatch(grabHouseData(houses)))
      .catch(error => console.log(error))
  );
};


export const grabSwornMembers = swornMembers => ({
  type: 'GRAB_SWORN_MEMBERS',
  swornMembers
});

// export const fetchSwornMembers = () => (dispatch) {
//   return (
//     fetch('http://localhost:3001/api/v1/character', {
//       method: 'POST',
//       body: JSON.stringify,
//       headers: {
//         'Content-type': 'application/json'
//
//       .then(res => res.json())
//       .then(swornMembers => dispatch(grabSwornMembers(swornMembers)))
//       .catch(error => console.log(error))
//     )}
//   )}
// )}
