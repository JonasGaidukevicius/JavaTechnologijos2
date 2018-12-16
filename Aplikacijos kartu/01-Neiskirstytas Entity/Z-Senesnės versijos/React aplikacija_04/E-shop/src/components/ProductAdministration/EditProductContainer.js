import React from 'react';
import EditProductComponent from './EditProductComponent';
import axios from 'axios';
import { withRouter } from 'react-router';

class EditProductContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: "",
      image: "",
      description: "",
      price: 0,
      quantity: 0
    };
  }

  componentDidMount() {
    const position = this.props.match.params.id;

    axios.get('https://itpro2017.herokuapp.com/api/products/' + (position))
      .then((response) => {
        this.setState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChangeOfTitle = (event) => {
    this.setState({ title: event.target.value });
    console.log(this.state.title);
  }

  handleChangeOfImageUrl = (event) => {
    this.setState({ image: event.target.value });
  }

  handleChangeOfDescription = (event) => {
    this.setState({ description: event.target.value });
  }

  handleChangeOfPrice = (event) => {
    this.setState({ price: event.target.value });
  }

  handleChangeOfQuantity = (event) => {
    this.setState({ quantity: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.put('https://itpro2017.herokuapp.com/api/products/' + (this.state.id), this.state)

      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    this.fromMenu = "Atnaujinamas produktas:";

    return (
      <EditProductComponent handleChangeOfTitle={this.handleChangeOfTitle}
        handleChangeOfImageUrl={this.handleChangeOfImageUrl}
        handleChangeOfDescription={this.handleChangeOfDescription}
        handleChangeOfPrice={this.handleChangeOfPrice}
        handleChangeOfQuantity={this.handleChangeOfQuantity}
        handleSubmit={this.handleSubmit}
        fromMenu={this.fromMenu}
        currentTitle={this.state.title}
        currentImage={this.state.image}
        currentDescription={this.state.description}
        currentPrice={this.state.price}
        currentQuantity={this.state.quantity}
      />
    );
  }
}

export default withRouter(EditProductContainer);