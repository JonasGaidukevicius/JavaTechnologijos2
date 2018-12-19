import React from 'react';
import EditInstitutionComponent from './EditInstitutionComponent';
import axios from 'axios';
import { withRouter } from 'react-router';

class EditInstitutionContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldName: "",
      name: "",
      city: "",
      image: "",
      category: "",
      type: "",
      typeOfType: ""
    };
  }

  componentDidMount() {
    const position = this.props.match.params.name;

    axios.get('http://localhost:8080/institutions/' + (position))
      .then((response) => {
        //this.setState(response.data);
        console.log("Gavau tokį produktą į redagavimą");
        console.log(this.state);
        console.log(response.data.id);
        console.log(response.data.title);
        this.setState({oldName: response.data.name});
        this.setState({name: response.data.name});
        this.setState({city: response.data.city});
        this.setState({image: response.data.image});
        this.setState({category: response.data.category});
        this.setState({type: response.data.type});
        this.setState({typeOfType: response.data.typeOfType});
      
      console.log("Pagaminau tokį State ->" + this.state);
      console.log("Toks description iš state'o -> " + this.state.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChangeOfName = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
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
    //const position = this.props.match.params.id;
    axios.put('http://localhost:8080/institutions/' + (this.state.oldName), this.state)

      .then(function (response) {
        /* axios.get('http://localhost:8080/products/' + (this.state.id))
                    .then((response) => {
                        this.setState({ products: response.data });
                    })
                    .catch((error) => {
                        console.log(error);
                    }); */
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleDelete = (event) => {
    event.preventDefault();
    console.log("Noriu ištrinti " + this.state.oldName);
    axios.delete('http://localhost:8080/institutions/' + (this.state.oldName))
    .then((response) => {
        console.log("Ištrinta");
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  render() {
    this.fromMenu = "Atnaujinamas produktas:";

    return (
      <EditInstitutionComponent handleChangeOfName={this.handleChangeOfName}
        handleChangeOfImage={this.handleChangeOfImage}
        handleChangeOfCity={this.handleChangeOfCity}
        handleChangeOfCategory={this.handleChangeOfCategory}
        handleChangeOfType={this.handleChangeOfType}
        handleChangeOfTypeOfType={this.handleChangeOfTypeOfType}
        handleSubmit={this.handleSubmit}
        handleDelete={this.handleDelete}
        fromMenu={this.fromMenu}
        currentName={this.state.name}
        currentImage={this.state.image}
        currentCity={this.state.city}
        currentCategory={this.state.category}
        currentType={this.state.type}
        currentTypeOfType={this.state.typeOfType}
      />
    );
  }
}

export default withRouter(EditInstitutionContainer);