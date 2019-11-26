import React from "react";
import { Slide } from 'react-slideshow-image';
import imgage1 from '../../img/Residenz-Vier-Jahreszeiten-Villa.jpg';
import imgage2 from '../../img/Hauptgebaeude.jpg';
import imgage3 from '../../img/umgebung.jpg';
import imgage4 from '../../img/umgebung2.jpg';
import imgage5 from '../../img/umgebung3.jpg';
import imgage6 from '../../img/umgebung4.jpg';

const slideImages = [
  'Residenz-Vier-Jahreszeiten-Villa.jpg',
  'https://previews.dropbox.com/p/thumb/AAn1t1l27cODXCKwkxamGjdFalt9raY7Xmc3GGbBnqvMyO1nSnkmj9FbnEQa9rMvg2EB0EGsRT0ZiT1Ip8_QpSsC0k74pljosUadxndocOADgpKdy_hwrjE9sSxMf797fBsTCyJFePo-cD1lZ9zsUyLFNJJzL_995_rnjSM4dgAa9f_eyRdR5ZE7BJ4iDwo6-KHlGJ9d0SLktQf7anV405QjkDX5ZkyCzfGyqMpLN8uTnIGHuz_gonCcsK5wVO42xmTYXJ2dPxpDmdQiIcSY2nADZPTwr6Zb3RTeLZZSgn8DcWvklit2K2RkyjZwxy6trXr4oxO6OjySpI3H86UtLPpWMCwFVNUPHwDUzY3kAKxnDYJeXJvyI2Xa-6dfm6Txhz49wfAW7qpSaleTpdc5HVAtEXtAbnc11qWRRN2qwCnXBtVHsErs6PsmKLh9M5hOk2tClIaQs8jqnnVGOIWOO2ehTj0eqqGpq0Jl8wUnmY4df_dJXSpeG8U_aozZ9wk3WhUajxKvWXQAeWdmDHEYEH2U6fAqCNQizJbLuHwAdYB-Iw/p.jpeg?fv_content=true&size_mode=5',
  'https://previews.dropbox.com/p/thumb/AAlir_aLbai3I9okGPGpNVN4pXC2rzbB8q_66v6eTfPDZt8kUKX8j83iNKaU1BXkMQgYiEYeINVw89MsmmS_b3S5iOQwq7egTKM_qwz2x6avowtNFkkKyO_ZcBBDdNggaGDMDVcEKv7slhisdLg_jRLctyiTEv4Vtj7ABYlSwowjgYe6J6FTlXDrJokwMClUBGmPKbD16Cbi3IeuZJ9x5BUAf9BwbcqZtPWI5O90CkDaJekQXVylZLcYLtJDhEMfYflwvyT1_pCcDDPIFOmx890tJlyLah4R36pZ5QgGEcpgMBszGrpc5yhWOoEfGhLX7YUC5UhNGjynun_NHyMmWPwxVkYh0QTanYPqO5sR_ip_a5gHqhiNC4R3G5a4lxd9bujx-ou7UsXqmz50Otkw6dsGdLfn8in0dxLDGs0bKxR27V12SVjQoCcxjnB2cc2kYv1g0mXyGzq34uxcrXa0lQEJR7iQujC7okQ0gjFQWSknFuqf8p70TP3T4ilvgwphT0EzOq2sMl24R2zW779R3Y9BJTPRwJcj64kUpIiJaZK0-g/p.jpeg?fv_content=true&size_mode=5',
  'https://previews.dropbox.com/p/thumb/AAmxsSx46W67aAPxp1mJslghDHwtT1AqGmdA5G3CEy3c45LrBpNAQw3_w5cNBDMpCeA4o-FKpFb0gxjjoNarUW77Ju5hK-xAjavKFK220K1TNijjKpdhHlGB5vdnw-4x42mmdT1peWxR6xfF7sfU5sz_kzoXc1WqyCp4N-7AS8OU-l-pySSJ6r_Gb_Wznx48oot1KZkpPvIOex7sx1z9HWFhKWRmv2S24PE3cB17_M0BNvtY01VHF3Zr8E-vp6LmZr1NyEWyB_d-9N6EFmsSRjL49XiMHZdL6i1BDxBE6KzXpMuT-y1rKgVgG6CTLG1aPhas6g4zdEN5wiuSeKZVzpG30WCCO38srwP50pb2zc9DaX0YZ7RrUqnqUUVmB17HltsWIrYzN7mNZks_HXBeq_oUdM5QeWoc7YGxlfoGin_lj9bYdweRJhG6iloQfxuggl-Kz5N_Xr6yjWn_JFceD6_Y0hMfZf3356tsq3ul-CZxJUrGJNqfXmfvSvUrZI2hdOW3eOPaV4rG3P9964QrzULZTnLz3Ev2tzOXZRqkUzBwAA/p.jpeg?fv_content=true&size_mode=5',
  'https://previews.dropbox.com/p/thumb/AAm5nwd416-t5Ia6mVLkkvATQYrONx44pa5pb4K5wWB3IeaPfF_Q56Hm5A8qEvf_tUjQte97il4dSG4zpfymnP4gDxjrslnjw8us6r_fLGXrctZFv1JpgKAj1mjKghq86GirVQAzbECi3yj_-S2oPmfSyi7B5XDkSjxDRKz_yIyPGSlV5qO-qoxvabbTbFIt-Zz9hPjEdArcMUnHMXQJo_oPyxiYzmFPfUClNZjpKHyoCBQVLgSOdaYZ96no64LiLt2Ot5zowOLgkWxB9-GRyQqKCyzT7OJbZlbbwaH7ZUkGh9ZILPGm8mU8diO0Np2hCKbIGh__U8ePsCiZSE2bR3EJ3Wwbf34SmAoDuw-ZtLRdW-ekBg1wn6-esz-mLuQfDj1B1QT7jAoDzyCfOkreUvUxhB-7twvU_PX9_hWOQG-uIu-rY2tDBReDvvS09DBj5TLp44ygYyI4js7z1KwqalpC6u4YfPo0NdaOG4GZAQLrnQsym4CmcY2GSPPn4PWqFAfyYr9ohfp6R10zIXn4SimQ3C5TFDY-p6LZzbXwTpDLMA/p.jpeg?fv_content=true&size_mode=5',
  'https://previews.dropbox.com/p/thumb/AAlPXKgYj0Qb6E-RumM4voYEkCZdvgXGA_tcj1ubwB-sbKcL5ZPPjWQkQrhulFlg0dbm06Dcy2HSwEZGP5kT2V-o_HyjPr0EuBeHGoM1lJ-r3aF7bBpHHg7F7LrofWRlpjEcfeW8eBZ5SB1sjc_yqzeqJAJJmYa4oRkGR9GZEBID3QoBXQ8KfAnFAd8kxkq1lW6HLgkKC9m4LCpnv5p_DilMBhn_-99iwT28rCl2bIgnKSqJU3QIJh209J8mRKlPszGybl1H8VFysHqfL_tBlpcwF8sswWAFvtoGGEqQs_0FM9eNOjUlsgpl130aBYglF21Rrjw-97gBp7htMdJmaqxVBGMRG1f7KM2yw2h6A0edi8rTIpOIwaFIWKyX9z1w5dxNu84QSvGzHdCujOdTpPa9re9MrPwFCnz7g4aUMAemTTFpZ2T5ScfviPv8Q-s10sBnezsBBpocJ7aeWq0zZxPyK01fuc5s77AMy1e48B0R2bkaMdkSgoKytGKYEoSi2Nj39PFwib_D33ZEyOMTqKC_1dybecQsuKgh53Ind7LM6Q/p.jpeg?fv_content=true&size_mode=5',

];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  autoplay:false,

}

