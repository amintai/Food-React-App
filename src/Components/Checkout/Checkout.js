import React  from 'react';
import { useState , useEffect } from 'react';
import { connect, useDispatch } from 'react-redux'
import styles from './../Checkout/Checkout.module.css'
import {Link} from 'react-router-dom';
import { db } from '../../Firebase';
import NavBar from '../NavBar/NavBar';
import { removeAllItems } from '../../redux/Hotel/hotel-action';

const Checkout = ({checkoutt,removeAllItems}) => {

    const [totalPrice , setTotalPrice ] = useState(0)
    const [checkout,setCheckout] = useState(checkoutt);

    useEffect(() => {
        let price = 0

        checkout.forEach((item) => {
            price += item.qty * item.price
        })
        setTotalPrice(price)
        
    },[totalPrice , checkout , setTotalPrice])


   const firebaseData = () => {
        var name = [];
        checkout.map((item) => {
            name.push({
                "name" : item.title,
                "qty" : item.qty,
            })
            // name.push(item.title)
            // name.push(item.qty)
        })

    db.collection('itemSummary').add({
           name:name,
           revenue : totalPrice
        })
        .then(() => {
            alert('Thanks For Ordering with us')
        })
        .catch((error) => {
            alert('Error',error)
        })
        
        
 
    }
    return(
        <div>
        <NavBar></NavBar>
        <h1 className='text-center mt-3 mb-3'>Cart Summary</h1>
        {
            checkout.map((item,index) => (
                <div className={styles.product} key={index}>
                    <img src={item.image} alt={item.title}  className={styles.product__image}/>
                    <div className='product__details'>
                    <h3>{item.title}</h3>
                    <p className='details__desc'>{item.description}</p>
                    <p className='details__price'> 
                   <span> Quantity :  <span className='btn btn-outline-success'>{item.qty}</span></span>
                    </p>
                    
                </div>
                </div>
             ))
        }
        <h1 className='text-center'>Grand Total :</h1>

        <Link to='/thanks'> <p className='btn btn-primary text-center' onClick={()=> removeAllItems(),firebaseData}> Pay : {totalPrice} $ </p></Link>
        </div>
        )
}

const mapStateToProps = (state) => {
    return{
        checkoutt : state.hotel.cart,
    }
}


export default connect(mapStateToProps )(Checkout)