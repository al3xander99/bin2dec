import React from "react";
const initialState = {
  err: "",
};

export default class InputForm extends React.Component {
  state = {
    bin: "",
    err: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = () => {
    let rg = /^[01]+$/;
    if (!rg.test(this.state.bin)) {
      this.setState({ err: "input can only be a binary number" });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.bin);
    const isValid = this.validate();
    if (isValid) {
      this.props.onSubmit({
        num: this.state.bin,
      });
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="bin"
          value={this.state.bin}
          onChange={this.handleChange}
          placeholder="Binary number to convert.."
        />
        <div style={{ fontSize: 12, color: "red" }}>{this.state.err}</div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    );
  }
}
