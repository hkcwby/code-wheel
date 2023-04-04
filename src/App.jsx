import { useState } from "react";
import "./App.css";
import wheelData from "./assets/wheelData";

function App() {
  const outerRef = {
    Chatsubo: "chatsubo",
    Cyberspace: "cyberspace",
    Gemeinschaft: "gemeinschaft",
    "Crazy Edo": "crazyEdo",
    Microsofts: "microsofts",
    "Cheap Hotel": "cheapHotel",
    "Julius Deane": "juliusDeane",
    "Donut World": "donutWorld",
    Lawbot: "lawbot",
    database: "database",
    Shiva: "shiva",
    Freeside: "freeside",
    softwarez: "softwarez",
    Matrix: "matrix",
    "Matt Shaw": "mattShaw",
    "Night City News": "nightCityNews",
  };
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
  const [asanoComputing, setAsanoComputing] = useState("061254");
  const [spacedock, setSpacedock] = useState("031770");
  const [spaceColony, setSpaceColony] = useState("054127");
  const [flatline, setFlatline] = useState("132077");
  const [ai, setAi] = useState("71226");
  const [zionCluster, setZionCluster] = useState("43267");
  const [marcusGarvey, setMarcusGarvey] = useState("45771");
  const [cryptology, setCryptology] = useState("67237");
  const [chibaCity, setChibaCity] = useState("3347");
  const [bankOfBerne, setBankOfBerne] = useState("5165");
  const [bankOfZurich, setBankOfZurich] = useState("1053");
  const [fujiElectric, setFujiElectric] = useState("6124");
  const [holyJoystick, setHolyJoystick] = useState("333");
  const [onoSendai, setOnoSendai] = useState("725");
  const [hitachiBiotech, setHitachiBiotech] = useState("672");
  const [compuJudge, setCompuJudge] = useState("054");

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

  function updateValues(inner, outer) {
    const data = wheelData;
    console.log(outer[inner.indexOf("Holografix")]);
    console.log(inner);
    console.log(outer);
    // console.log(data[outer][inner]);
    // console.log(inner, outer);
    //setAsanoComputing()
  }

  function outerWheelShift(position) {
    const mod = outer.splice(0, position);
    setOuter(outer.concat(...mod));
    console.log(outer);
    // updateValues(inner, outer);
  }

  function innerWheelShift(position) {
    const mod = inner.splice(0, position);
    updateValues(inner.concat(...mod), outer);
    setInner(inner.concat(...mod));
    const modOne = layerOne.splice(0, position);
    setLayerOne(layerOne.concat(...modOne));
    const modTwo = layerTwo.splice(0, position);
    setLayerTwo(layerTwo.concat(...modTwo));
    const modThree = layerThree.splice(0, position);
    setLayerThree(layerThree.concat(...modThree));
    const modFour = layerFour.splice(0, position);
    setLayerFour(layerFour.concat(...modFour));
    const modFive = layerFive.splice(0, position);
    setLayerFive(layerFive.concat(...modFive));
    const modSix = layerSix.splice(0, position);
    setLayerSix(layerSix.concat(...modSix));
    const modSeven = layerSeven.splice(0, position);
    setLayerSeven(layerSeven.concat(...modSeven));
    const modEight = layerEight.splice(0, position);
    setLayerEight(layerEight.concat(...modEight));
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
