import mainLogo from "../assets/Interplay_logo.png";
function Wheel(props) {
  return (
    <div className="outer-wheel">
      <div>
        {props.outer.map((item, index) => (
          <div
            key={index}
            className={`pos-data-${index} data outer`}
            onClick={() => props.outerWheelClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="inner-wheel">
        {props.inner.map((item, index) => (
          <div
            key={index}
            className={`pos-data-${index} data inner`}
            onClick={() => props.innerWheelClick(index)}
          >
            {item}
          </div>
        ))}
        {props.layers.layerOne.map((item, index) =>
          Number(item) ? (
            <div
              key={index}
              className={`pos-data-${index} data layer-one number`}
            >
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} data layer-one`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerTwo.map((item, index) =>
          Number(item) ? (
            <div
              key={index}
              className={`pos-data-${index} data layer-two number`}
            >
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} data layer-two`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerThree.map((item, index) =>
          Number(item) ? (
            <div
              key={index}
              className={`pos-data-${index} data layer-three number`}
            >
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} data layer-three`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerFour.map((item, index) =>
          Number(item) ? (
            <div
              key={index}
              className={`pos-data-${index} data layer-four number`}
            >
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} data layer-four`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerFive.map((item, index) =>
          Number(item) ? (
            <div
              key={index}
              className={`pos-data-${index} data layer-five number`}
            >
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} data layer-five`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerSix.map((item, index) =>
          Number(item) ? (
            <div
              key={index}
              className={`pos-data-${index} data layer-six number`}
            >
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} data layer-six`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerSeven.map((item, index) =>
          Number(item) ? (
            <div
              key={index}
              className={`pos-data-${index} data layer-seven number`}
            >
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} data layer-seven`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerEight.map((item, index) =>
          Number(item) ? (
            <div
              key={index}
              className={`pos-data-${index} data layer-eight number`}
            >
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-data-${index} data layer-eight`}>
              {item}
            </div>
          )
        )}
        {props.layers.title.map((item, index) => (
          <h2 key={index} className={`title-${index} title-pos`}>
            {item}
          </h2>
        ))}
        {props.layers.subtitle.map((item, index) => (
          <h3 key={index} className={`title-${index} subtitle-pos`}>
            {item}
          </h3>
        ))}
        {props.layers.subtitle.map((item, index) =>
          item ? (
            <img src={mainLogo} className={`title-${index} logo`} alt="logo" />
          ) : (
            <></>
          )
        )}
        {/* <img src={mainLogo} className="logo" alt="logo" /> */}
        <div id="ring-wheel"></div>
      </div>
    </div>
  );
}

export default Wheel;
