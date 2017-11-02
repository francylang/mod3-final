import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Card =  props => {

  const houseName = props.houses.map(house => house.name);


  return (
    <div>
      <h3>{houseName}</h3>
    </div>
  )
}

Card.propTypes = {

}


const mapStateToProps = store => ({
  houses: store.houses
});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, undefined)(Card);
