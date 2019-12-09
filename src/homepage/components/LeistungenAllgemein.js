import React from "react";
import { IconContext } from "react-icons";
import { FaEnvelope, FaConciergeBell, FaKey, FaRegClock, FaInfoCircle } from 'react-icons/fa';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';


class LeistungenAllgemein extends React.Component {
  render () {
    return(
      <React.Fragment>
      <>
      <div className="angebote">
      {/*<div style={{paddingTop:'50px'}}><h2 style={{fontSize:'30px', color:'#000'}}>Wie Ihnen die <i>"Residenz Vier Jahreszeiten"</i> <br />das Leben erleichtert </h2></div>*/}
      <div className="w-100 flex no-flex" style={{width:'80%', marginLeft:'auto', marginRight:'auto', padding:'80px 0px 80px 0px'}}>



          <div className="boxService boxServiceallgemeineLeistungen"  style={{textAlign:'center', margin:'5px', width:'100%'}}>
            <IconContext.Provider value={{ color: "fff", size:"3em", className: "iconService" }}>
            <div>
              <FaEnvelope /> <br/>
              <h4 style={{margin:'0px', fontSize:'20px', color:'#fff'}}>Postservice</h4>
              <br/>(ab 2021 vor Ort – zunächst via Pflegedienst)<span style={{paddingLeft:'10px'}} />

              </div>
              </IconContext.Provider>
              <div style={{marginTop:'20px'}}>
              <Tooltip
               position="left"
               trigger="mouseenter"
               theme="light"
               animation="fade"
               arrow="true"
               interactive="true"

               html=<div style={{padding:'15px 10px', fontFamily:'roboto', textAlign:'left' }}>Als Residenzbewohner haben Sie einen
               eigenen Briefkasten. Pakete nehmen wir an der Rezeption im Pförtnerhäuschen gern für Sie entgegen. Auf Wunsch,
               etwa im Urlaub, können Sie Post an der Rezeption sammeln lassen. Außerdem bekommen Sie hier Postkarten vom Objekt,
               Briefmarken und Fotokopien in kleiner Auflage.</div>
              ><sup><IconContext.Provider value={{ color: "fff", size:"3em", className: "iconService" }}>
              <FaInfoCircle />
              </IconContext.Provider></sup></Tooltip>
              </div>
          </div>

          <div className="boxService boxServiceallgemeineLeistungen"  style={{textAlign:'center', margin:'5px', width:'100%'}}>
            <IconContext.Provider value={{ color: "fff", size:"3em", className: "iconService" }}>
            <div>
              <FaConciergeBell /> <br/>
              <h4 style={{margin:'0px', fontSize:'20px', color:'#fff'}}>Concierge-Service </h4>
              <br/>(ab 2021 vor Ort – zunächst via Pflegedienst)<span style={{paddingLeft:'10px'}} />
          </div>
          </IconContext.Provider>
          <div style={{marginTop:'20px'}}>

          <Tooltip
           position="left"
           trigger="mouseenter"
           theme="light"
           animation="fade"
           arrow="true"
           interactive="true"
           html=<div style={{padding:'15px 10px', fontFamily:'roboto', textAlign:'left' }}>Die Mitarbeiter der Rezeption heißen Sie
           jeden Tag herzlich Willkommen und erfüllen
           Ihre Wünsche. Wir machen für Sie Termine aller Art ab, stehen für jede Frage zur Verfügung und sind Ihr Ansprechpartner
           für welche Belange auch immer.</div>
          ><sup><IconContext.Provider value={{ color: "fff", size:"3em", className: "iconService" }}>
          <FaInfoCircle />
          </IconContext.Provider></sup></Tooltip>
          </div>

          </div>

          <div className="boxService boxServiceallgemeineLeistungen" style={{textAlign:'center', margin:'5px', width:'100%'}}>
            <IconContext.Provider value={{ color: "fff", size:"3em", className: "iconService" }}>
            <div>
              <FaKey /> <br/>
              <h4 style={{margin:'0px', fontSize:'20px', color:'#fff'}}>Zutrittskontrolle</h4>
              <br/>(ab 2021 nur über das Pförtnerhaus)<span style={{paddingLeft:'10px'}} />
              </div>
              </IconContext.Provider>
              <div style={{marginTop:'35px'}}>
              <IconContext.Provider value={{ color: "#fff", size:"3em", className: "iconMobile" }}>
              <Tooltip
               position="left"
               trigger="mouseenter"
               theme="light"
               animation="fade"
               arrow="true"
               interactive="true"
               html=<div style={{padding:'15px 10px', fontFamily:'roboto', textAlign:'left' }}>Gäste des Hauses müssen sich immer erst anmelden, bevor Sie unsere Residenz betreten dürfen. So gewährleisten wir Ihre Privatsphäre und halten den Besucherverkehr kontrolliert. Ein Zugang zum Wohnbereich ist zudem nur mit dem Schlüssel der Wohnung möglich.</div>
              ><sup><FaInfoCircle /></sup></Tooltip></IconContext.Provider>
              </div>
          </div>

          <div className="boxService boxServiceallgemeineLeistungen" style={{textAlign:'center', margin:'5px', width:'100%'}}>
            <IconContext.Provider value={{ color: "fff", size:"3em", className: "iconService" }}>
            <div>
              <FaRegClock /> <br/>
              <h4 style={{margin:'0px', fontSize:'20px', color:'#fff'}}>24h Service </h4>
              <br/>(ab 2021. Aktuell werktags über Pflegedienst von 7:00 - 15:00h)<span style={{paddingLeft:'10px'}} />
              </div>
              </IconContext.Provider>
              <div style={{marginTop:'20px'}}>
              <IconContext.Provider value={{ color: "#fff", size:"3em", className: "iconMobile" }}>
              <Tooltip
               position="left"
               trigger="mouseenter"
               theme="light"
               animation="fade"
               arrow="true"
               interactive="true"
               html=<div style={{padding:'15px 10px', fontFamily:'roboto', textAlign:'left' }}>Die Rezeption im Pförtnerhäuschen ist das Dienstleistungszentrum der Residenz und das Herzstück des Hauses. Sie ist montags bis sonntags von spätestens 7:00 Uhr bis um 16:00 (19:00) Uhr besetzt und darüber hinaus gibt es (in der Nacht) einen Notfallkontakt</div>
              ><sup><FaInfoCircle /></sup></Tooltip></IconContext.Provider>
              </div>
          </div>



      </div>
      </div>

</>
  </React.Fragment>
    )
  }
}

export default LeistungenAllgemein
