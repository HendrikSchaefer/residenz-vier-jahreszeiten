import React from "react"
import imperialdark from '../../img/imperial-dark.png'
import dots from '../../img/dots.png'
import { FaServicestack } from 'react-icons/fa';
import { graphql, Link } from 'gatsby';
import imgage1 from '../../img/Residenz-Vier-Jahreszeiten-Villa.jpg';

class AboutRVJ extends React.Component {
  render () {
    return(
      <React.Fragment>
<>
<div class="sectionInfo">
    <div style={{maxWidth:'80%', marginLeft:'auto', marginRight:'auto'}}>
        <p style={{textAlign:'center'}}><img style={{marginLeft:'-15px', marginTop:'5%', marginBottom:'4%'}} src={imperialdark} alt="border" /><br />
        <span className="display subh2NewBlack">Zukunftsorientiertes </span><br />
        <span className="display subh2NewBlack">Wohn- & Pflegekonzept in Schönebeck</span></p>
        <p style={{textAlign:'center'}}><img style={{marginLeft:'-15px', marginTop:'5%', marginBottom:'2%'}} src={dots} alt="border" /></p>
    </div>
    <div class="aboutText" style={{maxWidth:'90%', marginLeft:'auto', marginRight:'auto'}}>
      <div class="customParagraph">
      <b>Große Nachfrage in der neuen Residenz „Vier Jahreszeiten“.</b><br/><br/>
Der Infotag war ein voller Erfolg!
Über 250 Interessierte informierten sich persönlich über
das einmalige „Rund-Um-Sorglos“-Nutzungskonzept in der
Region und das Gesamtvorhaben.
<br/><br/>
Innerhalb von 3 Tagen lagen für 80% der Appartements
Interessenbekundungen vor und Nutzungsvereinbarungen
konnten geschlossen werden. Lediglich zwei sehr schöne
Pärchenapartements sind noch frei. „Das Nutzungskonzept
kostet ja weniger als ein Leben im Pflegeheim und bietet dabei
ein absolutes Mehr an Wohn-Gemeinschaftsqualität“ meinten
viele der Interessenten.
<br/><br/>
Das umfassende und einmalige Nutzungs- und Umsorgungskonzept
mit gehobener Ausstattung überzeugte viele der Anwesenden,
die voll des Lobes waren. Die letzten Einbauküchen sind
montiert, Spiegelschränke im Bad und Gardinenleisten in den
Wohnräumen sind angebracht. Die ersten Mieter freuen sich, einziehen zu können.


      </div>
      <div class="customParagraph">
    <b>Ein Kauf von Appartements soll bald möglich sein.</b><br/><br/>
      Das Interesse während der Infotour, ein Appartement in dieser
      Anlage mit dem einmaligen Wohn- und Versorgungskonzept
      zu erwerben, war so groß, dass wir derzeit individuell die Möglichkeiten
      einer Beteiligung oder einer Kaufmöglichkeit prüfen
      können. <br/><br/>Viele Interessenten wollten sich von Ihrem Haus
      samt Grundstück trennen um „... die Belastung durch die eigene
      Immobilie los zu werden“.
<br/><br/>
      Immobilien, die zudem fast nie altersgerecht und ohne fremde
      Hilfe nicht mehr oder schwer zu bewirtschaften sind.
      Gern beraten wir Sie bei Interesse individuell und umfänglich
      über bestehende Möglichkeiten zu Ihrem Nutzen. Melden
      Sie sich schon für unseren zweiten Bauabschnitt an – auch hier
      liegen bereits zahlreiche Anmeldungen vor.
      </div>
    </div>
</div>

</>
  </React.Fragment>
    )
  }
}

export default AboutRVJ
