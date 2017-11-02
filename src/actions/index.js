export const grabHouseData = houses => ({
  type: 'GRAB_HOUSE_DATA',
  houses
});

export const fetchHouseData = (houses) => {
  return (
    fetch(`http://localhost:3001/api/v1/houses`)
      .then(res => res.json())
      .then(resJSON => grabHouseData(houses))
      .catch(error => console.log(error))
  )
};
