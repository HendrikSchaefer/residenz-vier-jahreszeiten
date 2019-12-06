import React from "react";
import { Fade } from 'react-slideshow-image';
import imgage1 from '../../img/Residenz-Vier-Jahreszeiten-Villa.jpg';
import imgage2 from '../../img/Hauptgebaeude.jpg';
import imgage3 from '../../img/umgebung.jpg';
import imgage4 from '../../img/umgebung2.jpg';
import imgage5 from '../../img/umgebung3.jpg';
import imgage6 from '../../img/umgebung4.jpg';
import HeroContent from './HeroContent';



const fadeProperties = {
  duration: 3000,
  transitionDuration: 1500,
  infinite: true,
  indicators: false,
  autoplay:true,
  arrows:false,

  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }

}

const Slideshow = () => {
    return (
<>
        <Fade {...fadeProperties}>

            <div style={{'backgroundImage': `url(${imgage5})`, width:'100vw', height:'50vh', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}} >
            </div>

            <div style={{'backgroundImage': `url(${imgage4})`, width:'100vw', height:'50vh', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}} >
            </div>

            <div style={{'backgroundImage': `url(${imgage3})`, width:'100vw', height:'50vh', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}} >
            </div>

            <div style={{'backgroundImage': `url(${imgage2})`, width:'100vw', height:'50vh', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}} >
            </div>
            <div style={{'backgroundImage': `url(${imgage1})`, width:'100vw', height:'50vh', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}} >
            </div>



        </Fade>


        </>
    )
}

class ImpressionenMobile extends React.Component {
  render () {
    return(
      <React.Fragment>
<>

{/*<div style={{paddingTop:'50px', paddingBottom:'50px'}}>
  <h3 style={{textAlign:'center', fontSize:'30px'}}>Impressionen vom Gelände und der Umgebung</h3>
</div>*/}


<Slideshow/>












</>
  </React.Fragment>
    )
  }
}



export default ImpressionenMobile
