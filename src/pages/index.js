import React from "react"
import Layout from '../common/layouts';
import { graphql, Link } from 'gatsby';
import Seo from '../common/seo';
import Anfrage from '../homepage/components/Anfrage';
import Philosophie from '../homepage/components/Philosophie';
import Netzwerk from '../homepage/components/Netzwerk';
import Impressionen from '../homepage/components/Impressionen';
import ImpressionenMobile from '../homepage/components/ImpressionenMobile';
import LeistungenAllgemein from '../homepage/components/LeistungenAllgemein';


export default ({ data }) => {

  let post = data.featuredPost.edges[0].node;
  return (
    <Layout>
      <Seo
        title={"Residenz Vier Jahreszeiten - Seniorenwohnanlage Schönebeck"}
        description={data.site.siteMetadata.description} />

<Impressionen/>

<div className="HeroContentMobile">
<div style={{width:'100%', marginLeft:'auto', marginRight:'auto', backgroundColor:'rgb(255, 255, 255, 0.95)', padding:'30px 30px 60px 30px', }}>
<div style={{border:'dashed 1px #ccc', borderRadius:'2px'}}>
<div style={{padding:'0px 0px 30px 0px'}}>
<h1 className="title serif">Residenz Vier Jahreszeiten</h1>
<h2 className="" style={{fontSize:'18px', fontFamily: 'SilkType, serif !important', letterSpacing:'0px'}}>  <b>Gepflegtes Wohnen in Schönebeck. Pflege & Betreuung, fast wie im Hotel.</b></h2>
<div  className="konzept">
  <div className="lh-copy lh-copy  serif mw8 center">
  Die traditionsreiche weithin sichtbare, ehemalige „Kukirolfabrik“ und
   spätere Berufschule „Paul Illhardt“ in <b>Bad Salzelmen</b> erwacht zu neuer Blüte.<br /> Als hochwertige Seniorenresidenz, mit individuellen Nutzungskonzepten,
   für selbstbestimmte Senioren, die Pfelge benötigen. <br />
  Für <b>Sie</b> haben wir es uns zur Aufgabe gemacht, dass <b>Sie</b> mit <b>SICHERHEIT & KOMFORT</b> so lange wie möglich selbstbestimmt und eigenständig leben können. Für <b>Sie</b> organisieren wir im Bedarfsfall eine individuelle, umfassend medizinisch-therapeutisch-pflegerische Betreuung in der Residenz.
  </div>
  </div>
  </div>
  </div>
  </div>
<ImpressionenMobile />
</div>
<Netzwerk />

{/*
<LeistungenAllgemein />
*/}

<div class="anfrage">
<Anfrage />
</div>




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
