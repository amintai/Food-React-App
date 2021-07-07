

import * as actionTypes from './hotel-type';

export const addToCart = (itemId) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload:{
            id:itemId
        }
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_ITEM_QTY,
        payload:{
            id:itemId
        }
    }
}

export const adjustQty = (itemId , qty) => {
    return{
        type:actionTypes.ADJUST_ITEM_QTY,
        payload : {
            id:itemId,
           qty:qty
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload : item
    }
}

export const checkoutCart = (item) => {
    return {
        type: actionTypes.CHECKOUT_CART_ITEMS,
        payload:item
    }
}

export const removeAllItems = (item) => {
    return{
        type:actionTypes.REMOVE_ALL_CART,
        payload:item
    }
}