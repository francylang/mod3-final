export const fakeAction = () => ({type: 'FAKE'});


export const fetchHouseData = () => {
  return dispatch => {
    houseDataFetcher()
      .then(res => res.json())
      .then(resJSON => resJSON.results)
      .catch(error => console.log(error));
  };
};


const houseDataFetcher = () => {
  return fetch(`http://localhost:3001/api/v1/houses
`);
};
