import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductCardComponent from './ProductCardComponent/ProductCardComponent';
import ProductListComponent from './ProductListComponent/ProductListComponent';

var products = [
    {
        productId: 1,
        productName: "Smartwatch KingWear KW06",
        productImage: "img/KingWear-KW06.jpg",
        productDescription: "KingWear KW06 Smart Watch Android 5.1 OS 512GB Ram 8GB Rom MTK6580 Quad Core 3G GPS WiFi Wristwatch Heart Rate Pedometer watch",
        productPrice: 56.01
    },
    {
        productId: 2,
        productName: "Smartwatch KingWear KW08",
        productImage: "img/KingWear-KW06.jpg",
        productDescription: "KingWear KW08 Smart Watch Android 5.1 OS 512GB Ram 8GB Rom MTK6580 Quad Core 3G GPS WiFi Wristwatch Heart Rate Pedometer watch",
        productPrice: 76.09
    },
    {
        productId: 3,
        productName: "Smartwatch KingWear KW10",
        productImage: "img/KingWear-KW06.jpg",
        productDescription: "KingWear KW10 Smart Watch Android 5.1 OS 512GB Ram 8GB Rom MTK6580 Quad Core 3G GPS WiFi Wristwatch Heart Rate Pedometer watch",
        productPrice: 106.99
    },
]

class App extends Component {

}



console.log("Spausdinu is app");

/*ReactDOM.render(
    <ProductListComponent products={products} />,
    document.getElementById('root'));
*/

ReactDOM.render(
    <p>Tekstas</p>,
    document.getElementById('root'));


