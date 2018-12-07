import React from 'react';
import PropTypes from 'prop-types';
import ProductAdministrationLineComponent from './ProductAdministrationLineComponent';
//import MyProvider from '../App';
import axios from 'axios';

class ProductAdministrationListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: '',
            loading: 'Loading products. Please wait...'
        };
    }

    componentDidMount() {
        axios.get('https://itpro2017.herokuapp.com/api/products')
            .then((response) => {
                this.setState({ products: response.data });
                console.log(response.data);
                console.log("Produktai yra - " + this.state.products);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if (this.state.products) {
            const productCards = this.state.products.map((product, index) => {
                return (
                    <ProductAdministrationLineComponent
                        id={product.id}
                        image={product.image}
                        title={product.title}
                    />
                );
            });
            return (<div className="container">
                         <div class="row">
                            <div class="col-2">
                                <p>Product #</p>
                            </div>
                            <div class="col-2">
                                <p>Product picture</p>
                            </div>
                            <div class="col-8">
                                <p>Product title</p>
                            </div>
                        </div>
                        <div class="row">{productCards}
                        </div>
                    </div>);




        }
        return this.state.loading;
    }

}

export default ProductAdministrationListContainer;




/*

//-----Prekiu importavimas is serverio----------
    axios.get('https://itpro2017.herokuapp.com/api/products')
        .then((response) => {
            console.log(response);
            console.log(response.data);
            console.log(response.data[0]);
            var productListOnWeb = response.data[0];
            console.log("Pirmas objektas - " + productListOnWeb);
        })
        .catch((error) => {
            console.log(error);
        });

*/

/*
    productCards = this.props.products.map(function (product, index) {
        return (
            <ProductCardComponent
                key={index}
                id={product.id}
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
            />
        );
    });
    */