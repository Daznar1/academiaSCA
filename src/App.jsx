import { useEffect, useState } from 'react'
import './App.css'
import { doc, setDoc } from "firebase/firestore";
import { db } from './firebase';
import backgroundVideo from './videoBackground.mp4'
import icon from './icon.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import logo from './logo.png'
import Marquee from "react-fast-marquee";



function App() {

  const [inputValue, setInputValue] = useState(null)
  const [dIcon, setDicon] = useState(icon)

  // Add a new document in collection "cities"
  async function writeData(e) {
    e.preventDefault()
    try{
      document.getElementById('iconImg').setAttribute('class','iconImg');
      setDicon(icon3)
      await setDoc(doc(db, "emails", inputValue), {
        email: inputValue,
      });


      setDicon(icon2)
      document.getElementById('iconImg').removeAttribute('class','iconImg');
      document.getElementById('submitButton').setAttribute('disabled', true)

    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    let email_regex_verification = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if (inputValue) {
      if (inputValue.match(email_regex_verification)) {
        document.getElementById('email').style.borderBottom = '2px solid white'
      } else {
        document.getElementById('email').style.borderBottom = '2px solid red'
      }
    }


  }, [inputValue])

  return (
    <div className='content'>

      <video autoPlay muted loop >
        <source src={backgroundVideo} type="video/mp4" />
      </video>



      <div id='logo'>
        <img width={'60px'} src={logo} alt="logo" />
      </div>

      <div className='info'>
        <h1>Quer receber as fotos por email?</h1>
        <p style={{fontSize: '13px'}}>Escreva o seu email e nós tratamos de enviar as fotos o quanto antes!</p>
        <form onSubmit={e => writeData(e)}>
          <input onBlur={e => e.currentTarget.style.borderBottom = '2px solid white'} style={{ outline: 'none' }} required onChange={e => setInputValue(e.currentTarget.value)} type="email" name="email" id="email" placeholder='Email' />
          <button id='submitButton'><img id='iconImg' width={'20px'} src={dIcon} /></button>
        </form>
      </div>


      <footer>
        <Marquee className='marqueeStyles' speed={150} autoFill={true}>
          <p>Novo website em breve!</p>
          <p style={{fontSize: '30px', opacity: 0.1}}>&#183;</p>
          <p>1º Prova Taça Norte</p>
          <p style={{fontSize: '30px', opacity: 0.1}}>&#183;</p>
        </Marquee>
      </footer>




    </div>
  )
}

export default App
