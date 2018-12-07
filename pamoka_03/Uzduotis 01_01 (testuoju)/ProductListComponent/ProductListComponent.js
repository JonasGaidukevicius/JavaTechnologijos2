import React from 'react';
import PropTypes from 'prop-types';
import ProductCardComponent from './ProductCardComponent/ProductCardComponent'

const ProductListComponent = (props) => {
  console.log("Spausdinu is saraso");
  var productCards = props.products.map(function (product, index) {
      return (
          <ProductCardComponent
              key={index}
              productId={product.productId}
              productImage={product.productImage}
              productName={product.productName}
              productDescription={product.productDescription}
              productPrice={product.productPrice}
          />
      );
  });
  return (<div className="row">{productCards}</div>);
};

ProductListComponent.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductListComponent;