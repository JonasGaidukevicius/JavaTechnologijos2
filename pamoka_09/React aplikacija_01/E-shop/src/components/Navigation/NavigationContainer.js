import React from 'react';
import UserContext from '../../UserContext';
import NavigationComponent from './NavigationComponent';

class NavigationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        };
    }

    handleChangeOnName = (event) => {
       console.log(event.target.value);
        this.setState({ user: event.target.value });
        console.log(this.state.user);       
        
    }

    render() {
        return (
            <UserContext.Consumer>
                {
                    (userNameObject) => {
                        //console.log(userNameObject.user);
                        userNameObject.user = this.state.user
                       return  <NavigationComponent children={this.props.children} userName={this.state.user} handleChangeOnName={this.handleChangeOnName} />
                    }
                 
                }
            </UserContext.Consumer>
        );
    }



}

export default NavigationContainer;