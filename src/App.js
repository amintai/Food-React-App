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
import Checkout from './Components/Checkout/Checkout';


import { connect } from 'react-redux'
import Email from './Components/Email/Email';
import ThankYou from './Components/ThankYou/ThankYou';
import Login from './Components/Login/Login';
// <NavBar />

function App({ currentItem }) {
  return (
    <Router>
    <div className="App">

      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/products' component={Products} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/email' component={Email} />
        <Route exact path='/thanks' component={ThankYou} />
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
    currentItem : state.hotel.currentItem
  };
};

export default connect(mapStateToProps)(App);
