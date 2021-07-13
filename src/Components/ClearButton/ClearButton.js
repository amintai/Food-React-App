import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeAllItems, removeFromCart } from '../../redux/Hotel/hotel-action';
import './../ClearButton/ClearButton.css'

const ClearButton = ({dispatch , removeAllItems , price}) => {
    
    return(
        <>
        
            <Link to='/thanks'><button className="payBtn btn btn-primary" onClick={removeAllItems}>Pay {price} $</button></Link>
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ removeAllItems } , dispatch)

export default connect(null , mapDispatchToProps)(ClearButton)