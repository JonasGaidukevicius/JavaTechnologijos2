import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import OneProductComponent from './OneProductComponent';
import axios from 'axios';
import UserContext from '../../UserContext';
import AddToCartComponent from './AddTopCartComponent';

class OneProductContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id: 0,
            title: "",
            //image: "",
            //description: "",
            //price: 0,
            quantity: 0
        };
        this.userName = this.context;
    }
    
     handleAddToCart = (userName) => {      
        axios.post('http://localhost:8080/api/users/' + userName + '/cart-products', this.state)
            .then(function (response) {
                //console.log(response);
            })
            .catch(function (error) {
                //console.log(error);
            });
    }

    componentDidMount() {
        const position = this.props.match.params.id;
        axios.get('http://localhost:8080/products/' + (position))
            .then((response) => {
                //this.setState(response.data);
                this.setState({id: response.data.id,
                                title: response.data.title,
                                quantity: response.data.quantity})
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <OneProductComponent title={this.state.title}
                                    description={this.state.description}
                                    price={this.state.price}
                                    handleAddToCart={this.handleAddToCart}
                  />
                <UserContext.Consumer>
                {
                    (userNameObject) => {
                       return <AddToCartComponent userName={userNameObject.user} handleAddToCart={this.handleAddToCart}/>
                    }
                } 
                </UserContext.Consumer> 
            </div>
        );
    }
}

export default OneProductContainer;