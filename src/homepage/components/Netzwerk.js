import React from "react"
import imgage1 from '../../img/anfrage.jpg';
import imgage2 from '../../img/agr.jpg';
import imgage3 from '../../img/agr2.jpg';


class Philosophie extends React.Component {
  render () {
    return(
      <React.Fragment>
<><h2 className="serif subh2">Unsere starken Partner</h2>
      <div className="pa2 pv5 flex-wrap serif partner">
        <div style={{display:'inline-flex'}} className="konzept">
            <div className="lh-copy lh-copy f4 serif mw8 center" style={{textAlign:'center'}}>
                  <img src={imgage1} className="img-ambulant" /><h3 style={{fontSize:'24px'}}>Ambulanter Pflegedienst "Vier Jahreszeiten"</h3>Wir konnten den bereits im Objekt befindlichen<br />
                  <a style={{textDecoration:'none', color:'#ab0937'}} target="_blank" href="https://www.ambulanter-pflegedienst-vier-jahreszeiten.de/">ambulanten Pflegedienst „Vier Jahreszeiten“ GmbH</a> für die ambulante Versorgung unserer
                  Bewohner gewinnen.<br/><br/> Der Pflegedienst „Vier Jahreszeiten“ betreut derzeit über 100 Mandanten und hat liebevolle und
                  sehr engagierte Mitarbeiter die auch unseren Bewohnern ein Lächeln bringen werden!
            </div>
        </div>
      </div>
      <div className="pa2 pv5 flex-wrap serif partner" style={{marginBottom:'50px'}}>
        <div style={{display:'inline-flex'}} className="konzept">
            <div className="lh-copy lh-copy f4 serif mw8 center partner-agr" style={{textAlign:'center'}}>
                  <h3 style={{fontSize:'24px'}}>Ambulanter Geriatrischer Senioren-Rehakomplex</h3>
                      Das auf Altersmedizin spezialisierte Team, bestehend aus geriatrisch geschulten Ärzten,
                      Ergotherapie, Logopädie, Physiotherapie und Pflegekräften, erstellt für jeden Patienten einen individuellen und abgestimmten
                      Therapieplan. Entscheidend sind dabei die Behandlungsziele und der Zustand
                      des Patienten. Durch die Bündelung des multiprofessionellen Teams unter einem Dach
                      ist es möglich, dass der Patient täglich zwei bis drei Therapieeinheiten pro Tag erhält, die es
                      benötigt, um zeitnah wieder fit zu sein und allein zuhause zurecht zu kommen. Auch Patienten
                      mit schwersten Bewegungseinschränkungen können ein aktives Ganzkörpertraining im
                      AGR absolvieren. Ärzte und Therapeuten sorgen dafür, dass jeder Patient Erfolge zu verzeichnen
                      hat.
                  <img src={imgage2} className="img-agr" /><img src={imgage3} className="img-agr2" />
            </div>
        </div>
      </div>

</>
  </React.Fragment>
    )
  }
}

export default Philosophie
