/* eslint-disable no-unused-vars */

import './App.css';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Redirect,
} from "react-router-dom";

import Products from './Components/Products/Products';
import NavBar from './Components/NavBar/NavBar';
import Cart from './Components/Cart/Cart';
import SingleItem from './Components/SingleItem/SingleItem';

import { connect } from 'react-redux'

function App({ currentItem }) {
  return (
    <Router>
    <div className="App">
    <NavBar />

      <Switch>
        <Route exact path='/' component={Products}/>
        <Route exact path='/cart' component={Cart}/>
        
        {
          !currentItem ? (
            <Redirect to='/' />
          ) : (
            <Route exact path='/product/:id' component={SingleItem} />
          )
        }

        
        
      </Switch>
      </div>
      </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    currentItem : state.hotel.currentItem,
  };
};

export default connect(mapStateToProps)(App);
