/* eslint-disable no-unused-vars */
import React , {useState ,useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from "./NavBar.module.css";
import { connect } from 'react-redux'
import { Dropdown } from 'react-bootstrap';



const NavBar = ( { cart } ) => {

  const [cartCount , setCartCount] = useState(0)

  const [name,setName] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
  useEffect(() => {
    console.log('name->',name)
    var count = 0;
    cart.forEach((item) => {
      count += item.qty
    })

    setCartCount(count)
  }, [cart,cartCount])



  console.log("here",name)
  
  const history = useHistory()
  const logout = () => {
    window.confirm('Are You Sure!')
    localStorage.clear()
    history.push('/')
  }

    
   return(
     <>
        <div className={styles.navbar}>
        <Link to="/products">
        <h2 className={styles.navbar__logo}>Food-Corner</h2>
        
      </Link>
      
      
      <div className="row">
        <div className="col">
          <Link to="/cart">
            <div className={styles.navbar__cart}>
             <h3 className={styles.cart__title}>Cart</h3>
          <img className={styles.cart__image}
          src="https://image.flaticon.com/icons/svg/102/102276.svg"
          alt="shopping cart"
          />
           <div className={styles.cart__counter}>{cartCount}</div>
          </div>
        </Link>
      </div>

      <div className="col">
        
          <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {name && name.displayName}
          </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">
      <img className='border-rounded' src={name ? name.photoURL : "lsjdj"} alt={ name ?name.displayName : "skljdk"}/>
    </Dropdown.Item>
    <Dropdown.Item>
      <button onClick={logout} className='btn btn-danger'>Logout</button>
    </Dropdown.Item>
 
  </Dropdown.Menu>
          </Dropdown>
      </div>

    </div>
  </div>
  {
    // localStorage.getItem('user') && setName(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)
  }
  </>
    )

}

const mapStateToProps = (state) => {
  return {
    cart : state.hotel.cart
  }
}

export default connect(mapStateToProps)(NavBar)