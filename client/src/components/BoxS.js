import React from "react";
import styled from "styled-components";
import MyFlex from "./styled_components/MyFlex";
import FlexHeader from "./styled_components/FlexHeader";
import FlexMainItem from "./styled_components/FlexMainItem";

const MainBox = styled.span`
  font-size: 2.5rem;
  line-height: 1.5em;
  text-align: justify;
  padding: 1em;

  // phone
  @media (max-width: 600px) {
    font-size: 6.5rem;
    text-align: left;
  }
  // tablet portrait
  @media (max-width: 900px) {
  }
  // tablet landscape
  @media (max-width: 1200px) {
  }
  // desktop
  @media (max-width: 1800px) {
  }
  // >1800px = wide screen
`;

const Signature = styled.span`
  padding: 0;
  display: block;
  font-size: 2rem;
  font-style: italic;
  text-align: right;

  // phone
  @media (max-width: 600px) {
    font-size: 5rem;
  }
  // tablet portrait
  @media (max-width: 900px) {
  }
  // tablet landscape
  @media (max-width: 1200px) {
  }
  // desktop
  @media (max-width: 1800px) {
  }
  // >1800px = wide screen
`;

export default function BoxS() {
  return (
    <MyFlex className="myFlex sGrid navChange" id="Story">
      <FlexHeader>Story</FlexHeader>
      <FlexMainItem>
        <MainBox>
          {
            "Während meiner ärztlichen Tätigkeit musste ich immer wieder feststellen, wie umständlich die Software war mit der ich tagtäglich arbeitete. Meine Änderungsvorschläge an die, mit zu vielen Restriktionen belegten IT-Mitarbeiter in den Krankenhäusern sowie an die teils unflexiblen Sowftware-Hersteller, konnten nur träge, wenn überhaupt umgesetzt werden. Daher entschloss ich mich vor einiger Zeit, das Progammieren in meiner Freizeit selber zu erlernen, um in eigener Regie den Problemen meines ärztlichen Alltages entgegnen zu können. Da die IT-Systeme mit denen ich arbeitete meist sehr beschränkte Zugriffsmöglichkeiten boten, aber immer in einem gewissen Umfang einen Browser mit Zugriff auf das Internet bereit stellten, fiel die Wahl zunächst auf die Webentwicklung, also das Javascript-Universum. Aus den Ideen meinen persönlichen Arbeitsalltag zu verbessern, entstand so das Hobby-Projekt VisionX. Die damit verbundenen und von der herkömmlichen IT-Infrastruktur unabhängigen Applikationen, sollen die Möglichkeit bieten konventionelle und repetitive Arbeitsprozesse zu erleichtern und zu reduzieren, sie sollen selbstverständlich sicher und in Einklang mit den geltenden Datenschutzbestimmungen sein und zu guter Letzt noch jede Menge Spaß machen. Natürlich stellen diese Eigenschaften für einen Einzelnen, eine große Herausforderung dar. Daher liegen die Schwerpunkte meiner Anwendungen auf Funktionalität, Zuverlässigkeit und Sicherheit. Vollständigkeit und Komplexität oder ein schickes Design sind mir weniger wichtig."
          }
          <Signature>-- M. Hübner</Signature>
        </MainBox>
      </FlexMainItem>
    </MyFlex>
  );
}
