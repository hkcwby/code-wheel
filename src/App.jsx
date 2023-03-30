import { useState } from "react";
import "./App.css";

function App() {
  const Chatsubo = {
    Cyberdeck: { AI: 71226, "Fuji Electric": 6124 },
    Comlink: "",
    Icebreaker: "",
    "ROM construct": "",
    Cowboy: "",
    "Emperor Norton": "",
    Cyberjack: "",
    Ratz: { "Zion Cluster": 44312, "Chiba City": 6124 },
    Holografix: { "Asano Computing": 115721, "Hitachi Biotech": 103 },
    "Larry Moe": { Cryptology: 71226 },
    PAX: { "Space colony": 067123, "Holy Joystick": 733 },
    "Skill chips": { "Bank of Berne": 0423 },
    "Shin's Pawn": { Spacedock: 115721, "Ono-Sendai": 103 },
    "Gentleman Loser": { "Marcus Garvey": 44312, "Bank of Zurich": 0423 },
    "Maas Biolabs": { "Compu-judge": 733 },
    "Justice Booth": { flatline: 036160 },
  };

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
