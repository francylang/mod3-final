import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card =  ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words }) => {


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

}
