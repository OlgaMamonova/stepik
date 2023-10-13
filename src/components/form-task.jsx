import React from "react";

// don't change the Component name "App"
export default class FormTask extends React.Component {
  constructor() {
    super();
    this.state = {
      card: "",
      email: "",
      isAgreeWithTerms: false,
    };
    this.cardRef = React.createRef();
    this.emailRef = React.createRef();
  }
  componentDidMount() {
    this.cardRef.current.focus();
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value }, () => {
      if (this.state.card.length === 16) {
        this.emailRef.current.focus();
      }
    });
  };

  handleCheckboxChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.checked });
  };

  handleSubmit = () => {
    const isValidEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.state.email.toLocaleLowerCase()
      );

    const isChecked = this.state.isAgreeWithTerms;

    if (!isValidEmail) {
      alert("your email is not valid");
      return;
    }

    if (!isChecked) {
      alert("you should to accept all terms");
      return;
    }

    this.setState({ email: "", isAgreeWithTerms: false });
    alert("thanks for subscription");
  };

  render() {
    // TODO: implement component
    const { email, isAgreeWithTerms, card } = this.state;

    return (
      <div>
        <input
          type="text"
          name="card"
          placeholder="card"
          value={card}
          onChange={this.handleChange}
          ref={this.cardRef}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
          ref={this.emailRef}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isAgreeWithTerms"
            checked={isAgreeWithTerms}
            onChange={this.handleCheckboxChange}
          />
          I agree with terms and conditions
        </label>
        <br />
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    );
  }
}
