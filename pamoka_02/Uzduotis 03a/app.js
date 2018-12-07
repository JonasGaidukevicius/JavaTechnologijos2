/*var AvatarComponent = React.createClass({
    render: function () {
        return (
            <img className="Avatar"
                src={this.props.user.avatarUrl}
                alt={this.props.user.name}
            />
        )
    }
});*/

class AvatarComponent extends React.Component {
    render() {
        return <img className="Avatar"
            src={this.props.user.avatarUrl}
            alt={this.props.user.name}
        />;
    }
}





/*class HelloComponent extends React.Component {
    render() {
        return <div>Hello {this.props.name} <MyButton color="blue" shadowSize={2}></MyButton></div>;
    }
}*/

var user1 = {avatarUrl: "ava.jpg",
                        name: "Avatar"};


ReactDOM.render(
    <AvatarComponent user = {user1} />,
    document.getElementById('root')
);
ReactDOM.render(
    <AvatarComponent user = {{avatarUrl: "ava.jpg",
                            name: "Avatar"}} />,
    document.getElementById('root2')
);






