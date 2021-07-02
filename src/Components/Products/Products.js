import React , {useState}from 'react';
import Product from './Product/Product';
import './Products.css'
import { connect } from 'react-redux'

const Products = ({ products }) => {
    
    console.log('from',products)

    const [value , handleChange] = useState("none")


    return(
        <>
        <div className='filter label'>
    
        <select  className='dropdown dropdown-content' onChange={(e) => {
            const selected = e.target.value
            handleChange(selected)
        }}>
        <option value='none' selected>Select Menu</option>
        <option value='pizza'>Pizza
        </option>
        <option value='pasta'>Pasta
        </option>
        <option value='icecream'>Ice-Cream
        </option>
        <option value='paneer'>Paneer</option>
        </select>
        
        </div>
        
        <div className='products'>
        {
            products.map((product) => (
                value === 'none' ? <Product key={product.id} productData = {product}/>: 
                  product.type === value && <Product key={product.id} productData = {product}/>
                ))}
                </div>
    </>
        )
 }

const mapStateToProps = (state) => {
    return {
        products : state.hotel.products,
    }
}



export default connect(mapStateToProps)(Products)