import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';
import './CardCtnr.css';
import { fetchSwornMembers } from '../../actions/index';

const CardCtnr =  props => {

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
};

CardCtnr.propTypes = {
  houses: PropTypes.array

};


const mapStateToProps = store => ({
  houses: store.houses,
  swornMembers: store.swornMembers
});

const mapDispatchToProps = dispatch => ({
  grabSwornMembers: (swornMembers) => {
    dispatch(fetchSwornMembers(swornMembers));
  }

});
export default connect(mapStateToProps, mapDispatchToProps)(CardCtnr);
