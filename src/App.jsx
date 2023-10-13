import React, { Component } from "react";

class Calc extends Component {
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
      <div style={{ margin: "30px 0", width: "300px" }}>
        <button onClick={this.handlePlusClick}>+</button>
        <span style={{ margin: "0 0.75rem", display: "inline-block" }}>
          {this.state.count}
        </span>
        <button onClick={this.handleMinusClick}>-</button>
      </div>
    );
  }
}

class Timer extends Component {
  state = {
    count: 0,
    isCounting: false,
  };

  componentDidMount() {
    const userCount = localStorage.getItem("timer");
    if (userCount) {
      this.setState({ count: +userCount });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("timer", this.state.count);
  }

  componentWillUnmount() {
    clearInterval(this.counterId);
  }

  handleStart = () => {
    this.setState({ isCounting: true });
    this.counterId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  handleStop = () => {
    this.setState({ isCounting: false });
    clearInterval(this.counterId);
  };

  handleReset = () => {
    this.setState({ isCounting: false, count: 0 });
    clearInterval(this.counterId);
  };

  render() {
    return (
      <div>
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export { Calc, Timer };
