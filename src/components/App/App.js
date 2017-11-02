import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { grabSwornMembers, fetchSwornMembers, fetchHouseData, grabHouseData } from '../../actions';
// import { houseReducer } from '../../reducers/houseReducer'
import CardCtnr from '../CardCtnr/CardCtnr';


class App extends Component {
  constructor() {
    super();
    this.state =  {
      isloading: false
    }
  }


  componentDidMount() {
    this.props.fetchHouseData();
    // this.props.fetchSwornMembers();
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <CardCtnr />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchHouseData: PropTypes.func
};

const mapStateToProps = store => ({
  houses: store.houses
});
const mapDispatchToProps = dispatch => ({

  fetchHouseData: () => {
    dispatch(fetchHouseData());
  },

  grabHouseData: houses => {
    dispatch(grabHouseData(houses));
  },

  // fetchSwornMembers: () => {
  //   dispatch(fetchSwornMembers());
  // },
  //
  // grabSwornMembers: swornMembers => {
  //   dispatch(grabSwornMembers());
  // }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
