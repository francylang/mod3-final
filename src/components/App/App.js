import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchHouseData, grabHouseData } from '../../actions';
import { houseReducer } from '../../reducers/houseReducer'
import Card from '../Card/Card'


class App extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.fetchHouseData();
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {}}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
          <Card />
        </div>
      </div>
    );
  }
}

App.propTypes = {
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
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
