import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
// import {setState} from './store/action/index';

// Import routers
import AppRouters from './config/routers'


class App extends Component {
  render() {
    return (
      <AppRouters />
    )
  }  
}

// const mapStateToProps = (state) => ({ 
//   name: state.name,
//   email: state.email
// })

// const mapDispatchToProps = (dispatch)=> ({
//   setData: (data)=> dispatch(setState(data))
// })


export default App;

