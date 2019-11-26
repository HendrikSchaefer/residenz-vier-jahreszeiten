import React from "react"
import Layout from '../common/layouts';
import { graphql, Link } from 'gatsby';
import Seo from '../common/seo';
import Anfrage from '../homepage/components/Anfrage';
import Philosophie from '../homepage/components/Philosophie';
import Netzwerk from '../homepage/components/Netzwerk';
import Impressionen from '../homepage/components/Impressionen';
import { FaServicestack } from 'react-icons/fa';
import imperial from '../img/imperial.png';

export default ({ data }) => {

  let post = data.featuredPost.edges[0].node;
  return (
    <Layout>
      <Seo
        title={"Residenz Vier Jahreszeiten - Seniorenwohnanlage Schönebeck"}
        description={data.site.siteMetadata.description} />

      <div className="HeroSection">


      <div className="heroContent" >
      <div style={{width:'85%', marginLeft:'auto', marginRight:'auto', backgroundColor:'rgb(255, 255, 255, 0.95)', padding:'20px 5% 140px 5%', borderRadius:'2px 2px 70px 70px '}}>

      <h1 className="title serif">Residenz Vier Jahreszeiten</h1>
      <h2 className="" style={{fontSize:'20px', fontFamily: 'SilkType, serif !important', letterSpacing:'2px'}}>  <b>Gepflegtes Wohnen in Schönebeck. Pflege & Betreuung, fast wie im Hotel.</b></h2>
      <div  className="konzept">
        <div className="lh-copy lh-copy  serif mw8 center">
        Die traditionsreiche weithin sichtbare, ehemalige „Kukirolfabrik“ und
         spätere Berufschule „Paul Illhardt“ in <b>Bad Salzelmen</b> erwacht zu neuer Blüte. Als hochwertige Seniorenresidenz, mit individuellen Wohnungen,
         für selbstbestimmte Senioren, die Pfelge benötigen. <br />
        Für <b>Sie</b> haben wir es uns zur Aufgabe gemacht, dass <b>Sie</b> mit <b>SICHERHEIT & KOMFORT</b> so lange wie möglich selbstbestimmt und eigenständig leben können. Für <b>Sie</b> organisieren wir im Bedarfsfall eine individuelle, umfassend medizinisch-therapeutisch-pflegerische Betreuung in der Residenz.

        </div>
        </div>
        {/*<div  className="konzept2">
          <div className="lh-copy lh-copy  serif mw8 center">
          Stilvolle, komfortable Appartements und Gemeinschaftsbereiche für IHR selbstbestimmtes Leben
          Ob alleinstehend oder als Paar, unabhängig oder auf Unterstützung angewiesen: Unsere individuellen Appartements und alle Gemeinschaftsbereiche, innen und außen, sind durchdacht und so flexibel wie Ihr Leben. Generell sollte Ihr neues Zuhause nämlich vor allem eines sein – ein Rückzugsort, an dem Sie sich wohlfühlen.
          </div>
          </div>*/}

        </div>
        <div style={{borderRadius:'20px 20px 0px 0px', backgroundColor:'#4d4d4d', marginTop:'-100px', fontSize:'30px', padding:'50px 50px 30px 50px', color:'white', width:'85%', marginLeft:'auto',
        marginRight:'auto', textAlign:'center', fontWeight:'500', borderTop:'dashed 1px', letterSpacing:'2px'}}><img style={{marginLeft:'-15px'}} src={imperial} alt="border" /><br/>Stilvoll komfortable Appartements & Gemeinschaftsbereiche <br />für Ihr selbstbestimmtes Leben</div>

        <div style={{borderBottom:'dashed 1px', borderRadius:'0px 0px 20px 20px', marginBottom:'50px', backgroundColor:'rgba(77, 77, 77, 1)', width:'85%', marginLeft:'auto', marginRight:'auto', padding:'00px 0px 60px 0px', marginRight:'auto', marginLeft:'auto'}} class="w-100  flex justify-around items-center">

        <Link to="/#anfrage" style={{letterSpacing:'2px'}} className="mid-gray f6 no-underline light-green accent  dib-l"><FaServicestack /> Unsere Leistungen & Vorteile</Link>
        </div>
      </div>
</div>
{/*<div style={{backgroundColor:'#fafafa'}}>
<div className="flex w-100  flex justify-between items-center top-0 z-999" style={{width:'90%', marginLeft:'auto', marginRight:'auto', display:'flex', height:'250px'}}>
    <div className="bg-white box-internal-info"><h2 style={{fontSize:'24px'}}>Unsere Partner</h2>
    </div>
    <div className="bg-white box-internal-info"><h2 style={{fontSize:'24px'}}>Unsere Apartments</h2>
    </div>
</div></div>

      <Impressionen />}
      <div id="philosophie" style={{backgroundColor:'#f4dedf'}}>
      <Philosophie />
      </div>
      <Netzwerk />
      <div class="anfrage">
      <Anfrage />
      </div>*/}
    </Layout>
  )
}

export const query = graphql`
  query {
    featuredPost: allMarkdownRemark(
      limit: 1,
      sort: {order: DESC, fields: frontmatter___date},
      filter: {frontmatter: {type: {eq: "post"}}}) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    cards: allMarkdownRemark(
      skip: 1,
      limit: 3,
      sort: {order: DESC, fields: frontmatter___date},
      filter: {frontmatter: {type: {eq: "post"}}}) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`
