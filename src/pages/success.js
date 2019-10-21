import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
//import { graphql, Link } from 'gatsby';
//import Seo from '../common/seo';
import Helmet from 'react-helmet';


export default ({props, data}) => (
  <Layout>
  <Helmet>
    <meta name="robots" content="noindex, nofollow" />
  </Helmet>
  <div className="relative">
      <Img fluid={data.banner.childImageSharp.fluid} />

    </div>
  <div className="bg-washed-red pv5 flex flex-column items-center">
    <h1 className="db f1 display fw1">Vielen Dank für Ihre Nachricht</h1>
  </div>
  <div className="lh-copy f4 serif mw8 center">
  <p style={{textAlign:'center'}}>Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden. Vielen Dank!  </p>
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
