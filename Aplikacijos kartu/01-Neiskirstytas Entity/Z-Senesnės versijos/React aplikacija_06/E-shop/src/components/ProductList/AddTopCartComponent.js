import React from 'react';

const AddToCartComponent = (props) => {
    //console.log(props.userName);
    
    const onClick =() => {
        props.handleAddToCart(props.userName);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                     <button className="btn btn-primary" value={props.userName} type="submit" onClick={onClick}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default AddToCartComponent;