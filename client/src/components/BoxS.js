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
            'Entwickler nutze ich die Möglichkeiten die mit modernen Technologien entstehen, um sie im Umfeld der Medizin einzusetzen. Durch medizinische Web-Applikationen z.B. können konservative und repetitive Arbeitsprozesse minimiert werden. Das macht die Patientenversorgung sichere und effektiver sowie die Arbeit in der Medizin kreativer und angenehmer. Dabei bin ich bereit auch unkonventionelle Wege zu gehen und nehme '
          }
          <img src={Stilbrüche} alt="logo" />
          {' bewusst in kauf!'}
          <span style={{ padding: '0', display: 'block', fontSize: '3rem', fontStyle: 'italic', textAlign: 'right' }}>-- Dr. M. Hübner</span>
        </span>
      </div>
    </div>
  );
}
