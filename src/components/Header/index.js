import React from 'react'
import Logo from '../../img/logo.svg';
import './header.css'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={Logo} alt='optimustech' className='header__logo-img'/>
        OptimusTech
      </div>
      <div className='header__menu'>
        <a href='#' alt='Link para home' className='header__link'>Home</a>
        <a href='#' alt='Link para produtos' className='header__link'>Produtos</a>
        <a href='#' alt='Link para recursos' className='header__link'>Recursos</a>
        <a href='#' alt='Link para sobre nós' className='header__link'>Sobre Nós</a>
      </div>
      <div className='header__buttons'>
        <a href='#' className='header__buttons-login'>Entrar</a>
        <button type='button' className='header__buttons-signup'>Cadastrar</button>
      </div>
    </header>
  )
}
