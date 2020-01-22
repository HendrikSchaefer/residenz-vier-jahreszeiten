import React from "react"
import imperial from './img/imperial.png';
import { FaServicestack } from 'react-icons/fa';
import { graphql, Link } from 'gatsby';
import imgage1 from '../../img/Residenz-Vier-Jahreszeiten-Villa.jpg';

class HeroContentNew extends React.Component {
  render () {
    return(
      <React.Fragment>
<>
<div class="jgTop" style={{'backgroundImage': `url(${imgage1})`, width:'100vw', height:'90vh', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'bottom center'}} >
<div class="flex" style={{maxWidth:'100%', marginLeft:'auto', marginRight:'auto', paddingTop:'10%'}}>
<div style={{backgroundColor:'white', width:'0%', height:'100vh'}}></div>
  <div className="heroHeadline"><h1 className="display shadow" style={{color:'white', fontSize:'90px', lineHeight:'1', marginBottom:'0px'}}>Residenz Vier<br /> Jahreszeiten</h1><br />
  <span className="display subh2New shadow">Gepflegtes Wohnen in Schönebeck.</span><br />
  <span className="display subh2New shadow">Pflege & Betreuung fast wie im Hotel.</span>
</div>
</div>
</div>
</>
  </React.Fragment>
    )
  }
}

export default HeroContentNew
