import { useState } from "react";
import "./App.css";
import wheelData from "./assets/wheelData";

function App() {
  console.log(wheelData.Freeside.Cyberdeck.AI);

  return (
    <div className="App">
      <div id="background">
        <div id="outer-wheel">
          <div>
            <div className="location-one">Chatsubo</div>
            <div className="location-two">Cyberspace</div>
            <div className="location-three">Gemeinschaft</div>
            <div className="location-four">Crazy Edo</div>
            <div className="location-five">Microsofts</div>
            <div className="location-six">Cheap Hotel</div>
            <div className="location-seven">Julius Deane</div>
            <div className="location-eight">Donut World</div>
            <div className="location-nine">Lawbot</div>
            <div className="location-ten">database</div>
            <div className="location-eleven">Shiva</div>
            <div className="location-twelve">Freeside</div>
            <div className="location-thirteen">softwarez</div>
            <div className="location-fourteen">Matrix</div>
            <div className="location-fifteen">Matt Shaw</div>
            <div className="location-sixteen">Night City News</div>
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
