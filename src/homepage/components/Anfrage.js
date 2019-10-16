import React from "react"



class Anfrage extends React.Component {
  render () {
    return(
      <React.Fragment>
<>
      <div className="pa2 pv5 flex-wrap serif" style={{width:'80%', marginLeft:'auto', marginRight:'auto'}}><h3 className="subh2">Fragen & Kontakt</h3>
      <div style={{textAlign:'center', fontSize:'24px', lineHeight:'33px'}}>

        Sollten Sie Fragen zur Wohnanlage haben bzw. sich für eine Wohnung interessieren,<br /> schreiben Sie uns gerne.
</div>
<div style={{marginLeft:'auto', marginRight:'auto', display:'grid', width:'220px'}}>
  <a className="button-anfrage" href="mailto:info@residenz-vier-jahreszeiten.de">Anfrage</a></div>


      </div>
</>
  </React.Fragment>
    )
  }
}

export default Anfrage
