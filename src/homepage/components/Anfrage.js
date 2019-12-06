import React from "react"



class Anfrage extends React.Component {
  render () {
    return(
      <React.Fragment>
<>
<div id="anfrage" className="lh-copy f4 serif mw8 center" style={{paddingLeft:'20px', paddingRight:'20px'}}>
<h3 class="white" style={{textAlign:'center', paddingTop:'40px'}}>Stellen Sie uns Ihre Fragen!</h3>
<form name="contact" method="post" action="/success/">

  <div class="dt-ns dt--fixed-ns">
    <div class="dtc-ns pv2" style={{paddingRight:'3%'}}>
    <input type="hidden" name="form-name" value="contact" />
    <p>
      <label class="white" for="name">Ihr Name</label><br/>
      <input type="text" name="name"/>
    </p>

    </div>
    <div class="dtc-ns pv2" style={{paddingRight:'3%'}}>
    <p>
      <label class="white" for="email">Ihre E-Mail-Adresse</label><br/>
      <input type="email" name="email"/>
    </p>
    </div>
    <div class="dtc-ns pv2">
    <p>
      <label class="white" for="phone">Ihre Telefonnummer</label><br/>
      <input type="number" name="phone"/>
    </p>
    </div>
    </div>

    <p style={{marginTop:'0px'}}>
      <label class="white" for="message">Ihre Nachricht</label><br />
      <textarea name="message"></textarea>
    </p>
    <p style={{textAlign:'center'}}>
      <button className="button-anfrage" type="submit"><b>Kostenlos anfragen</b></button>
    </p>



     </form>
</div>
</>
  </React.Fragment>
    )
  }
}

export default Anfrage
