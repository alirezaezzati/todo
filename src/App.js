import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./component/card-list/card-list.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ monster: users }));
  }
  render() {
    return (
      <div className="App">
        <CardList monster={this.state.monster} />
      </div>
    );
  }
}

export default App;
