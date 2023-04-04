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
  let asanoComputing = "061254";
  let spacedock = "031770";
  let spaceColony = "054127";
  let flatline = "132077";
  let ai = "71226";
  let zionCluster = "43267";
  let marcusGarvey = "45771";
  let cryptology = "67237";
  let chibaCity = "3347";
  let bankOfBerne = "5165";
  let bankOfZurich = "1053";
  let fujiElectric = "6124";
  let holyJoystick = "333";
  let onoSendai = "725";
  let hitachiBiotech = "672";
  let compuJudge = "054";

  const innerWheel = Object.keys(wheelData.Chatsubo);
  const layerOneWheel = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    asanoComputing,
    "",
    "Space Colony",
    "",
    spacedock,
    "",
    "",
    "flatline",
  ];
  const layerTwoWheel = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "ZionCluster",
    "Asano Computing",
    "",
    spaceColony,
    "",
    "Spacedock",
    "Marcus Garvey",
    "",
    flatline,
  ];
  const layerThreeWheel = [
    "AI",
    "",
    "",
    "",
    "",
    "",
    "",
    zionCluster,
    "",
    "Cryptology",
    "",
    "",
    "",
    marcusGarvey,
    "",
    "",
  ];
  const layerFourWheel = [
    ai,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    cryptology,
    "",
    "Bank of Berne",
    "",
    "",
    "",
    "",
  ];
  const layerFiveWheel = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Chiba City",
    "",
    "",
    "",
    bankOfBerne,
    "",
    bankOfZurich,
    "",
    "",
  ];
  const layerSixWheel = [
    fujiElectric,
    "",
    "",
    "",
    "",
    "",
    "",
    chibaCity,
    "",
    "",
    "Holy Joystick",
    "",
    "",
    "Bank of Zurich",
    "Compu-judge",
    "",
  ];
  const layerSevenWheel = [
    "Fuji Electric",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Hitachi Biotech",
    "",
    holyJoystick,
    "",
    "Ono-Sendai",
    "",
    compuJudge,
    "",
  ];
  const layerEightWheel = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    hitachiBiotech,
    "",
    "",
    "",
    onoSendai,
    "",
    "",
    "",
  ];

  const [outer, setOuter] = useState(outerWheel);
  const [inner, setInner] = useState(innerWheel);
  const [layerOne, setLayerOne] = useState(layerOneWheel);
  const [layerTwo, setLayerTwo] = useState(layerTwoWheel);
  const [layerThree, setLayerThree] = useState(layerThreeWheel);
  const [layerFour, setLayerFour] = useState(layerFourWheel);
  const [layerFive, setLayerFive] = useState(layerFiveWheel);
  const [layerSix, setLayerSix] = useState(layerSixWheel);
  const [layerSeven, setLayerSeven] = useState(layerSevenWheel);
  const [layerEight, setLayerEight] = useState(layerEightWheel);

  function outerWheelShift(position) {
    const mod = outer.splice(0, position);
    setOuter(outer.concat(...mod));
  }
  function innerWheelShift(position) {
    const mod = inner.splice(0, position);
    setInner(inner.concat(...mod));
  }

  return (
    <div className="App">
      <div id="background">
        <div id="outer-wheel">
          <div>
            {outer.map((item, index) => (
              <div
                key={index}
                className={"outer-" + index}
                onClick={() => outerWheelShift(index)}
              >
                {item}
              </div>
            ))}
          </div>
          <div id="inner-wheel">
            {inner.map((item, index) => (
              <div
                key={index}
                className={"inner-" + index}
                onClick={() => innerWheelShift(index)}
              >
                {item}
              </div>
            ))}
            {layerOne.map((item, index) => (
              <div key={index} className={"layer-one-" + index}>
                {item}
              </div>
            ))}
            {layerTwo.map((item, index) => (
              <div key={index} className={"layer-two-" + index}>
                {item}
              </div>
            ))}
            {layerThree.map((item, index) => (
              <div key={index} className={"layer-three-" + index}>
                {item}
              </div>
            ))}
            {layerFour.map((item, index) => (
              <div key={index} className={"layer-four-" + index}>
                {item}
              </div>
            ))}
            {layerFive.map((item, index) => (
              <div key={index} className={"layer-five-" + index}>
                {item}
              </div>
            ))}
            {layerSix.map((item, index) => (
              <div key={index} className={"layer-six-" + index}>
                {item}
              </div>
            ))}
            {layerSeven.map((item, index) => (
              <div key={index} className={"layer-seven-" + index}>
                {item}
              </div>
            ))}
            {layerEight.map((item, index) => (
              <div key={index} className={"layer-eight-" + index}>
                {item}
              </div>
            ))}
            <div id="ring-wheel"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
