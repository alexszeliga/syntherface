import React, { Component } from "react";

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
          this.state.value >= -135 ? this.state.value - 10 : this.state.value
      });
    }
    if (this.dragFlag && this.state.y < e.screenY) {
      this.setState({
        y: e.screenY,
        value:
          this.state.value <= 135 ? this.state.value + 10 : this.state.value
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
      display: "relative",
      backgroundColor: "grey",
      textAlign: "center",

      display: "inline-block"
    };
    var dialStyle = {
      height: "100%",
      width: "100%",
      transform: "rotate(.5turn)"
    };
    var labelStyle = {
      fontSize: "10px",
      userSelect: "none"
    };
    var indexGradsStyle = {
      height: "100%",
      width: "100%",
      transform: "rotate(.5turn)"
    };
    var indexLength = 0.8;
    var witnessCoords = {
      x1: 0.5 * Math.sin((this.state.value / 180) * Math.PI),
      y1: 0.5 * Math.cos((this.state.value / 180) * Math.PI),
      x2: 0.8 * Math.sin((this.state.value / 180) * Math.PI),
      y2: 0.8 * Math.cos((this.state.value / 180) * Math.PI)
    };

    return (
      <div className="knob" style={knobStyle}>
        {/* <div style={indexGradsStyle}>
          <svg viewBox="-1 -1 2 2">
          </svg>
        </div>
        <p style={labelStyle}>
          {this.props.labelText ? this.props.labelText : `labelText`}
        </p> */}

        <svg
          onMouseMove={this.onMouseMove.bind(this)}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseLeave={this.handleMouseLeave}
          style={dialStyle}
          viewBox="-1 -1 2 2"
        >
          <circle cx="0" cy="0" r=".8" fill="black" />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="5%"
            x1={witnessCoords.x1}
            y1={witnessCoords.y1}
            x2={witnessCoords.x2}
            y2={witnessCoords.y2}
          />
          <circle cx="0" cy="0" r=".5" fill="silver" />
          <circle
            cx={1.05 * Math.sin(((30 + this.state.value) / 180) * Math.PI)}
            cy={1.05 * Math.cos(((30 + this.state.value) / 180) * Math.PI)}
            r=".35"
            fill="grey"
          />
          <circle
            cx={1.05 * Math.sin(((90 + this.state.value) / 180) * Math.PI)}
            cy={1.05 * Math.cos(((90 + this.state.value) / 180) * Math.PI)}
            r=".35"
            fill="grey"
          />
          <circle
            cx={1.05 * Math.sin(((150 + this.state.value) / 180) * Math.PI)}
            cy={1.05 * Math.cos(((150 + this.state.value) / 180) * Math.PI)}
            r=".35"
            fill="grey"
          />
          <circle
            cx={1.05 * Math.sin(((210 + this.state.value) / 180) * Math.PI)}
            cy={1.05 * Math.cos(((210 + this.state.value) / 180) * Math.PI)}
            r=".35"
            fill="grey"
          />
          <circle
            cx={1.05 * Math.sin(((270 + this.state.value) / 180) * Math.PI)}
            cy={1.05 * Math.cos(((270 + this.state.value) / 180) * Math.PI)}
            r=".35"
            fill="grey"
          />
          <circle
            cx={1.05 * Math.sin(((330 + this.state.value) / 180) * Math.PI)}
            cy={1.05 * Math.cos(((330 + this.state.value) / 180) * Math.PI)}
            r=".35"
            fill="grey"
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((135 / 180) * Math.PI)}
            y1={indexLength * Math.cos((135 / 180) * Math.PI)}
            x2={Math.sin((135 / 180) * Math.PI)}
            y2={Math.cos((135 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-135 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-135 / 180) * Math.PI)}
            x2={Math.sin((-135 / 180) * Math.PI)}
            y2={Math.cos((-135 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((130 / 180) * Math.PI)}
            y1={indexLength * Math.cos((130 / 180) * Math.PI)}
            x2={Math.sin((130 / 180) * Math.PI)}
            y2={Math.cos((130 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-130 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-130 / 180) * Math.PI)}
            x2={Math.sin((-130 / 180) * Math.PI)}
            y2={Math.cos((-130 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((125 / 180) * Math.PI)}
            y1={indexLength * Math.cos((125 / 180) * Math.PI)}
            x2={Math.sin((125 / 180) * Math.PI)}
            y2={Math.cos((125 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-125 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-125 / 180) * Math.PI)}
            x2={Math.sin((-125 / 180) * Math.PI)}
            y2={Math.cos((-125 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((120 / 180) * Math.PI)}
            y1={indexLength * Math.cos((120 / 180) * Math.PI)}
            x2={Math.sin((120 / 180) * Math.PI)}
            y2={Math.cos((120 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-120 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-120 / 180) * Math.PI)}
            x2={Math.sin((-120 / 180) * Math.PI)}
            y2={Math.cos((-120 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((115 / 180) * Math.PI)}
            y1={indexLength * Math.cos((115 / 180) * Math.PI)}
            x2={Math.sin((115 / 180) * Math.PI)}
            y2={Math.cos((115 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-115 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-115 / 180) * Math.PI)}
            x2={Math.sin((-115 / 180) * Math.PI)}
            y2={Math.cos((-115 / 180) * Math.PI)}
          />{" "}
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((110 / 180) * Math.PI)}
            y1={indexLength * Math.cos((110 / 180) * Math.PI)}
            x2={Math.sin((110 / 180) * Math.PI)}
            y2={Math.cos((110 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-110 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-110 / 180) * Math.PI)}
            x2={Math.sin((-110 / 180) * Math.PI)}
            y2={Math.cos((-110 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((105 / 180) * Math.PI)}
            y1={indexLength * Math.cos((105 / 180) * Math.PI)}
            x2={Math.sin((105 / 180) * Math.PI)}
            y2={Math.cos((105 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-105 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-105 / 180) * Math.PI)}
            x2={Math.sin((-105 / 180) * Math.PI)}
            y2={Math.cos((-105 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((100 / 180) * Math.PI)}
            y1={indexLength * Math.cos((100 / 180) * Math.PI)}
            x2={Math.sin((100 / 180) * Math.PI)}
            y2={Math.cos((100 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-100 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-100 / 180) * Math.PI)}
            x2={Math.sin((-100 / 180) * Math.PI)}
            y2={Math.cos((-100 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((95 / 180) * Math.PI)}
            y1={indexLength * Math.cos((95 / 180) * Math.PI)}
            x2={Math.sin((95 / 180) * Math.PI)}
            y2={Math.cos((95 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-95 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-95 / 180) * Math.PI)}
            x2={Math.sin((-95 / 180) * Math.PI)}
            y2={Math.cos((-95 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((90 / 180) * Math.PI)}
            y1={indexLength * Math.cos((90 / 180) * Math.PI)}
            x2={Math.sin((90 / 180) * Math.PI)}
            y2={Math.cos((90 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-90 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-90 / 180) * Math.PI)}
            x2={Math.sin((-90 / 180) * Math.PI)}
            y2={Math.cos((-90 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((85 / 180) * Math.PI)}
            y1={indexLength * Math.cos((85 / 180) * Math.PI)}
            x2={Math.sin((85 / 180) * Math.PI)}
            y2={Math.cos((85 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-85 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-85 / 180) * Math.PI)}
            x2={Math.sin((-85 / 180) * Math.PI)}
            y2={Math.cos((-85 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((80 / 180) * Math.PI)}
            y1={indexLength * Math.cos((80 / 180) * Math.PI)}
            x2={Math.sin((80 / 180) * Math.PI)}
            y2={Math.cos((80 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-80 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-80 / 180) * Math.PI)}
            x2={Math.sin((-80 / 180) * Math.PI)}
            y2={Math.cos((-80 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((75 / 180) * Math.PI)}
            y1={indexLength * Math.cos((75 / 180) * Math.PI)}
            x2={Math.sin((75 / 180) * Math.PI)}
            y2={Math.cos((75 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-75 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-75 / 180) * Math.PI)}
            x2={Math.sin((-75 / 180) * Math.PI)}
            y2={Math.cos((-75 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((70 / 180) * Math.PI)}
            y1={indexLength * Math.cos((70 / 180) * Math.PI)}
            x2={Math.sin((70 / 180) * Math.PI)}
            y2={Math.cos((70 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-70 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-70 / 180) * Math.PI)}
            x2={Math.sin((-70 / 180) * Math.PI)}
            y2={Math.cos((-70 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((65 / 180) * Math.PI)}
            y1={indexLength * Math.cos((65 / 180) * Math.PI)}
            x2={Math.sin((65 / 180) * Math.PI)}
            y2={Math.cos((65 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-65 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-65 / 180) * Math.PI)}
            x2={Math.sin((-65 / 180) * Math.PI)}
            y2={Math.cos((-65 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((60 / 180) * Math.PI)}
            y1={indexLength * Math.cos((60 / 180) * Math.PI)}
            x2={Math.sin((60 / 180) * Math.PI)}
            y2={Math.cos((60 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-60 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-60 / 180) * Math.PI)}
            x2={Math.sin((-60 / 180) * Math.PI)}
            y2={Math.cos((-60 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((55 / 180) * Math.PI)}
            y1={indexLength * Math.cos((55 / 180) * Math.PI)}
            x2={Math.sin((55 / 180) * Math.PI)}
            y2={Math.cos((55 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-55 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-55 / 180) * Math.PI)}
            x2={Math.sin((-55 / 180) * Math.PI)}
            y2={Math.cos((-55 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((50 / 180) * Math.PI)}
            y1={indexLength * Math.cos((50 / 180) * Math.PI)}
            x2={Math.sin((50 / 180) * Math.PI)}
            y2={Math.cos((50 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-50 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-50 / 180) * Math.PI)}
            x2={Math.sin((-50 / 180) * Math.PI)}
            y2={Math.cos((-50 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((45 / 180) * Math.PI)}
            y1={indexLength * Math.cos((45 / 180) * Math.PI)}
            x2={Math.sin((45 / 180) * Math.PI)}
            y2={Math.cos((45 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-45 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-45 / 180) * Math.PI)}
            x2={Math.sin((-45 / 180) * Math.PI)}
            y2={Math.cos((-45 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((40 / 180) * Math.PI)}
            y1={indexLength * Math.cos((40 / 180) * Math.PI)}
            x2={Math.sin((40 / 180) * Math.PI)}
            y2={Math.cos((40 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-40 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-40 / 180) * Math.PI)}
            x2={Math.sin((-40 / 180) * Math.PI)}
            y2={Math.cos((-40 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((35 / 180) * Math.PI)}
            y1={indexLength * Math.cos((35 / 180) * Math.PI)}
            x2={Math.sin((35 / 180) * Math.PI)}
            y2={Math.cos((35 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-35 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-35 / 180) * Math.PI)}
            x2={Math.sin((-35 / 180) * Math.PI)}
            y2={Math.cos((-35 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((30 / 180) * Math.PI)}
            y1={indexLength * Math.cos((30 / 180) * Math.PI)}
            x2={Math.sin((30 / 180) * Math.PI)}
            y2={Math.cos((30 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-30 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-30 / 180) * Math.PI)}
            x2={Math.sin((-30 / 180) * Math.PI)}
            y2={Math.cos((-30 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((25 / 180) * Math.PI)}
            y1={indexLength * Math.cos((25 / 180) * Math.PI)}
            x2={Math.sin((25 / 180) * Math.PI)}
            y2={Math.cos((25 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-25 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-25 / 180) * Math.PI)}
            x2={Math.sin((-25 / 180) * Math.PI)}
            y2={Math.cos((-25 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((20 / 180) * Math.PI)}
            y1={indexLength * Math.cos((20 / 180) * Math.PI)}
            x2={Math.sin((20 / 180) * Math.PI)}
            y2={Math.cos((20 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-20 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-20 / 180) * Math.PI)}
            x2={Math.sin((-20 / 180) * Math.PI)}
            y2={Math.cos((-20 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((15 / 180) * Math.PI)}
            y1={indexLength * Math.cos((15 / 180) * Math.PI)}
            x2={Math.sin((15 / 180) * Math.PI)}
            y2={Math.cos((15 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-15 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-15 / 180) * Math.PI)}
            x2={Math.sin((-15 / 180) * Math.PI)}
            y2={Math.cos((-15 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((10 / 180) * Math.PI)}
            y1={indexLength * Math.cos((10 / 180) * Math.PI)}
            x2={Math.sin((10 / 180) * Math.PI)}
            y2={Math.cos((10 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-10 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-10 / 180) * Math.PI)}
            x2={Math.sin((-10 / 180) * Math.PI)}
            y2={Math.cos((-10 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((5 / 180) * Math.PI)}
            y1={indexLength * Math.cos((5 / 180) * Math.PI)}
            x2={Math.sin((5 / 180) * Math.PI)}
            y2={Math.cos((5 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((-5 / 180) * Math.PI)}
            y1={indexLength * Math.cos((-5 / 180) * Math.PI)}
            x2={Math.sin((-5 / 180) * Math.PI)}
            y2={Math.cos((-5 / 180) * Math.PI)}
          />
          <line
            className="witnessMark"
            stroke="white"
            strokeWidth="1%"
            x1={indexLength * Math.sin((0 / 180) * Math.PI)}
            y1={indexLength * Math.cos((0 / 180) * Math.PI)}
            x2={Math.sin((0 / 180) * Math.PI)}
            y2={Math.cos((0 / 180) * Math.PI)}
          />
        </svg>
      </div>
    );
  }
}

export default Knob;
