import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartComponent from './ShoppingCartComponent';
//import MyProvider from '../App';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShoppingCartContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: '',
            loading: 'Shopping cart is empty.',
            user: ''
        };
    }

    componentDidMount() {
        const userLink = this.props.match.params.user;
        axios.get('https://itpro2017.herokuapp.com/api/users/' + userLink + '/cart-products')
            .then((response) => {
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleDeleteItem = (itemId) => {
        const userLink = this.props.match.params.user;
        axios.delete('https://itpro2017.herokuapp.com/api/users/' + userLink + '/cart-products/' + (itemId))
            .then((response) => {
                axios.get('https://itpro2017.herokuapp.com/api/users/' + userLink + '/cart-products')
                    .then((response) => {
                        this.setState({ products: response.data });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        if (this.state.products) {
            const productList = this.state.products.map((product, index) => {
                return (
                    <ShoppingCartComponent
                        key={index}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        handleDeleteItem={this.handleDeleteItem}
                    />
                );
            });
            return (<div className="container">

                <div className="row">
                    <div className="col-2">
                        <p>Product picture</p>
                    </div>
                    <div className="col-6">
                        <p>Product title</p>
                    </div>
                    <div className="col-4">
                        <p>Product #</p>
                    </div>
                </div>
                <div className="row">{productList}
                </div>
            </div>);
        }
        return this.state.loading;
    }
}

export default ShoppingCartContainer;
