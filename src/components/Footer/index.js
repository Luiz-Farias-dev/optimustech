import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>Acompanhe as nossas oportunidades</p>
      <p className='footer__sub-title'>Seja o primeiro a saber quando novas vagas serão abertas!</p>
      <div className='footer__input-container'>
        <input type='text' placeholder='Seu e-mail'  className='footer__input'/>
        <button type='submit' className='footer__button'>Cadastrar</button>
      </div> 
      <p className='footer__copyright'>© 2022 OptimusTech. Todos os direitos reservados.</p>  
    </footer>
  )
}
