export const fakeAction = () => ({type: 'FAKE'});


export const fetchHouseData = () => {
  return dispatch => {
  houseDataFetcher()
    .then(res => res.json())
    .then(resJSON => resJSON.results)
    .then(moviesArray => MovieDataCleaner(moviesArray))
    .then(movies => dispatch(fetchDataSuccess(movies)))
    .catch(() => dispatch(fetchDataError(true)));
  };
};
  }
}


const houseDataFetcher = () => {
  return fetch(`http://localhost:3001/api/v1/houses
`);
};
