import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleMinusClick = this.handleMinusClick.bind(this);
  }

  handlePlusClick() {
    this.setState({ count: this.state.count + 1 });
  }
  handleMinusClick() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handlePlusClick}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleMinusClick}>-</button>
      </div>
    );
  }
}

export default App;
