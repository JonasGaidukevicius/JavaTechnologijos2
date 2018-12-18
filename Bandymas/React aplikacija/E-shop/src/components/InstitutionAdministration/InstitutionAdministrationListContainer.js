import React from 'react';
import PropTypes from 'prop-types';
import InstitutionAdministrationLineComponent from './InstitutionAdministrationLineComponent';
//import MyProvider from '../App';
import axios from 'axios';
import {Link} from 'react-router-dom';

class InstitutionAdministrationListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            institutions: '',
            loading: 'Loading institutions. Please wait...'
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/institutions')
            .then((response) => {
                this.setState({ institutions: response.data });
                //console.log(response.data);
                //console.log("Produktai yra - " + this.state.institutions);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if (this.state.institutions) {
            const institutionCards = this.state.institutions.map((institution, index) => {
                return (
                    <InstitutionAdministrationLineComponent
                        key={index}
                        name={institution.name}
                        image={institution.image}
                        city={institution.city}
                    />
                );
            });
            return (<div className="container">
                         <div className="row">
                         <Link className="btn btn-success" to="/institutions/new">Add new institution</Link>
                         </div>
                         <div className="row">
                            <div className="col-4">
                                <p>Institution</p>
                            </div>
                            <div className="col-4">
                                <p>Picture</p>
                            </div>
                            <div className="col-4">
                                <p>City</p>
                            </div>
                        </div>
                        <div className="row">{institutionCards}
                        </div>
                    </div>);
        }
        return this.state.loading;
    }
}

export default InstitutionAdministrationListContainer;
