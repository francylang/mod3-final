import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';

const CardCtnr =  props => {


  return (
    <div>
      {
        props.houses.map(house => {
          return <Card
            key={house.name}
            name={house.name}
            founded={house.founded}
            seats={house.seats.map(seat => seat)}
          />;

        })
      }
    </div>
  );


  // const
//Things to display: name, founded, seats, titles, coatOfArms, ancestralWeapons, words

};

CardCtnr.propTypes = {

}


const mapStateToProps = store => ({
  houses: store.houses
});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, undefined)(CardCtnr);
