import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import {
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import 'tachyons';
import CookieConsent from "react-cookie-consent";

function currentYear() {
  var d = new Date();
  var n = d.getFullYear();
  return n;
}


export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            mailChimpUrl
            pinterest
            facebook
            twitter
            youtube
            github
          }
        }
      }
    `}
    render={data => (
      <footer className="pa2 bg-white near-white pv5">
        <div className="flex flex-wrap justify-around w-100 mw9 center mb5">

          <div className="flex flex-column mid-gray">
            <span className="serif f5 tracked mb3 db"><b>Unsere Partner</b> </span>
            <a target="_blank" href="https://agrsbk.de/" className="mid-gray serif f5 tracked pv1 db">Ambulanter Geriatrischer Dienst</a>
            <a target="_blank" href="https://www.ambulanter-pflegedienst-vier-jahreszeiten.de/" className="mid-gray serif f5 tracked pv1 db">Ambulanter Pflegedienst Vier Jahreszeiten</a>
          </div>
          <div className="flex flex-column mid-gray kontaktBottom">
            <span className="serif f5 tracked mb3 db"><b>Kontakt</b> </span>
            <span className="mid-gray serif f5 tracked pv1 db"> Residenz Vier Jahreszeiten - Gepflegtes Wohnen mit Weitblick e.V.<br /></span>
            <span className="mid-gray serif f5 tracked pv1 db">Paul-Illhardt-Straße 6 <br /></span>
            <span className="mid-gray serif f5 tracked pv1 db">39218 Schönebeck/Elbe<br /><br /></span>
            <span className="mid-gray serif f5 tracked pv1 db"><FaPhone style={{fontSize:'13px'}}/> 03928 72 86 480<br /></span>
            <span className="mid-gray serif f5 tracked pv1 db"><FaEnvelope style={{fontSize:'13px'}}/> <a className="gray serif b ttu no-underline mv2" href="mailto:info@residenz-vier-jahres-zeiten.de">E-Mail</a></span></div>
          </div>


        <div style={{textAlign:'center'}} className="w-100 mw9 silver mid-gray center serif f6">
          <p>© {currentYear()} - Residenz Vier Jahreszeiten e.V. - Gepflegtes Wohnen mit Weitblick • <Link to="/impressum" className=" silver b ttu tracked sans-serif no-underline mv2">Impressum</Link></p>
        </div>
        <CookieConsent
    location="bottom"
    buttonText="Ja, verstanden."
    cookieName="myAwesomeCookieName2"
    style={{ background: "#2B373B" }}
    buttonStyle={{ color: "#fafafa", fontSize: "13px" }}
    expires={150}
>
    Um Ihnen ein bestmögliches Nutzungsverhalten zu ermöglichen, nutzt diese Internetseite Cookies.{" "}

</CookieConsent>
      </footer>
    )} />
)
