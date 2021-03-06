import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { FiMenu } from 'react-icons/fi';
import '../styles/custom.tachyons.css';
import logo from './../../img/logo.png';



const MultiLink = (props) => {
  const internal = /^\/(?!\/)/.test(props.to);
  let result;
  if (internal) {
    result = (<Link to={props.to} className={props.className}>{props.children}</Link>)
  } else {
    result = (<a href={props.to} className={props.className}>{props.children}</a>)
  }
  return result;
}

const SliderMenu = (props) => {
  // Prevents a flash of visible menu items when the entrance is triggered
  let extraClasses;
  if (props.active === null) {
    extraClasses = " dn";
  } else {
    extraClasses = (props.active ? " fadeIn" : " fadeOut");
  }
  return (
    <>
    <div
      className={
        "flex flex-column justify-top items-center bg-washed-red fixed top z-max w-100 ease" + (props.active ? " vh-93" : " h0")
      }>
      <Link
        to="/"
        className={"display ttu tracked dark-gray f6 no-underline menu__item pv5" + extraClasses}
      >{props.siteTitle}
      </Link>
      {props.extraLinks.map(navLink => (
        <MultiLink
          to={navLink.to}
          className={"sans-serif  light-gray f4 no-underline menu__item pv3" + extraClasses}
        >{navLink.name}
        </MultiLink>
      ))}
      {/*<Link
        to="/about"
        className={"sans-serif ttu mid-gray f5 no-underline menu__item pv3" + extraClasses}
      >About</Link>*/}
    </div>
    </>
  )
}


export default class Navbar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // Null rather than false to check for initialization
      menuToggle: null,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  };

  toggleMenu(event) {
    this.setState({
      menuToggle: !this.state.menuToggle,
    })
  };

  render () {
    return (
      <StaticQuery
        query={graphql`
        query {
          site {
            siteMetadata {
              navbarLinks {
                to
                name
              }
              siteTitle: title
              mailChimpUrl
            }
          }
        }
      `}
      render={data => (
        <>{/*<Ankundigung />*/}
        <React.Fragment>
          <div
            className="bg-white flex w-100 vh-11 pv3 flex justify-between items-center top-0 z-999  b--light-gray"
            style={{/*position: "sticky"*/ opacity:"0.98", borderBottom: "1px dashed #ccc"}}>
            <div className="w-100 mw12 flex justify-between justify-around-l items-center ph4 pa2-ns">
              <button
                className="ttu tracked dark-gray f4 no-underline bn bg-transparent pointer"
                onClick={this.toggleMenu}>
                <div className="flex"><div><FiMenu  /></div><div><span className="menuTextButton">Menü</span></div></div>
              </button>
              <Link to="/" className="display ttu tracked dark-gray f3 no-underline"><img src={logo} alt="Logo" className="logo" /></Link>
              {/*<Link to="/" className="sans-serif ttu mid-gray menuItems no-underline dn dib-l">Startseite</Link>*/}
              {/*data.site.siteMetadata.navbarLinks.map(navLink => (
                <MultiLink to={navLink.to} className="sans-serif ttu mid-gray menuItems no-underline dn dib-l">{navLink.name}</MultiLink>
              ))*/}
            </div>
            <div className="dn w-100 mw6 flex-l justify-around items-center top-0 z-999" >

              <span className="sans-serif mid-gray dn dib-l"></span>
              <Link to="/#anfrage" style={{letterSpacing:'1px'}} className="serif ttu mid-gray f6 no-underline light-green accent dn dib-l">Kostenlos informieren</Link>
            </div>

          </div>

          <SliderMenu
            active={this.state.menuToggle}
            extraLinks={data.site.siteMetadata.navbarLinks}
            />
        </React.Fragment>
</>
      )} />
    )
  }
}
