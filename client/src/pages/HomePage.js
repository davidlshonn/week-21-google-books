import React from "react";
import ApiCalls from "../utils/ApiCall";
import Jumbo from "../components/Jumbotron";
import SearchForm from "../components/Form";
import Cards from "../components/BookCard";

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

  handleSaveBook = (id) => {
    console.log("Clicked");
    const bookWithId = this.state.books.find(
      (selectedBook) => selectedBook.id === id
    );
    ApiCalls.save({
      id: bookWithId.id,
      title: bookWithId.volumeInfo.title,
      subtitle: bookWithId.volumeInfo.subtitle,
      authors: bookWithId.volumeInfo.authors,
      thumbnail: bookWithId.volumeInfo.imageLinks.thumbnail,
      description: bookWithId.volumeInfo.description,
      infoLink: bookWithId.volumeInfo.infoLink,
    }).then(() => {
      this.getBooks();
    });
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
            <Cards
              key={book.id}
              title={book.volumeInfo.title}
              subtitle={book.volumeInfo.subtitle}
              authors={book.volumeInfo.authors}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
              description={book.volumeInfo.description}
              infoLink={book.volumeInfo.infoLink}
              Button={() => (
                <button
                  onClick={() => {
                    console.log(book.id);
                    this.handleSaveBook(book.id);
                  }}
                >
                  Save Book
                </button>
              )}
            />
          ))
        ) : (
          <p>Please search for books</p>
        )}
      </div>
    );
  }
}

export default HomePage;
