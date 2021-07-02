/* eslint-disable no-unused-vars */
import React , {useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from "./NavBar.module.css";
import { connect } from 'react-redux'


const NavBar = ( { cart } ) => {

  const [cartCount , setCartCount] = useState(0)

  useEffect(() => {
    var count = 0;
    cart.forEach((item) => {
      count += item.qty
    })

    setCartCount(count)
  }, [cart,cartCount])


    return(
        <div className={styles.navbar}>
        <Link to="/">
        <h2 className={styles.navbar__logo}>Food-Corner</h2>
      </Link>

      <Link to="/cart">
      <div className={styles.navbar__cart}>
        <h3 className={styles.cart__title}>Cart</h3>
        <img
          className={styles.cart__image}
          src="https://image.flaticon.com/icons/svg/102/102276.svg"
          alt="shopping cart"
        />
        <div className={styles.cart__counter}>{cartCount}</div>
      </div>
    </Link>
        </div>
    )
}

const mapStateToProps = state => {
  return {
    cart : state.hotel.cart
  }
}

export default connect(mapStateToProps)(NavBar)