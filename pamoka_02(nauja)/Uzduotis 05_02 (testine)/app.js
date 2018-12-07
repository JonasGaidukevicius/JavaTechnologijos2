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
    {
        productId: 4,
        productName: "Smartwatch KingWear KW10",
        productImage: "img/KingWear-KW06.jpg",
        productDescription: "KingWear KW10 Smart Watch Android 5.1 OS 512GB Ram 8GB Rom MTK6580 Quad Core 3G GPS WiFi Wristwatch Heart Rate Pedometer watch",
        productPrice: 106.99
    },
    {
        productId: 5,
        productName: "Smartwatch KingWear KW10",
        productImage: "img/KingWear-KW06.jpg",
        productDescription: "KingWear KW10 Smart Watch Android 5.1 OS 512GB Ram 8GB Rom MTK6580 Quad Core 3G GPS WiFi Wristwatch Heart Rate Pedometer watch",
        productPrice: 106.99
    },
    {
        productId: 6,
        productName: "Smartwatch KingWear KW10",
        productImage: "img/KingWear-KW06.jpg",
        productDescription: "KingWear KW10 Smart Watch Android 5.1 OS 512GB Ram 8GB Rom MTK6580 Quad Core 3G GPS WiFi Wristwatch Heart Rate Pedometer watch",
        productPrice: 106.99
    },
    {
        productId: 7,
        productName: "Smartwatch KingWear KW10",
        productImage: "img/KingWear-KW06.jpg",
        productDescription: "KingWear KW10 Smart Watch Android 5.1 OS 512GB Ram 8GB Rom MTK6580 Quad Core 3G GPS WiFi Wristwatch Heart Rate Pedometer watch",
        productPrice: 106.99
    },
    {
        productId: 8,
        productName: "Smartwatch KingWear KW10",
        productImage: "img/KingWear-KW06.jpg",
        productDescription: "KingWear KW10 Smart Watch Android 5.1 OS 512GB Ram 8GB Rom MTK6580 Quad Core 3G GPS WiFi Wristwatch Heart Rate Pedometer watch",
        productPrice: 106.99
    }

]

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

var ProductListComponent = (props) => {
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

ReactDOM.render(
    <ProductListComponent products={products} />,
    document.getElementById('root'));

