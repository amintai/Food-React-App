// import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import * as actionTypes from './hotel-type';
import { products } from '../../Data'; 

console.log(products)
const initial_state = {

    
products:products,
cart:[],
currentItem : null
}

const hotelReducer = (state = initial_state, action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        // Great Item data from products array

        
        const item = state.products.find(
          (product) => product.id === action.payload.id
        );
        // Check if Item is in cart already

        // if item is present in the cart then incart will return true else false
        const inCart = state.cart.find((item) =>
          item.id === action.payload.id ? true : false
        );

  // if item is in cart then we increment quantity else we will add new qty with respected id
        return {
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...item, qty: 1 }],
        };

        // remove matched id
      case actionTypes.REMOVE_ITEM_QTY:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case actionTypes.ADJUST_ITEM_QTY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: +action.payload.qty }
              : item
          ),
        };
      case actionTypes.LOAD_CURRENT_ITEM:
        return {
          ...state,
          currentItem: action.payload,
        };
      default:
        return state;
    }
  };
  

export default hotelReducer;