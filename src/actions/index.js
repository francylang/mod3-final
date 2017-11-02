export const fakeAction = () => ({type: 'FAKE'});


export const fetchHouseData = () => {
  return (
    houseDataFetcher()
      .then(res => res.json())
      .then(resJSON => dispatch(grabHouseData(houses)))
      .catch(error => console.log(error))
  )
};

const houseDataFetcher = () => {
  return fetch(`http://localhost:3001/api/v1/houses
`);
};

export const grabHouseData = houses => ({
  type: 'GRAB_HOUSE_DATA',
  houses
});
