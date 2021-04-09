import React from "react";
import ApiCalls from "../utils/ApiCall";
import Jumbo from "../components/Jumbotron";
import SearchForm from "../components/Form";

class HomePage extends React.Component {
  state = {
    books: [],
    q: "",
  };

  handleFormInput = (event) => {
    console.log(event);
    this.setState({
      q: event.target.value,
    });
  };

  getGoogleBooks = () => {
    ApiCalls.getGoogleBooks(this.state.q).then((response) =>
      console.log(response)
    );
  };

  handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    this.getGoogleBooks();
  };

  render() {
    return (
      <div>
        <Jumbo />
        <SearchForm
          handleFormInput={this.handleFormInput}
          handleSubmit={this.handleSubmit}
          q={this.state.q}
        />
      </div>
    );
  }
}

export default HomePage;
