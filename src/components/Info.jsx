function Info() {
  return (
    <div className="outer-wheel info-tab">
      <div className="info-title">
        <h1>Information</h1>
      </div>
      <div className="info-body">
        <p className="info-text-top">
          This is a recreation of the Pax Verification Wheel from the 1988 game{" "}
          <a href="https://en.wikipedia.org/wiki/Neuromancer_(video_game)">
            Neuromancer
          </a>{" "}
          , which is based on the classic Cyberpunk{" "}
          <a href="https://en.wikipedia.org/wiki/Neuromancer">Novel</a> by
          William Gibson.
        </p>
        <p className="info-text-mid">
          The game itself is now widely available to play on modern computers
          using DosBox or through a web browser. However, in order to play the
          game properly you require a code wheel which was supplied with the
          original physical copy of the game. This was a common form of data
          protection in the 1980s and 1990s for PC gaming.
        </p>
        <p className="info-text-bottom">
          This web application is functional replica of the original code wheel.
          So you won't need to be a Console Cowboy or crack the ICE to enjoy
          this game.
        </p>
      </div>
    </div>
  );
}

export default Info;
