import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image'
//import { graphql, Link } from 'gatsby';
//import Seo from '../common/seo';
import Helmet from 'react-helmet';
import BeforeAfterSlider from 'react-before-after-slider'



const before = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Gallet_clamshell_600x600_1.jpg'
   const after = 'https://upload.wikimedia.org/wikipedia/commons/2/21/Gallet_clamshell_600x600_7.jpg'

const SecondPage = () => (
  <Layout>
  <Helmet>
    <meta name="robots" content="noindex, nofollow" />
  </Helmet>
  <div id="horst">Moin</div>
  <BeforeAfterSlider
         before={before}
         after={after}
         width={1000}
         height={480}
         defaultProgress={0.8}
       />
  </Layout>
)

export default SecondPage
