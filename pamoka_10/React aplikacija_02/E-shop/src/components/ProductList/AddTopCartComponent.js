import React from 'react';
import PropTypes from 'prop-types';

const AddToCartComponent = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                     <button className="btn btn-primary" value={props.userName} type="submit" onClick={props.handleAddToCart}>Save {props.userName}</button>
                </div>
            </div>
        </div>
    );
}

export default AddToCartComponent;