import React from 'react';
import Group from '../../img/group.svg'
import './talent.css';

export default function Talent() {
  return (
    <section className='talent'>
      <p className='talent__title'>Vagas abertas!</p>
      <p className='talent__title-2'>Estamos procurando por talentos</p>
      <p className='talent__content'>Somos uma equipe 100% remota com pessoas do Brasil inteiro.</p>
      <img src={Group} alt='imagem de um grupo em uma mesa' />
    </section>
  );
}
