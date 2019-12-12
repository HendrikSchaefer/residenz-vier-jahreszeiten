import React from "react"
import imgage1 from '../../img/anfrage.jpg';
import agr from '../../img/agr.jpg';
import imgage3 from '../../img/agr2.jpg';
import pflege from '../../img/ambulanter-pflegedienst-vier-jahreszeiten-residenz-vier-jahreszeiten.jpg'
import hat from '../../img/hat-residenz.jpg'
import imperial from '../../img/imperial.png';
import imperialdark from '../../img/imperial-dark.png'
import { Link } from 'gatsby';;


class Philosophie extends React.Component {
  render () {
    return(
      <React.Fragment>
      <>

      <div className="serviceStripe">
<h2 style={{fontSize:'32px'}}><img style={{marginLeft:'-15px'}} src={imperialdark} alt="border" /><br/>Selbstbestimmt & aktiv leben</h2>
<p style={{textAlign:'center', fontSize:'22px'}} className="mobileText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut <br /> labore et dolore magna aliquyam</p>
      <div className="notMobile">
        <div style={{marginLeft:'auto', marginRight:'auto'}} className="flex w-80 vh-11 pv3  justify-between items-center">
        <div className="boxServiceOuter">
          <div className="boxService">
          <img src={agr}  style={{borderRadius:'5px'}} alt="Residez Vier Jahreszeiten"/>
        <h3 style={{fontSize:'20px', fontWeight:'300'}}>Individuelles Gesundheits- und Bewegungsangebot</h3>
        {/*<Link to="/" style={{letterSpacing:'1px', fontSize:'15px !important'}} className="serif ttu mid-gray f6 no-underline light-green accent dn dib-l">Mobilisierung</Link>*/}
          </div>
          </div>
          <div className="boxServiceOuter active">
          <div className="boxService"><img src={pflege} style={{borderRadius:'5px'}} alt="Residez Vier Jahreszeiten" />
          <h3 style={{fontSize:'20px', fontWeight:'300'}}>Ihr umfassendes Pflegeangebot</h3>
        {/*<Link to="/" style={{letterSpacing:'1px', fontSize:'15px !important'}} className="serif ttu mid-gray f6 no-underline light-green accent dn dib-l">Pflege</Link>*/}
          </div>
          </div>
          <div className="boxServiceOuter">
          <div className="boxService">
          <img src={hat} style={{borderRadius:'5px'}} alt="Residez Vier Jahreszeiten" />
          <h3 style={{fontSize:'20px', fontWeight:'300'}}>Ihre hausärztliche Versorgung</h3>
        {/*  <Link to="/" style={{letterSpacing:'1px', fontSize:'15px !important'}} className="serif ttu mid-gray f6 no-underline light-green accent dn dib-l">Hausarzt</Link>*/}
          </div>
          </div>
        </div>
      </div>

      <div className="mobile">
        <div style={{marginLeft:'auto', marginRight:'auto'}} className=" w-100 vh-11 pv3  items-center">
        <div className="boxServiceOuter">
          <div className="boxService">
          <img src={agr}  style={{borderRadius:'5px'}} alt="Residez Vier Jahreszeiten"/>
        <h3 style={{fontSize:'20px', fontWeight:'300'}}>Individuelles Gesundheits- und Bewegungsangebot</h3>
        <Link to="/" style={{letterSpacing:'1px', fontSize:'15px !important'}} className="serif ttu mid-gray f6 no-underline light-green accent  dib-l">Mobilisierung</Link>
          </div>
          </div>
          <div className="boxServiceOuter active">
          <div className="boxService"><img src={pflege} style={{borderRadius:'5px'}} alt="Residez Vier Jahreszeiten" />
          <h3 style={{fontSize:'20px', fontWeight:'300'}}>Ihr umfassendes Pflegeangebot</h3>
        <Link to="/" style={{letterSpacing:'1px', fontSize:'15px !important'}} className="serif ttu mid-gray f6 no-underline light-green accent  dib-l">Pflege</Link>
          </div>
          </div>
          <div className="boxServiceOuter">
          <div className="boxService">
          <img src={hat} style={{borderRadius:'5px'}} alt="Residez Vier Jahreszeiten" />
          <h3 style={{fontSize:'20px', fontWeight:'300'}}>Ihre hausärztliche Versorgung</h3>
          <Link to="/" style={{letterSpacing:'1px', fontSize:'15px !important'}} className="serif ttu mid-gray f6 no-underline light-green accent  dib-l">Hausarzt</Link>
          </div>
          </div>
        </div>
      </div>

</div>



</>
  </React.Fragment>
    )
  }
}

export default Philosophie
