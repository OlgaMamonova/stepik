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
      <div className="App" style={{ margin: "0 auto", width: "300px" }}>
        <button onClick={this.handlePlusClick}>+</button>
        <span style={{ margin: "0 0.75rem", display: "inline-block" }}>
          {this.state.count}
        </span>
        <button onClick={this.handleMinusClick}>-</button>
      </div>
    );
  }
}

export default App;
