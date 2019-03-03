import React from 'react';
import Stilbrüche from '../images/stilbrücheLogoShort.svg';

export default function BoxS() {
  return (
    <div className="myFlex sGrid navChange" id="Story">
      <div className="flexHeader">Story</div>
      <div className="flexMainItems story">
        <span>
          {'Als Arzt'}
          <i> und </i>
          {
            'Entwickler möchte ich die Möglichkeiten welche mit modernen Web-Technologien entstehen im Umfeld der Medizin implementieren. Durch medizinische Web-Applikationen können konservative und repetitive Arbeitsprozesse minimiert werden. Das macht die Patientenversorgung sichere und effektiver sowie die Arbeit in der Medizin kreativer und angenehmer. Dabei bin ich bereit auch unkonventionelle Wege zu gehen und nehme '
          }
          <img src={Stilbrüche} alt="logo" />
          {' bewusst in kauf!'}
        </span>
      </div>
    </div>
  );
}
