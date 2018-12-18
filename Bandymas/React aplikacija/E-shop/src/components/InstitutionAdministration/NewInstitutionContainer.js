import React from 'react';
import NewInstitutionComponent from './NewInstitutionComponent';
import axios from 'axios';
import { withRouter } from 'react-router';


class NewInstitutionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: '',
      image: '',
      category: '',
      type: '',
      typeOfType: ''
    };
    //var fromMenu;
  }

  handleChangeOfName = (event) => {
    this.setState({ name: event.target.value });
  }

  handleChangeOfImage = (event) => {
    this.setState({ image: event.target.value });
  }

  handleChangeOfCity = (event) => {
    this.setState({ city: event.target.value });
  }

  handleChangeOfCategory = (event) => {
    this.setState({ category: event.target.value });
  }

  handleChangeOfType = (event) => {
    this.setState({ type: event.target.value });
  }

  handleChangeOfTypeOfType = (event) => {
    this.setState({ typeOfType: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:8080/institutions', this.state)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {

    //console.log(this.props.history.location.pathname);
  }


  render() {
    
    this.fromMenu = "Enter new institution data:"

    return (
      <NewInstitutionComponent handleChangeOfName={this.handleChangeOfName}
        handleChangeOfImage={this.handleChangeOfImage}
        handleChangeOfCity={this.handleChangeOfCity}
        handleChangeOfCategory={this.handleChangeOfCategory}
        handleChangeOfType={this.handleChangeOfType}
        handleChangeOfTypeOfType={this.handleChangeOfTypeOfType}
        handleSubmit={this.handleSubmit}
        fromMenu={this.fromMenu}
      />
    );
  }
}

export default withRouter(NewInstitutionContainer);