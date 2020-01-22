import React from "react"
import bgcta from '../../img/bgcta.jpg'
import { FaPhone } from 'react-icons/fa';
import { graphql, Link } from 'gatsby';


class CalltoActionStripe extends React.Component {
  render () {
    return(
      <React.Fragment>
<>
<div className="callToAction" style={{'backgroundImage': `url(${bgcta})`, width:'100vw', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'left center'}}>
    <div className="callToActionInner" style={{display:'flex', width:'85%', marginLeft:'auto', marginRight:'auto'}}>
        <div className="ctaLeft">
        <span class="ctaText display">Sind Sie betroffen und suchen eine Alternative zum „Heimplatz“?</span><br/><br/>
        <span style={{fontSize:'22px', color:'#ffffff', lineHeight:'1.5'}} className="display">Gern prüfen wir Ihre Möglichkeiten.<br />Rufen Sie uns an.</span>
        </div>
        <div className="ctaRight">
        <span style={{color:'#ffffff', lineHeight:'1.5'}} className="display phoneNumber"><FaPhone className="iconPhone" fontSize="34px" /><a style={{textDecoration:'none', color:'#ffffff', marginLeft:'15px'}} href="tel:039287286480">03928 72 86 480</a></span>
        </div>
    </div>

</div>

</>
  </React.Fragment>
    )
  }
}

export default CalltoActionStripe
