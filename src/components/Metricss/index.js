import React from 'react';
import './metrics.css';

export default function Metrics() {
  const metrics = [
    {
      title: 'Projetos concluídos',
      number: '400+',
      content: 'Nós ajudamos a construir mais de 400 projetos incríveis.',
      id: 1
    },
    {
      title: 'Colaboradores',
      number: '100+',
      content: 'Temos mais de 100 colaboradores no nosso time que se preocupam com nossos clientes.',
      id: 2
    },
    {
      title: 'Downloads',
      number: '20k',
      content: 'Nossos projetos que estão disponíveis em lojas já foram baixados mais de 20.000 vezes.',
      id: 3
    },
    {
      title: 'Reviews 5 estrelas',
      number: '500+',
      content: 'Estamos orgulhosos de contar com mais de 500 reviews 5 estrelas em nossos produtos.',
      id: 4
    }
  ];
  return (
    <section className='metrics'>
      <div className='metrics__container'>
        {metrics.map(metric => (
        <div className='metric__map-container' key={metric.id}>
          <div className='metric__number'>
            {metric.number}
          </div>
          <div className='metric__title'>
            {metric.title}
          </div>
          <div className='metric__content'>
            {metric.content}
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}
