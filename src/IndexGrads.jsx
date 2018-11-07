import React from "react";

class IndexGrads extends Component {
  render() {
    var indexLength = 0.8;
    var indexGradsStyle = {
      height: "100%",
      width: "100%",
      transform: "rotate(.5turn)"
    };
    return (
      <div style={indexGradsStyle}>
        <svg viewBox="-1 -1 2 2">
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

export default IndexGrads;
