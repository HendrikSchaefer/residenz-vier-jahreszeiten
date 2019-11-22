import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import Seo from '../common/seo';
import {
  FaCheck,
} from 'react-icons/fa';
import Anfrage from '../homepage/components/Anfrage';

export default ({props, data}) => (
  <Layout>
  <Helmet>
    <meta name="robots" content="index, follow" />
  </Helmet>
  <Seo
    title={"Apartments Residenz Vier Jahreszeiten"}
    description={"Unsere Apartments Redidenz Vier Jahreszeiten in Schönebeck sind Ihre Alternative zum klassischen betreuten Wohnen."} />
  <div className="relative">
      <Img fluid={data.banner.childImageSharp.fluid} />

    </div>
  <div className="bg-washed-red pv4 pa4 flex flex-column items-center">
    <h1 className="subh2 serif">Unsere Apartments und die Anlage</h1>
  </div>
  <div className="lh-copy f4 serif mw8 center pv5">
  <p className="apartmentsAnlage" style={{textAlign:'left'}}>Im ersten Bauabschnitt der aufwendigen Denkmalsanierung
entstehen in der ehemaligen Direktorenvilla, 13 Appartements für maximal
18 Bewohner. Alle Appartements sind über den Fahrstuhl erreichbar. Die Appartements sind alle sehr
individuell geschnitten und unterschiedlich groß. Sie haben jeweils eine eigene kleine Kochzeile und altengerechte
Duschbäder.  <br /> <br />

Zahlreiche Gemeinschaftsflächen im Gebäude und im Garten stehen allen Bewohnern
der Appartements zur Verfügung. Aufwendig gestaltete Außenanlagen sollen alle Bewohner ins „Grüne“ einladen.
Verschiedene Sitzgruppen, Grillplätze, Hochbeete, Wasserspiele – all das kann ganz individuell genutzt werden.
Tagesausflüge zu Veranstaltungen oder zu Wochenmärkten sind ebenso an der Tagesordnung
wie die Organisation Ihrer privaten Feier.
<br /> <br /> Auf Grundlage einer fachlich fundierten Pflegeberatung vereinbaren wir auf Wunsch
mit dem Bewohner der Apartments gerne auch eine ambulante Pflege und individuelle
hauswirtschaftliche Unterstützung. Alle Appartements sind für eine telemedizinische Betreuung vorgerüstet.
</p><br />
<div style={{backgroundColor:'#fafafa', padding:'40px', borderRadius:'20px'}}>
<h3 style={{textAlign:'center'}}>Alles Wichtige zu unseren ersten Apartments</h3>
<div className="apartmentsFacts">
<FaCheck style={{fontSize:'17px', marginRight:'10px'}}/> 13 Apartments<br/>
<FaCheck style={{fontSize:'17px', marginRight:'10px'}}/> Für maximal 18 Bewohner<br/>
<FaCheck style={{fontSize:'17px', marginRight:'10px'}}/> Individuell geschnitten<br/>
<FaCheck style={{fontSize:'17px', marginRight:'10px'}}/> Fahrstuhl<br/>
<FaCheck style={{fontSize:'17px', marginRight:'10px'}}/> Kochzeile<br/>
<FaCheck style={{fontSize:'17px', marginRight:'10px'}}/> altengerechte Duschbäder<br/>
<FaCheck style={{fontSize:'17px', marginRight:'10px'}}/> Zahlreiche Gemeinschaftsflächen<br/>
<FaCheck style={{fontSize:'17px', marginRight:'10px'}}/> Aufwendig gestaltete Außenanlagen<br/>
<FaCheck style={{fontSize:'17px', marginRight:'10px'}}/> Sitzgruppen, Grillplätze, Hochbeete, Wasserspiele<br/>
<FaCheck style={{fontSize:'17px', marginRight:'10px'}}/> Organisation Ihrer privaten Feier<br/>
<FaCheck style={{fontSize:'17px', marginRight:'10px'}}/> fachlich fundierten Pflegeberatung<br/>
<FaCheck style={{fontSize:'17px', marginRight:'10px'}}/> Auf Wunsch ambulante Pflege<br/>
<FaCheck style={{fontSize:'17px', marginRight:'10px'}}/> Auf Wunsch hauswirtschaftliche Unterstützung<br/>
<FaCheck style={{fontSize:'17px', marginRight:'10px'}}/> Telemedizinische Betreuung vorgerüstet<br/>

</div>
</div>
  </div>
  <div class="anfrage">
  <Anfrage />
  </div>
  </Layout>
)

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    banner: file(relativePath: {eq: "img/impressum__banner.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 720, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
