import React from "react";
import InputForm from "./InputForm";

export default class decOutput extends React.Component {
  state = {
    rez: "",
  };

  convertNum = (inn) => {
    let x = parseInt(inn.num, 2);
    console.log(inn.num);
    this.setState({
      rez: x,
    });
  };
  render() {
    return (
      <div>
        <InputForm onSubmit={this.convertNum} />
        {this.state.rez}
      </div>
    );
  }
}
