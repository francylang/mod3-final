import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';
import './CardCtnr.css'

const CardCtnr =  props => {
  //Things to display: name, founded, seats, titles, coatOfArms, ancestralWeapons, words


  return (
    <div className='card-ctnr'>
      {
        props.houses.map(house => {
          return <Card
            key={house.name}
            name={house.name}
            founded={house.founded}
            seats={house.seats}
            titles={house.titles}
            coatOfArms={house.coatOfArms}
            ancestralWeapons={house.ancestralWeapons}
            words={house.words}
          />;

        })
      }
    </div>
  );

  // const
//Things to display: name, founded, seats, titles, coatOfArms, ancestralWeapons, words

};

CardCtnr.propTypes = {
  houses: PropTypes.array
}


const mapStateToProps = store => ({
  houses: store.houses
});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, undefined)(CardCtnr);
