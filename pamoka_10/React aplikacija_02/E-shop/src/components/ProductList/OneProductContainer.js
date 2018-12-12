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
            image: "",
            description: "",
            price: 0,
            quantity: 0
        };
        this.userName = this.context;
    }
    

    //tokia aš atsikopijavau iš kitur
    /*
    handleAddToCart = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.post('https://itpro2017.herokuapp.com/api/products', this.state)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }*/

     //Čia aš eksperimentuoju
     handleAddToCart = (event) => {
        //let value = this.context;
        //console.log("Spausdinu value - " + value.name);
        //let kitas = value + "kk";
        //console.log("Spausdinu kitą - " + kitas);
        //console.log("Spausdinu this.userName - " + this.userName);
        //console.log("Spausdinu mytgtuko pavadinimą - " + event.target.value);
        let userDirectory = event.target.value;
        //console.log("Spausdinu kelią -" + userDirectory+"-");
               
        axios.post('https://itpro2017.herokuapp.com/api/users/{userDirectory}/cart-products', this.state)
            .then(function (response) {
                console.log("Spausdinu axios response:");
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
       //ČIA REIKIA PANAUDOTI
       //const position=this.props.match.params.id;
       
       
        var pathnameArray = window.location.href.split('/');
        var position = pathnameArray[pathnameArray.length - 1];
        //console.log("Koks kelias gaunasi?");
        //console.log('https://itpro2017.herokuapp.com/api/products/' + (position))


        axios.get('https://itpro2017.herokuapp.com/api/products/' + (position))
            .then((response) => {

                this.setState(response.data);
                console.log("Atspausdintu nuskaitytus duomenis");
                console.log(response.data);
                console.log("Atspausdinu state");
                console.log(this.state);
                //console.log("Produktai yra - " + this.state.products);
                //this.selectedProduct(this.state.products);
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
//OneProductContainer.contextType = UserContext; // This part is important to access context values
export default OneProductContainer;