import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card =  ({ name, founded, seats }) => {

  // const
//Things to display: name, founded, seats, titles, coatOfArms, ancestralWeapons, words

  return (
    <div className='card'>
      <h2>{name}</h2>
      <h2>{founded}</h2>
      <h2>{seats}</h2>

      {/* <h2>{founded}</h2> */}

    </div>
  );
};

export default Card;

Card.propTypes = {

}
