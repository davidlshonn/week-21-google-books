import React from "react";
import ApiCalls from "../utils/ApiCall";
import Jumbo from "../components/Jumbotron";
import SearchForm from "../components/Form";
import Card from "../components/BookCard";

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
    console.log(this.state.q);
  };

  getBooks = () => {
    console.log(this.state.q);
    ApiCalls.getGoogleBooks(this.state.q).then(
      (response) => this.setState({ books: response.data })
      // console.log(respons e.data)
    );
  };

  handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    this.getBooks();
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
        {this.state.books.length ? (
          this.state.books.map((book) => (
            <Card key={book.id} title={book.volumeInfo.title} />
          ))
        ) : (
          <p>Please search for books</p>
        )}
      </div>
    );
  }
}

export default HomePage;
