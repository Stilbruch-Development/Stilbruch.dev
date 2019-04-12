import React from "react";
import Stilbrüche from "../images/stilbrücheLogoShort.svg";

export default function BoxS() {
  return (
    <div className="myFlex sGrid navChange" id="Story">
      <div className="flexHeader">Story</div>
      <div className="flexMainItems story">
        <span>
          {"Als Arzt"}
          <i> und </i>
          {
            "Entwickler nutze ich die Möglichkeiten die mit modernen Webtechnologien entstehen um sie im Umfeld der Medizin einzusetzen. Intelligente Web-Applikationen minimieren konservative und repetitive Arbeitsprozesse in der Medizin und können die Patientenversorgung sichere und effektiver sowie die Arbeit kreativer und angenehmer machen. Als Webentwickler bin ich bereit auch unkonventionelle Wege zu gehen und nehme "
          }
          <img src={Stilbrüche} alt="logo" />
          {" bewusst in kauf!"}
          <span
            style={{
              padding: "0",
              display: "block",
              fontSize: "3rem",
              fontStyle: "italic",
              textAlign: "right"
            }}
          >
            -- Dr. M. Hübner
          </span>
        </span>
      </div>
    </div>
  );
}
