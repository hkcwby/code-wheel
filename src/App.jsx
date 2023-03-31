import { useState } from "react";
import "./App.css";
import wheelData from "./assets/wheelData";

function App() {
  const outerWheel = [
    "Chatsubo",
    "Cyberspace",
    "Gemeinschaft",
    "Crazy Edo",
    "Microsofts",
    "Cheap Hotel",
    "Julius Deane",
    "Donut World",
    "Lawbot",
    "database",
    "Shiva",
    "Freeside",
    "softwarez",
    "Matrix",
    "Matt Shaw",
    "Night City News",
  ];

  const [outer, setOuter] = useState(outerWheel);

  function outerWheelShift(position) {
    const mod = outer.splice(0, position);
    setOuter(outer.concat(...mod));
  }

  return (
    <div className="App">
      <div id="background">
        <div id="outer-wheel">
          <div>
            {outer.map((item, index) => (
              <div
                key={index}
                className={"location-" + index}
                onClick={() => outerWheelShift(index)}
              >
                {item}
              </div>
            ))}
          </div>
          <div id="inner-wheel">
            <div id="ring-wheel"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
