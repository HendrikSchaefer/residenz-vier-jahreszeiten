import React from "react"
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import Anfrage from '../homepage/components/Anfrage';
import Philosophie from '../homepage/components/Philosophie';
import Netzwerk from '../homepage/components/Netzwerk';
import Impressionen from '../homepage/components/Impressionen';


export default ({ data }) => {

  let post = data.featuredPost.edges[0].node;
  return (
    <Layout>
      <Seo
        title={"Verein Vier Jahreszeiten"}
        description={data.site.siteMetadata.description} />
      <div className="HeroSection">
        <div><h1 className="title serif">Residenz Vier Jahreszeiten</h1><h2 className="serif"> - <i><b>Gepflegtes Wohnen mit Weitblick e.V.</b></i> - </h2></div>
        <div style={{width:'80%', marginLeft:'auto', marginRight:'auto', paddingTop:'20px'}}>
        <div  className="konzept">
          <div className="lh-copy lh-copy f4 serif mw8 center">
          Die traditionsreiche weithin sichtbare, ehemalige „Kukirolfabrik“ und
          spätere Berufschule „Paul Illhardt“ in <b>Bad Salzelmen</b> erwacht zu neuer Blüte. Tausende Einwohner Schönebecks und der Umgebung begannen hier ihre berufliche Ausbildung,
          später auch Umschulungen und beruflichen Qualifizierungen. Nun ziehen erstmals Bewohner ein. <br /><br /> Unser Verein <b><i>„Residenz Vier Jahreszeiten – Gepflegtes Wohnen
          mit Weitblick“</i></b> hat sich die Aufgabe gestellt, den Bewohnern ein hohes Maß an selbstbestimmter, sicherer Wohnlichkeit zu bieten.  <br /><b>Betreutes
          Wohnen neu definiert!</b> <br/>Gemeinsames Ziel ist Lebensfreude und Mobilisierung – keine Isolation im Alter. Gelebte Gemeinschaft mit vorhandener,
          gewahrter Privatsphäre. Leben fast wie in einem Hotel – so ist das Leben in unseren neuen vereinseigenen Appartements. Dafür hat der Verein „Vier Jahreszeiten“
          verlässliche Partner gewonnen. So sind gegebenenfalls ärztliche Betreuung, therapeutische Unterstützung und mögliche ambulante Pflege Grundlage, um die notwendige
          Sicherheit für ein umsorgtes eigenständiges Leben zu gewährleisten. Ein erfahrenes Netzwerk steht den Bewohnern zur Verfügung.
          </div>

          </div>
        </div>
      </div>
      <Impressionen />
      <div id="philosophie" style={{backgroundColor:'#fafafa'}}>
      <Philosophie />
      </div>
      <Netzwerk />
      {/*<Hero
        title={post.frontmatter.title}
        image={post.frontmatter.postImage.childImageSharp.fluid}
        to={post.frontmatter.slug}
        description={post.frontmatter.description} />
      <div className="flex flex-wrap center mw9 justify-around pb3">
        {data.cards.edges.map(({node}) => (
          <Card
            title={node.frontmatter.title}
            image={node.frontmatter.postImage.childImageSharp.fluid}
            to={node.frontmatter.slug}
            description={node.frontmatter.description} />
        ))}
      </div>

      <Bio />*/}
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
