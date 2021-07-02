/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

import {connect} from 'react-redux';
import { addToCart  , loadCurrentItem } from './../../../redux/Hotel/hotel-action'

const Product = ({productData , addToCart , loadCurrentItem }) => {
    return(
        <div className='product'>
            <img className='product__image' src={productData.image} alt='product image'/>

            <div className='product__details'>
                <p className='details__title'>{productData.title}</p>
                <p className='details__desc'>{productData.description}</p>
                <p className='details__price'> Price : $ {productData.price}</p>
            </div>

            <div className='product__buttons'>
                <Link to={`/product/${productData.id}`}>

                    <button onClick={() => loadCurrentItem(productData)} className='buttons__btn buttons__view'>
                        View Item
                    </button>
                </Link>
                <button onClick={() => addToCart(productData.id)} className='buttons__btn buttons__add'>
                    Add To Cart
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}
export default connect(null,mapDispatchToProps)(Product)