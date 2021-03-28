import React from "react";
import Adress from "../images/styled_images/Adress";
import { TermsMain } from "./styled_components/Terms";
import { MainText } from "./styled_components/Terms";

export default function Terms() {
  return (
    <TermsMain className="navChange" id="top" data-testid="TermsComponent">
      <h1>Impressum</h1>
      <MainText>
        <h2>Betreiber der Webseite und inhaltlich verantwortlich: </h2>
        <Adress />
      </MainText>

      <MainText>
        <h2>Haftungsausschluss:</h2>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle kann keine Haftung für die
          Inhalte externer Links übernommen werden. Für den Inhalt der
          verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>
        <p>
          Die Betreibung der Webseite sowie weitere damit ggf. verbundener
          Web-Applikationen erfolgt ausschließlich privat und ohne gewerblichen
          Nutzen oder Gewinnerziehlungsabsicht. Angebotene Leistungen oder
          Projekte entstehen als Hobby in meiner verfügbaren Freizeit, sind
          unentgeltlich und ebenfalls ohne gewerblichen Nutzen oder
          Gewinnerziehlungsabsicht. Die Nutzung erfolgt freiwillig und ohne
          Gewähr auf Funktionalität. Es entstehen keinerlei Haftungsansprüche.
        </p>
        <p>
          Für die Erstellung von Web-Applikationen oder Webseiten wird 'Open
          Source'-Software (z.B. Node.js) verwendet, deren Verwendung im Rahmen
          einer 'Open-Source'-Lizenz frei ist und keiner gesonderten Erwähnung
          bedarf (z.B. im Rahmen einer&nbsp;
          <a
            href="https://de.wikipedia.org/wiki/MIT-Lizenz"
            target="_blank"
            rel="noopener noreferrer"
          >
            'MIT-Lizenz'
          </a>
          ). Wird Bildmaterial verwendet, dann ebenfalls nur wenn dieses unter
          einer freien Lizenz beliebig verwendet werden darf, auch ohne
          gesonderte Nennung der Urheber (z.B.&nbsp;
          <a
            href="https://unsplash.com/license"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash.com
          </a>
          ).
        </p>
      </MainText>
    </TermsMain>
  );
}
