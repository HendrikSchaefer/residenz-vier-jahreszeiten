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
import HeroContentNew from '../homepage/components/HeroContentNew';
import AboutRVJ from '../homepage/components/AboutRVJ';
import CalltoActionStripe from '../homepage/components/CalltoActionStripe';
import Service from '../homepage/components/Service';

export default ({ data }) => {

  let post = data.featuredPost.edges[0].node;
  return (
    <Layout>
      <Seo
        title={"Residenz Vier Jahreszeiten - Seniorenwohnanlage Schönebeck"}
        description={data.site.siteMetadata.description} />

{/*<Impressionen/>*/}
<HeroContentNew />
<AboutRVJ />
<CalltoActionStripe />
<Service />
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
