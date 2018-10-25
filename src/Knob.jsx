import React, { Component } from "react";
import "./Knob.css";

class Knob extends Component {
  dragFlag = false;
  handleMouseDown = e => {
    this.dragFlag = true;
    this.setState({ y: e.screenY });
  };
  handleMouseUp = e => {
    this.dragFlag = false;
  };
  handleMouseLeave = e => {
    this.dragFlag = false;
  };
  onMouseMove(e) {
    if (this.dragFlag && this.state.y > e.screenY) {
      this.setState({
        y: e.screenY,
        value:
          this.state.value > -140 ? this.state.value - 10 : this.state.value
      });
    }
    if (this.dragFlag && this.state.y < e.screenY) {
      this.setState({
        y: e.screenY,
        value: this.state.value < 140 ? this.state.value + 10 : this.state.value
      });
    }
  }
  state = {
    value: 135,
    x: 0,
    y: 0
  };

  render() {
    var knobStyle = {
      height: this.props.size,
      width: this.props.size,
      backgroundColor: "grey",
      transform: "rotate(.5turn)"
    };
    var witnessCoords = {
      x1: 0.6 * Math.sin((this.state.value / 180) * Math.PI),
      y1: 0.6 * Math.cos((this.state.value / 180) * Math.PI),
      x2: Math.sin((this.state.value / 180) * Math.PI),
      y2: Math.cos((this.state.value / 180) * Math.PI)
    };
    return (
      <div
        className="knob"
        onMouseMove={this.onMouseMove.bind(this)}
        style={knobStyle}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseLeave}
      >
        <svg viewBox="-1 -1 2 2">
          <circle cx="0" cy="0" r="1" fill="black" />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="5%"
            x1={witnessCoords.x1}
            y1={witnessCoords.y1}
            x2={witnessCoords.x2}
            y2={witnessCoords.y2}
          />
          <circle cx="0" cy="0" r=".6" fill="silver" />
          <circle
            cx={Math.sin(((30 + this.state.value) / 180) * Math.PI)}
            cy={Math.cos(((30 + this.state.value) / 180) * Math.PI)}
            r=".22"
            fill="grey"
          />
          <circle
            cx={Math.sin(((90 + this.state.value) / 180) * Math.PI)}
            cy={Math.cos(((90 + this.state.value) / 180) * Math.PI)}
            r=".22"
            fill="grey"
          />
          <circle
            cx={Math.sin(((150 + this.state.value) / 180) * Math.PI)}
            cy={Math.cos(((150 + this.state.value) / 180) * Math.PI)}
            r=".22"
            fill="grey"
          />
          <circle
            cx={Math.sin(((210 + this.state.value) / 180) * Math.PI)}
            cy={Math.cos(((210 + this.state.value) / 180) * Math.PI)}
            r=".22"
            fill="grey"
          />
          <circle
            cx={Math.sin(((270 + this.state.value) / 180) * Math.PI)}
            cy={Math.cos(((270 + this.state.value) / 180) * Math.PI)}
            r=".22"
            fill="grey"
          />
          <circle
            cx={Math.sin(((330 + this.state.value) / 180) * Math.PI)}
            cy={Math.cos(((330 + this.state.value) / 180) * Math.PI)}
            r=".22"
            fill="grey"
          />
        </svg>
      </div>
    );
  }
}

export default Knob;
