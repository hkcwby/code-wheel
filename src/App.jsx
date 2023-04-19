import { useState, useEffect } from "react";
import "./App.css";
import { wheelData, outerWheel } from "./assets/wheelData";
import svg from "./assets/Infobox.svg";
import Wheel from "./components/Wheel.jsx";
import Info from "./components/Info.jsx";

function App() {
  //our outer wheel options are imported from the datasets stored in the assets folder
  /* our inner wheel data are the keys from our wheelData object stored in the assets folder;
  we use Chatsubo's keys but each of the options has identical keys representing the inner wheel*/
  const innerWheel = Object.keys(wheelData.Chatsubo);
  // defining the variables that change dependent on wheel positions and start their values
  let [
    asanoComputing,
    spacedock,
    spaceColony,
    flatline,
    ai,
    zionCluster,
    marcusGarvey,
    cryptology,
    chibaCity,
    bankOfBerne,
    bankOfZurich,
    fujiElectric,
    holyJoystick,
    onoSendai,
    hitachiBiotech,
    compuJudge,
  ] = [
    "061254",
    "031770",
    "054127",
    "132077",
    "71226",
    "43267",
    "45771",
    "67237",
    "3347",
    "5165",
    "1053",
    "6124",
    "333",
    "725",
    "672",
    "054",
  ];
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
  // const [layerOne, setLayerOne] = useState(layerOneWheel);
  // const [layerTwo, setLayerTwo] = useState(layerTwoWheel);
  // const [layerThree, setLayerThree] = useState(layerThreeWheel);
  // const [layerFour, setLayerFour] = useState(layerFourWheel);
  // const [layerFive, setLayerFive] = useState(layerFiveWheel);
  // const [layerSix, setLayerSix] = useState(layerSixWheel);
  // const [layerSeven, setLayerSeven] = useState(layerSevenWheel);
  // const [layerEight, setLayerEight] = useState(layerEightWheel);
  // const [title, setTitle] = useState(titleWheel);
  // const [subtitle, setSubtitle] = useState(subtitleWheel);
  const [layers, setLayers] = useState({
    layerOne: layerOneWheel,
    layerTwo: layerTwoWheel,
    layerThree: layerThreeWheel,
    layerFour: layerFourWheel,
    layerFive: layerFiveWheel,
    layerSix: layerSixWheel,
    layerSeven: layerSevenWheel,
    layerEight: layerEightWheel,
    title: titleWheel,
    subtitle: subtitleWheel,
  });

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
  //shifts the innerwheel positions and refreshes data values
  function innerWheelShift(position) {
    //tracks the current position of the wheel tracking based on the location of the original top position
    //this is used for the "layers" because we will be refreshing their data each time
    const topPosition = 16 - inner.indexOf("Cyberdeck");
    //first step in modifying the inner wheel values positions
    const innerNew = [...inner];
    const innerMod = innerNew.splice(0, position);
    //update data based on the new inner and existing outer wheel positions
    updateValues(innerNew.concat(...innerMod), outer);
    //set the new inner wheel positions for rendering
    setInner(innerNew.concat(...innerMod));

    //update the title position and sub title positions in a similar way
    const titleNew = [...layers.title];
    const titleMod = titleNew.splice(0, position);
    const dataTitle = titleNew.concat(titleMod);
    // setTitle(titleNew.concat(titleMod));
    const subtitleNew = [...layers.subtitle];
    const subtitleMod = subtitleNew.splice(0, position);
    const dataSubtitle = subtitleNew.concat(subtitleMod);
    // setSubtitle(subtitleNew.concat(subtitleMod));

    //now refresh each of the eight wheel data layers with the updated variable values

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
    //since this data is in the order of the initial render we must first readjust using our stored variable
    let modOne = dataOne.splice(0, topPosition);
    dataOne = dataOne.concat(modOne);
    //now adjust it to the new position based on the clicked position
    modOne = dataOne.splice(0, position);
    dataOne = dataOne.concat(modOne);
    //assign the layer
    // setLayerOne([...dataOne]);
    //repeat the process for layers two through eight
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
    dataTwo = dataTwo.concat(modTwo);
    // setLayerTwo(dataTwo);
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
    dataThree = dataThree.concat(modThree);
    // setLayerThree(dataThree.concat(modThree));
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
    dataFour = dataFour.concat(modFour);
    // setLayerFour(dataFour.concat(modFour));
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
    dataFive = dataFive.concat(modFive);
    // setLayerFive(dataFive.concat(modFive));
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
    dataSix = dataSix.concat(modSix);
    // setLayerSix(dataSix.concat(modSix));
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
    dataSeven = dataSeven.concat(modSeven);
    // setLayerSeven(dataSeven.concat(modSeven));
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
    dataEight = dataEight.concat(modEight);
    // setLayerEight(dataEight.concat(modEight));

    setLayers({
      layerOne: dataOne,
      layerTwo: dataTwo,
      layerThree: dataThree,
      layerFour: dataFour,
      layerFive: dataFive,
      layerSix: dataSix,
      layerSeven: dataSeven,
      layerEight: dataEight,
      title: dataTitle,
      subtitle: dataSubtitle,
    });
  }
  //shifts the outer wheel
  function outerWheelShift(position) {
    const outerNew = [...outer];
    const outerMod = outerNew.splice(0, position);
    setOuter(outerNew.concat(outerMod));
  }
  //a useEffect hook, rerun the innerWheel data calc (unmoved) when the outer wheel is updated
  useEffect(() => {
    innerWheelShift(0);
  }, [outer]);

  const [info, setInfo] = useState(true);
  function infoToggle() {
    setInfo(!info);
  }

  return (
    <div className="App">
      <div id="background">
        <div id="info-toggle">
          {info ? (
            <img src={svg} id="info" onClick={() => infoToggle()} />
          ) : (
            <div id="toggle-background">
              <div id="toggle-outer-wheel" onClick={() => infoToggle()}>
                <div id="toggle-inner-wheel">
                  <div id="toggle-ring-wheel"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        {info ? (
          <Wheel
            outerWheelClick={outerWheelShift}
            innerWheelClick={innerWheelShift}
            // layerOne={layerOne}
            // layerTwo={layerTwo}
            // layerThree={layerThree}
            // layerFour={layerFour}
            // layerFive={layerFive}
            // layerSix={layerSix}
            // layerSeven={layerSeven}
            // layerEight={layerEight}
            // title={title}
            // subtitle={subtitle}
            layers={layers}
            outer={outer}
            inner={inner}
          />
        ) : (
          <Info />
        )}
        {/* <div id="outer-wheel">
          <div>
            {outer.map((item, index) => (
              <div
                key={index}
                className={`pos-${index} outer`}
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
                className={`pos-${index} inner`}
                onClick={() => innerWheelShift(index)}
              >
                {item}
              </div>
            ))}
            {layerOne.map((item, index) => (
              <div key={index} className={`pos-${index} layer-one`}>
                {item}
              </div>
            ))}
            {layerTwo.map((item, index) => (
              <div key={index} className={`pos-${index} layer-two`}>
                {item}
              </div>
            ))}
            {layerThree.map((item, index) => (
              <div key={index} className={`pos-${index} layer-three`}>
                {item}
              </div>
            ))}
            {layerFour.map((item, index) => (
              <div key={index} className={`pos-${index} layer-four`}>
                {item}
              </div>
            ))}
            {layerFive.map((item, index) => (
              <div key={index} className={`pos-${index} layer-five`}>
                {item}
              </div>
            ))}
            {layerSix.map((item, index) => (
              <div key={index} className={`pos-${index} layer-six`}>
                {item}
              </div>
            ))}
            {layerSeven.map((item, index) => (
              <div key={index} className={`pos-${index} layer-seven`}>
                {item}
              </div>
            ))}
            {layerEight.map((item, index) => (
              <div key={index} className={`pos-${index} layer-eight`}>
                {item}
              </div>
            ))}
            {title.map((item, index) => (
              <h2 key={index} className={"title-" + index}>
                {item}
              </h2>
            ))}
            {subtitle.map((item, index) => (
              <h3 key={index} className={"subtitle-" + index}>
                {item}
              </h3>
            ))}
            <div id="ring-wheel"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
