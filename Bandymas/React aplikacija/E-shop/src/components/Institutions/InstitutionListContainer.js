import React from 'react';
import PropTypes from 'prop-types';
import InstitutionCardComponent from './InstitutionCardComponent';
//import MyProvider from '../App';
import axios from 'axios';

class InstitutionListContainer extends React.Component {
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
                console.log("Koks atiduodamas produktų sąrašas?");
                console.log(this.state.institutions);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if (this.state.institutions) {
            const institutionCards = this.state.institutions.map((institution, index) => {
                //Čia patikrinu ar ten yra reikšmių
                if (institution.institutionDetails == null) {    
                    return (
                        <InstitutionCardComponent
                            key={index}
                            name={institution.name}
                            city={institution.city}
                            image={institution.image}
                            category={institution.category}
                            type={institution.type}
                            typeOfType={institution.typeOfType}
                        />
                    );
                }

                return (
                    <InstitutionCardComponent
                    key={index}
                    name={institution.name}
                    city={institution.city}
                    image={institution.image}
                    category={institution.category}
                    type={institution.type}
                    typeOfType={institution.typeOfType}
                    />
                );
            });
            return (<div className="row">{institutionCards}</div>);
        }
        return this.state.loading;
    }
}

export default InstitutionListContainer;