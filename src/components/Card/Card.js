import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card =  ({ name, founded, seats }) => {

  // const
//Things to display: name, founded, seats, titles, coatOfArms, ancestralWeapons, words

  return (
    <div className='card'>
      <h2 className='name'>{name}</h2>
      <h3 className='founded'>{founded}</h3>
      <h3 className='seats'>{seats}</h3>

      {/* <h2>{founded}</h2> */}

    </div>
  );
};

export default Card;

Card.propTypes = {

}
