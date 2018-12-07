class ProductCardComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src="img/KingWear-KW06.jpg" alt="Smartwatch"></img>
                            <div class="card-body">
                                <h5 className="card-title">Smartwatch KingWear KW06</h5>
                                <p className="card-text">KingWear KW06 Smart Watch Android 5.1 OS 512GB Ram 8GB Rom MTK6580 Quad Core 3G GPS WiFi Wristwatch Heart Rate Pedometer watch</p>
                                <p className="card-text">Price: 56.00 Euro</p>
                                <a href="#" className="btn btn-primary">Product details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src="img/KingWear-KW06.jpg" alt="Smartwatch"></img>
                            <div class="card-body">
                                <h5 className="card-title">Smartwatch KingWear KW08</h5>
                                <p className="card-text">KingWear KW08 Smart Watch Android 5.1 OS 512GB Ram 8GB Rom MTK6580 Quad Core 3G GPS WiFi Wristwatch Heart Rate Pedometer watch</p>
                                <p className="card-text">Price: 66.00 Euro</p>
                                <a href="#" className="btn btn-primary">Product details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src="img/KingWear-KW06.jpg" alt="Smartwatch"></img>
                            <div class="card-body">
                                <h5 className="card-title">Smartwatch KingWear KW10</h5>
                                <p className="card-text">KingWear KW10 Smart Watch Android 5.1 OS 512GB Ram 8GB Rom MTK6580 Quad Core 3G GPS WiFi Wristwatch Heart Rate Pedometer watch</p>
                                <p className="card-text">Price: 106.00 Euro</p>
                                <a href="#" className="btn btn-primary">Product details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



ReactDOM.render(
    <ProductCardComponent />,
    document.getElementById('root')
);