const Slideshow = () => {
    return (
<>
        <Slide {...properties}>

            <div>
            <img style={{'backgroundImage': `url(${imgage1})`, width:'100vw', height:'100vh', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}  />
            <div className="SlideCaption">Slide 1</div>
            </div>

          <div>
            <div style={{'backgroundImage': `url(${imgage2})`, width:'100vw', height:'100vh', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}} >

            </div>
          </div>
          <div>
            <div style={{'backgroundImage': `url(${imgage3})`, width:'100vw', height:'100vh', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}} >

            </div>
          </div>
          <div>
            <div style={{'backgroundImage': `url(${imgage4})`, width:'100vw', height:'100vh', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}} >
            </div>
          </div>
          <div>
            <div style={{'backgroundImage': `url(${imgage5})`, width:'100vw', height:'100vh', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}} >
            </div>
          </div>
          <div>
            <div style={{'backgroundImage': `url(${imgage6})`, width:'100vw', height:'100vh', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}} >
            </div>
          </div>
        </Slide>
        </>
    )
}

class Impressionen extends React.Component {
  render () {
    return(
      <React.Fragment>
<>

{/*<div style={{paddingTop:'50px', paddingBottom:'50px'}}>
  <h3 style={{textAlign:'center', fontSize:'30px'}}>Impressionen vom Gelände und der Umgebung</h3>
</div>*/}
<div style={{Height:'90vh', Width:'90vw'}}>

<Slideshow />


</div>






</>
  </React.Fragment>
    )
  }
}



export default Impressionen
