import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
//import { graphql, Link } from 'gatsby';
//import Seo from '../common/seo';
import Helmet from 'react-helmet';


const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };


class Investors extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       username: 'Ekel Alfred',
       age: null,
     };
   }



      /* mySubmitHandler = (event) => {
        event.preventDefault();
        alert("Result " + this.state.username);
      } */

      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }

  render() {
    const {username, age} = this.state;
    function message() {
    if (this.state.age <= 30) {
      message = <p>{this.state.username}, du bist unter 30 ...</p>;
    } else  {
      message = <p>{this.state.username}, du bist über 30 ... </p>;
    }
    }

    return (
      <Layout>
      <form>

      <h1>{message()}</h1>
      <p>Your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='number'
        name='age'
        onChange={this.myChangeHandler}
      />
      </form>

      </Layout>

    );
  }
}



export default Investors
