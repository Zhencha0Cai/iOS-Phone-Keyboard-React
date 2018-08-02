import React, { Component } from "react";
import DisplayArea from "./DisplayArea";
import Key from "./Key";
import DeleteButton from "./DeleteButton";
import CallButton from "./CallButton";
import {
  KEYNUMBERS,
  CHARACTERS,
  KEYCALSSNAME,
  NUMBEROFROW,
  NUMBEROFCOL
} from "./Const";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      showDelete: false
    };
    this.init();
  }

  handleClick = e => {
    const value = e.target.value;
    this.setState(prevState => {
      return {
        number: prevState.number + value,
        showDelete: true
      };
    });
  };

  handleDelete = () => {
    this.setState(prevState => {
      return {
        number: prevState.number.slice(0, -1),
        showDelete: !(prevState.number.length === 1)
      };
    });
  };

  init() {
    this.buttons = [];
    for (let i = 0; i < NUMBEROFROW; i++) {
      for (let j = 0; j < NUMBEROFCOL; j++) {
        let index = i * NUMBEROFCOL + j;
        this.buttons.push(
          <Key
            Key={this.buttons.length}
            keyClassName={KEYCALSSNAME[index]}
            value={KEYNUMBERS[index]}
            handleClick={this.handleClick}
            characters={CHARACTERS[index]}
          />
        );
      }
    }
    this.buttons.push(<CallButton key={this.buttons.length} />);
  }

  render() {
    return (
      <div className="keyboard">
        <DisplayArea number={this.state.number} />
        <div className="keys">
          {this.buttons}
          <DeleteButton
            handleDelete={this.handleDelete}
            showDelete={this.state.showDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
