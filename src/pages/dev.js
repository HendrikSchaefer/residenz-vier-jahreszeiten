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
  <div className="lh-copy f4 serif mw8 center" style={{padding:'0px, 20px;'}}>
  <form name="contact" method="post">

    <div class="dt-ns dt--fixed-ns">
      <div class="dtc-ns  pv4" style={{paddingRight:'2%'}}>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label for="name">Ihr Name</label><br/>
        <input type="text" name="name"/>
      </p>

      </div>
      <div class="dtc-ns pv4" style={{paddingRight:'2%'}}>
      <p>
        <label for="email">Ihre E-Mail-Adresse</label><br/>
        <input type="email" name="email"/>
      </p>
      </div>
      <div class="dtc-ns pv4">
      <p>
        <label for="phone">Ihre Telefonnummer</label><br/>
        <input type="number" name="phone"/>
      </p>
      </div>
      </div>

      <p>
        <label for="message">Ihre Nachricht</label><br />
        <textarea name="message"></textarea>
      </p>
      <p>
        <button className="button-anfrage" type="submit">Absenden</button>
      </p>



       </form>
  </div>
  </Layout>
)

export default SecondPage
