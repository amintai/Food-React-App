/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from './Cart.module.css'
import CartItem from './CartItem/CartItem'


const Cart = ({ cart }) => {
    const [totalPrice , setTotalPrice ] = useState(0)
    const [totalItem , setTotalItems ] = useState(0)

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price
        })

        setTotalItems(items)
        setTotalPrice(price)
    },[cart , totalItem,totalPrice , setTotalPrice, setTotalItems])

    return(
        <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} itemData={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItem} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart : state.hotel.cart,
    }
}
export default connect(mapStateToProps)(Cart)