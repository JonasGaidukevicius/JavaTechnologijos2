var product = {
    productId: 1,
    productName: "Smartwatch KingWear KW06",
    productImage: "img/KingWear-KW06.jpg",
    productDescription: "KingWear KW06 Smart Watch Android 5.1 OS 512GB Ram 8GB Rom MTK6580 Quad Core 3G GPS WiFi Wristwatch Heart Rate Pedometer watch",
    productPrice: 56.01
}

class ProductCardComponent extends React.Component {
    render() {
        return (<div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="img/KingWear-KW06.jpg" alt="Smartwatch"></img>
            <div className="card-body">
                <h5 className="card-title">{this.props.productName}</h5>
                <p className="card-text">{this.props.productDescription}</p>
                <p className="card-text">Price: {this.props.productPrice} Euro</p>
                <a href="#" className="btn btn-primary">Product details</a>
            </div>
        </div>);
    }
}

ProductCardComponent.propTypes = {
    productId: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    productImage: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired
};


ReactDOM.render(
    <ProductCardComponent productId={1} productName={product.productName} productImage={product.productImage} productDescription={product.productDescription} productPrice={product.productPrice} />,
    document.getElementById('root')
);

