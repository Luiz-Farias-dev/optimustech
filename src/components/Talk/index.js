import React from 'react';
import './talk.css';
import Avatar from '../../img/Avatar.svg'

export default function Talk() {
  return (
    <section className='talk'>
      <div className='talk__container'>
        <p className='talk__title'>Veja o que nossos colaboradores falam sobre nós</p>
        <p className='talk__title-2'>OptimusTech se importa com a saúde dos seus colaboradores e<br/> sempre procura nos dar todo tipo de auxílio possível.</p>
        <img src={Avatar} alt="Foto de perfil da colaboradora" className='talk__avatar'/>
        <p className='talk__name'>Júlia Casto</p>
        <p className='talk__job'>Desenvolvedora Web</p>
      </div>
    </section>
  )
}
