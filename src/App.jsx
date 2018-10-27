import React, { Component } from "react";
import Knob from "./Knob";

class App extends Component {
  render() {
    return (
      <div>
        <Knob size="100" labelText="Volume" />
        <Knob size="150" labelText="Freq" />
        <Knob size="80" labelText="Tone" />
      </div>
    );
  }
}
export default App;
