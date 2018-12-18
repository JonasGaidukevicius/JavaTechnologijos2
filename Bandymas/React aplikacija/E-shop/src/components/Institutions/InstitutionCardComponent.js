import React from 'react';
import PropTypes from 'prop-types';
import pic from './img/KingWear-KW06.jpg';
import {Link} from 'react-router-dom';

var styles = {
    tekstoFonas: { background: 'red' },
    tekstoSpalva: { color: 'green' }
    };

const InstitutionCardComponent = (props) => {
    var linkas = "/products/" + props.id;
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={pic} alt="Smartwatch"></img>
            <div className="card-body">
                <h5 style={styles.tekstoFonas} className="card-title">{props.name}</h5>
                <p className="card-text">City: {props.city}</p>
                <p style={styles.tekstoSpalva} className="card-text">Category: {props.category} Euro</p>
                <p className="card-text">Type: {props.type}</p>
                <p className="card-text">Type of type: {props.typeOfType}</p>
                <Link className="btn btn-primary" to={linkas}>Product details</Link>
            </div>
        </div>
        );
}

/* ProductCardComponent.propTypes = {
    
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
}; */

export default InstitutionCardComponent;