
class ManoButton extends React.Component {
    render() {
        return <button className="btn btn-primary">Spausk</button>
    }
}

class MyButton extends React.Component {
    render() {
        return <div> Tekstas{this.props.color}</div>;
    }
}

class HelloComponent extends React.Component {
    render() {
        return <div>Hello {this.props.name} <MyButton color="blue" shadowSize={2}></MyButton></div>;
    }
}
ReactDOM.render(
    <HelloComponent name="Jane" />,
    document.getElementById('root')
);

//---Cia idedu savo mygtuka
ReactDOM.render(
    <ManoButton/>,
    document.getElementById('root2')
);

//-------- O cia klase priskiriu kintamajam
var HelloComponent3 = React.createClass({
    render: function () {
        return <div>Hello {this.props.name}</div>;
    }
});

ReactDOM.render(React.createElement(
    HelloComponent3,
    { name: "Jonas" }),
    document.getElementById('root3')
);



