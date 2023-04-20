import { useState, useEffect } from "react";
// import "../App.css";
import { wheelData, outerWheel } from "../assets/wheelData";

function Wheel(props) {
  return (
    <div className="outer-wheel">
      <div>
        {props.outer.map((item, index) => (
          <div
            key={index}
            className={`pos-${index} outer`}
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
            className={`pos-${index} inner`}
            onClick={() => props.innerWheelClick(index)}
          >
            {item}
          </div>
        ))}
        {props.layers.layerOne.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-${index} layer-one number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-${index} layer-one`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerTwo.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-${index} layer-two number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-${index} layer-two`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerThree.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-${index} layer-three number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-${index} layer-three`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerFour.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-${index} layer-four number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-${index} layer-four`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerFive.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-${index} layer-five number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-${index} layer-five`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerSix.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-${index} layer-six number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-${index} layer-six`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerSeven.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-${index} layer-seven number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-${index} layer-seven`}>
              {item}
            </div>
          )
        )}
        {props.layers.layerEight.map((item, index) =>
          Number(item) ? (
            <div key={index} className={`pos-${index} layer-eight number`}>
              {item}
            </div>
          ) : (
            <div key={index} className={`pos-${index} layer-eight`}>
              {item}
            </div>
          )
        )}
        {props.layers.title.map((item, index) => (
          <h2 key={index} className={"title-" + index}>
            {item}
          </h2>
        ))}
        {props.layers.subtitle.map((item, index) => (
          <h3 key={index} className={"subtitle-" + index}>
            {item}
          </h3>
        ))}
        <div id="ring-wheel"></div>
      </div>
    </div>
  );
}

export default Wheel;
