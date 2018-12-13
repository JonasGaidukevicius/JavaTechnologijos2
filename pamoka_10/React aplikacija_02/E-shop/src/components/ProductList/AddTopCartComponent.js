import React from 'react';
import PropTypes from 'prop-types';

const AddToCartComponent = (props) => {
    console.log(props.userName);
    const onClick =() => {
        //console.log("Spausdinu paspaudus" + props.userName);
        props.handleAddToCart(props.userName);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                     <button className="btn btn-primary" value={props.userName} type="submit" onClick={onClick}>Save {props.userName}</button>
                </div>
            </div>
        </div>
    );
}

export default AddToCartComponent;

//onClick={props.handleAddToCart}