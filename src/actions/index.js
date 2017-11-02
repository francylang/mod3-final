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

export const fetchSwornMembers = (swornMembers) => {
  return dispatch => {

    const promises = swornMembers.map(member => {
      const body = JSON.stringify({member});


      return fetch('http://localhost:3001/api/v1/character', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: body

      })

        .then(response => response.json());
    });

    const allPromises = Promise.all(promises);

    allPromises.then( member => {
      dispatch(grabSwornMembers(member));
    });
  };
};
