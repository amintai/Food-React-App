/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import styles from './../CartItem/CartItem.module.css'
import { connect } from 'react-redux'
import { removeFromCart , adjustQty  } from './../../../redux/Hotel/hotel-action'

const CartItem = ({itemData , removeFromCart , adjustQty}) => {
  const [input , setInput] = useState(itemData.qty)

  const onChangeHandler = (e) => {
      setInput(e.target.value)
      adjustQty(itemData.id, e.target.value)
  }
    return(
        <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={itemData.image}
        alt={itemData.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{itemData.title}</p>
        <p className={styles.details__desc}>{itemData.description}</p>
        <p className={styles.details__price}>$ {itemData.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(itemData.id)}
          className={styles.actions__deleteItemBtn}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
    )
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart : (id) => dispatch(removeFromCart(id)),
    adjustQty : (id, value) => dispatch(adjustQty(id,value))
  };
};
export default connect(null , mapDispatchToProps)(CartItem)