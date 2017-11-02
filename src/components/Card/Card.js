import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card =  ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words }) => {

  // const seatsMapped = house.seats.maps(seat => {
  //   return (
  //     <p className="seats-map">{seat}</p>
  //   );
  // });
  //
  // const titlesMapped = house.titles.maps(title => {
  //   return (
  //     <p className="seats-map">{title}</p>
  //   );
  // });

  return (
    <div className='card'>
      <h2 className='name'>{name}</h2>
      <h3 className='founded'>Founded: {founded}</h3>
      <h3 className='seats'>Seats: {seats}</h3>
      <h3 className='titles'>Titles: {titles}</h3>
      <h3 className='titles'>Coat of Arms: {coatOfArms}</h3>
      <h3 className='titles'>Ancestral Weapons: {ancestralWeapons}</h3>
      <h3 className='titles'>Words: {words}</h3>
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  founded: PropTypes.string,
  seats: PropTypes.array,
  titles: PropTypes.array,
  coatOfArms: PropTypes.string,
  ancestralWeapons: PropTypes.array,
  words: PropTypes.string
};
