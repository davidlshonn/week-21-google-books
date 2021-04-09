import React from "react";
import Jumbo from "../components/Jumbotron";

class HomePage extends React.Component {
  state = {
    books: [],
  };

  render() {
    return (
      <div>
        <Jumbo />
      </div>
    );
  }
}

export default HomePage;
