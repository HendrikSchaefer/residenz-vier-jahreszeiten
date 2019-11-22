import React from "react"



class Anfrage extends React.Component {
  render () {
    return(
      <React.Fragment>
<>
<div id="anfrage" className="lh-copy f4 serif mw8 center" style={{paddingLeft:'20px', paddingRight:'20px'}}>
<h3 style={{textAlign:'center', paddingTop:'40px'}}>Kontaktieren Sie uns!</h3>
<form name="contact" method="post" action="/success/">

  <div class="dt-ns dt--fixed-ns">
    <div class="dtc-ns pv4" style={{paddingRight:'2%'}}>
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

    <p style={{marginTop:'-30px'}}>
      <label for="message">Ihre Nachricht</label><br />
      <textarea name="message"></textarea>
    </p>
    <p>
      <button className="button-anfrage" type="submit">Anfrage absenden</button>
    </p>



     </form>
</div>
</>
  </React.Fragment>
    )
  }
}

export default Anfrage
