import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import NoMatch from './NoMatch';
import AppContainer from './AppContainer';
import ProductAdministrationComponent from './ProductAdministrationComponent/ProductAdministrationComponent';

var DemonstruotiNavigacija = (props) => {
    var goHome = () => props.history.push("/");
    return (
        <div>
            At route: {props.location.pathname}
            <button onClick={goHome}>Go Home</button>
            <pre>
                {JSON.stringify(props, null, 1)}
                 {/*{JSON.stringify(props, null, 2)}*/}
            </pre>
        </div>
    );
};


ReactDOM.render((
    <BrowserRouter>
        <AppContainer>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path="/products/:id" component={DemonstruotiNavigacija} />
                <Route path="/products" component={DemonstruotiNavigacija} />
                <Route path="/help" component={DemonstruotiNavigacija} />
                <Route path="/admin" component={ProductAdministrationComponent}/>
                <Route path="*" component={NoMatch} />
                <Route component={NoMatch} />
            </Switch>
        </AppContainer>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
