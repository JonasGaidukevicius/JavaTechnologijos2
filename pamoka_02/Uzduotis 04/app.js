class HelloComponent extends React.Component {
    render() {
        return (<div>Hello, {this.props.name}</div>);
    }
}

HelloComponent.propTypes = {
    name: PropTypes.string.isRequired,
    anotherName: PropTypes.string.isRequired
}

ReactDOM.render(
    (<HelloComponent name="Jane" anotherName="Good" />),
    document.getElementById('root')
);


class ProductCardComponent extends React.Component{
    render(){
        return <div>Card is {this.props.id} and it's description is {this.props.description}</div>
    }
}

ProductCardComponent.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

ReactDOM.render(
    <ProductCardComponent id={1} image="image" title="uzvadinimas" description="Aprasymas" price={20}/>,
    document.getElementById('root2')
);


//------cia yra su in-line stiliais ------------------------------------------------
//1. Apsirasau stiliu kintamuosius
var styles = {
    container: { background: 'red' },
    greetingText: { color: 'green' }
};
//2. Apsirasau komponenta ir nurodau, kokius stilius turi naudoti elementai
class ComponentWithStyles extends React.Component{
    render() {
        return (
            <div style={styles.container}>
                <p style={styles.greetingText}>Tekstas yra toks</p>
            </div>
        );
    }
};
//3. Nuspiesiu komponenta
ReactDOM.render(
    <ComponentWithStyles />,
    document.getElementById('root3')
);