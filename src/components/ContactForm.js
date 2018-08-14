import React, { Component } from "react";
import { hot } from "react-hot-loader";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSent: false,
      formNotSent: false,
      name: "",
      email: "",
      message: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event =>
    this.setState({
      name: event.target.value,
      review: event.target.value,
      rating: event.target.value
    });

  handleSubmit(e) {
    e.preventDefault();

    fetch(`/api/contact`, {
      method: "POST",
      redirect: "follow",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
    })
      .then(response => {
        if (response.redirected) {
          this.setState({ formSent: true });
        } else this.setState({ formNotSent: true });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <form className="contact" onSubmit={this.handleSubmit}>
        <div className="contact__container">
          <label htmlFor="name">
            <h5 className="contact__label contact__label--name">Name*</h5>
          </label>
          <input
            type="text"
            className="contact__name contact__input"
            onChange={el => this.setState({ name: el.target.value })}
            required
          />
        </div>
        <div className="contact__container">
          <label htmlFor="email">
            <h5 className="contact__label">Email*</h5>
          </label>
          <input
            type="email"
            className="contact__email contact__input"
            onChange={el => this.setState({ email: el.target.value })}
            required
          />
        </div>
        <div className="contact__container">
          <label htmlFor="message">
            <h5 className="contact__label">Message*</h5>
          </label>
          <textarea
            rows="10"
            cols="30"
            type="input"
            className="contact__message contact__input"
            onChange={el => this.setState({ message: el.target.value })}
            required
          />
        </div>
        <input
          className="contact--btn"
          type="submit"
          value={
            this.state.formSent
              ? "Message Sent"
              : "Submit" || this.state.formNotSent === "Unable To Send Message"
          }
          disabled={this.state.formSent}
        />
      </form>
    );
  }
}

export default hot(module)(ContactForm);
