import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';



const Card =  ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words }) => {

  const createListsTitles = titles.map( title => <p key={title}>{title}</p> );
  const createListsSeats = seats.map( seat => <p key={seat}>{seat}</p> );
  const createListsWeapons = ancestralWeapons.map( weapon => <p key={weapon}>{weapon}</p> );


  return (
    <div className='card'>
      <h2 className='name'>{name}</h2>
      <h3 className='founded'>Founded: {founded} </h3>
      <h3 className='seats'>Seats: {createListsSeats}</h3>
      <h3 className='titles'>Title: {createListsTitles}</h3>
      <h3 className='coat'>Coat of Arms: {coatOfArms}</h3>
      <h3 className='weapons'>Ancestral Weapons: {createListsWeapons}</h3>
      <h3 className='words'>{words}</h3>
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
