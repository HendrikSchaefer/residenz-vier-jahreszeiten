import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image'
//import { graphql, Link } from 'gatsby';
//import Seo from '../common/seo';
import Helmet from 'react-helmet';

const SecondPage = () => (
  <Layout>
  <Helmet>
    <meta name="robots" content="noindex, nofollow" />
  </Helmet>
  
  <div className="bg-washed-red pv5 flex flex-column items-center">
    <h1 className="db f1 display fw1">Development</h1>
  </div>
  <div className="lh-copy f4 serif mw8 center">
  <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>

  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  </div>
  </Layout>
)

export default SecondPage
