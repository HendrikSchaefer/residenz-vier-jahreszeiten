import React from "react"
import imperialdark from '../../img/imperial-dark.png'
import dots from '../../img/dots.png'
import { FaServicestack } from 'react-icons/fa';
import { graphql, Link } from 'gatsby';
import hauptgebaude from '../../img/Hauptgebaeude-cut.png';


class ServiceNew extends React.Component {
  render () {
    return(
      <React.Fragment>
      <>
      <div class="sectionService">
          <div style={{maxWidth:'80%', marginLeft:'auto', marginRight:'auto'}}>
              <p style={{textAlign:'center'}}><br />
              <span className="display subh2NewBlack">Unser Service: </span><br />
              <span className="display subh2NewBlack">Ihr persönliches<br/> Wohlbefinden</span></p>
              <p style={{textAlign:'center'}}><img style={{marginLeft:'-15px', marginTop:'5%', marginBottom:'2%'}} src={dots} alt="border" /></p>
          </div>
          <div class="serviceSection" style={{maxWidth:'100%', marginLeft:'auto', marginRight:'auto'}}>
            <div className="serviceLeft">
            <img style={{marginTop:'5%', marginBottom:'2%'}} src={hauptgebaude} alt="border" />
            </div>
            <div className="serviceRight customParagraph">
            <span className="display subh2New2">Wir bieten Ihnen und Ihren
Angehörigen den vollen
Service.</span><br/><br/>

Von Unterstützung beim Umzug
oder Immobilienverkauf bis zu
Möbelierungshilfen und Behördenwegen
– alles aus einer
Hand, für Ihr persönliches
Wohlbefinden.
<br/><br/>Im zweiten Bauabschnitt entstehen
fast 30 Single- und Pärchenappartements
sowie die
Therapieräume vom Ambulanten
Geriatrischen Rehakomplex
– kurz AGR.
„Es war auch für uns überraschend,
wie sich sehr viele
Menschen aus der Region für
dieses Thema interessieren. Es
zeigt auch die hohe Brisanz der
regionalen Überalterung. Die
Menschen wollen ein selbstbestimmtes
Leben im Alter führen,
auch im Fall notwendiger, pflegerischer
Unterstützung.<br/><br/>
„Wir wollen später nicht in ein
Pflegeheim“ sagten die Interessierten.
Die jahrelangen, umfänglichen
und intensiven Vorarbeiten
machen sich nun
endlich für das Wohl der Menschen
im Umkreis bezahlt!“ so
Anja Ebert, Geschäftsführerin
unseres Partners, des Ambulanten
Pflegedienstes „Vier Jahreszeiten“
GmbH.<br/><br/>
Alle Appartements sind für
eine telemedizinische Betreuung
vorgerüstet.
            </div>

          </div>
      </div>

      </>
  </React.Fragment>
    )
  }
}

export default ServiceNew
