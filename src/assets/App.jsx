import { useState, useEffect } from "react";
import "./App.css";
import { wheelData, outerWheel } from "./assets/wheelData";

function App() {
  //our outer wheel options are imported from the datasets stored in the assets folder
  /* our inner wheel data are the keys from our wheelData object stored in the assets folder; 
  we use Chatsubo's keys but each of the options has identical keys representing the inner wheel*/
  const innerWheel = Object.keys(wheelData.Chatsubo);
  // defining the variables that change dependent on wheel positions and start values
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

  /*setting up each layer of the wheel based upon a start position of "Chatsubo":"Cyberdeck"
   at the 12 O'clock position*/
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
  //the position of the title and subtitles default positions
  const titleWheel = [
    "",
    "",
    "",
    "NEUROMANCER",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  const subtitleWheel = [
    "",
    "",
    "",
    "PAX Verification Code Wheel",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  //creating react state management for each of these data positions above
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
  const [title, setTitle] = useState(titleWheel);
  const [subtitle, setSubtitle] = useState(subtitleWheel);

  //a function to update the various data values that appear on the wheel
  function updateValues(inner, outer) {
    //check the corresponding outside value that matches the inner value
    const outsideValueCyberdeck = outer[inner.indexOf("Cyberdeck")];
    //the data is nested objects outer value: innervalue : known parameters
    ai = wheelData[outsideValueCyberdeck]["Cyberdeck"]["AI"];
    fujiElectric =
      wheelData[outsideValueCyberdeck]["Cyberdeck"]["Fuji Electric"];
    //repeat the process for each relevant inside value and its corresponding outside value
    const outsideValueRatz = outer[inner.indexOf("Ratz")];
    zionCluster = wheelData[outsideValueRatz]["Ratz"]["Zion Cluster"];
    chibaCity = wheelData[outsideValueRatz]["Ratz"]["Chiba City"];

    const outsideValueHolografix = outer[inner.indexOf("Holografix")];
    asanoComputing =
      wheelData[outsideValueHolografix]["Holografix"]["Asano Computing"];
    hitachiBiotech =
      wheelData[outsideValueHolografix]["Holografix"]["Hitachi Biotech"];

    const outsideValueLarryMoe = outer[inner.indexOf("Larry Moe")];
    cryptology = wheelData[outsideValueLarryMoe]["Larry Moe"]["Cryptology"];

    const outsideValuePAX = outer[inner.indexOf("PAX")];
    spaceColony = wheelData[outsideValuePAX]["PAX"]["Space colony"];
    holyJoystick = wheelData[outsideValuePAX]["PAX"]["Holy Joystick"];

    const outsideValueSkillChips = outer[inner.indexOf("Skill chips")];
    bankOfBerne =
      wheelData[outsideValueSkillChips]["Skill chips"]["Bank of Berne"];

    const outsideValueShinsPawn = outer[inner.indexOf("Shin's Pawn")];
    spacedock = wheelData[outsideValueShinsPawn]["Shin's Pawn"]["Spacedock"];
    onoSendai = wheelData[outsideValueShinsPawn]["Shin's Pawn"]["Ono-Sendai"];

    const outsideValueGentlemanLoser = outer[inner.indexOf("Gentleman Loser")];
    marcusGarvey =
      wheelData[outsideValueGentlemanLoser]["Gentleman Loser"]["Marcus Garvey"];
    bankOfZurich =
      wheelData[outsideValueGentlemanLoser]["Gentleman Loser"][
        "Bank of Zurich"
      ];

    const outsideValueMaasBiolabs = outer[inner.indexOf("Maas Biolabs")];
    compuJudge =
      wheelData[outsideValueMaasBiolabs]["Maas Biolabs"]["Compu-judge"];

    const outsideValueJusticeBooth = outer[inner.indexOf("Justice Booth")];
    flatline = wheelData[outsideValueJusticeBooth]["Justice Booth"]["flatline"];
  }

  function outerWheelShift(position) {
    let data = [...outer];
    const mod = data.splice(0, position);
    updateValues(inner, outer.concat(...mod));
    data = data.concat(mod);
    setOuter(data);
  }

  function innerWheelShift(position) {
    const innerMod = inner.splice(0, position);
    updateValues(inner.concat(...innerMod), outer);
    setInner(inner.concat(...innerMod));

    const titleMod = title.splice(0, position);
    setTitle(title.concat(...titleMod));

    const subtitleMod = subtitle.splice(0, position);
    setSubtitle(subtitle.concat(...subtitleMod));

    const topPosition = 16 - inner.indexOf("Cyberdeck");
    let dataOne = [
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

    let modOne = dataOne.splice(0, topPosition);
    dataOne = dataOne.concat(modOne);
    modOne = dataOne.splice(0, position);
    dataOne = dataOne.concat(modOne);
    setLayerOne([...dataOne]);

    let dataTwo = [
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
    let modTwo = dataTwo.splice(0, topPosition);
    dataTwo = dataTwo.concat(modTwo);
    modTwo = dataTwo.splice(0, position);
    setLayerTwo(dataTwo.concat(modTwo));
    let dataThree = [
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
    let modThree = dataThree.splice(0, topPosition);
    dataThree = dataThree.concat(modThree);
    modThree = dataThree.splice(0, position);
    setLayerThree(dataThree.concat(modThree));
    let dataFour = [
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
    let modFour = dataFour.splice(0, topPosition);
    dataFour = dataFour.concat(modFour);
    modFour = dataFour.splice(0, position);
    setLayerFour(dataFour.concat(modFour));
    let dataFive = [
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
    let modFive = dataFive.splice(0, topPosition);
    dataFive = dataFive.concat(modFive);
    modFive = dataFive.splice(0, position);
    setLayerFive(dataFive.concat(modFive));
    let dataSix = [
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
    let modSix = dataSix.splice(0, topPosition);
    dataSix = dataSix.concat(modSix);
    modSix = dataSix.splice(0, position);
    setLayerSix(dataSix.concat(modSix));
    let dataSeven = [
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
    let modSeven = dataSeven.splice(0, topPosition);
    dataSeven = dataSeven.concat(modSeven);
    modSeven = dataSeven.splice(0, position);
    setLayerSeven(dataSeven.concat(modSeven));
    let dataEight = [
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
    let modEight = dataEight.splice(0, topPosition);
    dataEight = dataEight.concat(modEight);
    modEight = dataEight.splice(0, position);
    setLayerEight(dataEight.concat(modEight));
  }

  useEffect(() => {
    innerWheelShift(0);
  }, [outer]);

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
            {title.map((item, index) => (
              <h2 className={"title-" + index}>{item}</h2>
            ))}
            {subtitle.map((item, index) => (
              <h3 className={"subtitle-" + index}>{item}</h3>
            ))}
            <div id="ring-wheel"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
