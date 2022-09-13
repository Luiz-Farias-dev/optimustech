import React from 'react';
import './vacancies.css';

export default function Vacancies() {
  const design = [
    {
      title: 'Design',
      vacancie: {
        title:'Product Designer',
        hour: 'Full-time',
        salary: 'Faixa salarial: R$7.000'
      },
      vacancie2: {
        title:'UX Designer',
        hour: 'Full-time',
        salary: 'Faixa salarial: R$6.000'
      }
    }
  ];

  const software = [
    {
      title: 'Desenvolvimento de Software',
      vacancie: {
        title:'Desenvolverdor(a) iOS',
        hour: 'Full-time',
        salary: 'Faixa salarial: R$8.000'
      },
      vacancie2: {
        title:'Desenvolvedor(a) Front-end',
        hour: 'Full-time',
        salary: 'Faixa salarial: R$7.000'
      },
      vacancie3: {
        title:'Desenvolvedor(a) Back-end',
        hour: 'Full-time',
        salary: 'Faixa salarial: R$8.000'
      }
    }
  ]

  return (
    <section className='vacancies'>
      {design.map((data, index) => (
        <div className='vacancies__container' key={index}>
          <p className='vacancies__title'>
            {data.title}
          </p>
          <div className='vacancies__box'>
            <p className='vacancies__box-title'>
              {data.vacancie.title}
            </p>
            <div className='vacancies_box-detail-container'>
              <p className='vacancies_box-detail'>
                {data.vacancie.hour}
              </p>
              <p className='vacancies_box-detail'>
                {data.vacancie.salary}
              </p>
            </div>
          </div>
          <div className='vacancies__box'>
            <p className='vacancies__box-title'>
              {data.vacancie2.title}
            </p>
            <div className='vacancies_box-detail-container'>
              <p className='vacancies_box-detail'>
                {data.vacancie2.hour}
              </p>
              <p className='vacancies_box-detail'>
                {data.vacancie2.salary}
              </p>
            </div>
          </div>
        </div>
      ))}
       {software.map((data, index) => (
        <div className='vacancies__container' key={index}>
          <p className='vacancies__title'>
            {data.title}
          </p>
          <div className='vacancies__box'>
            <p className='vacancies__box-title'>
              {data.vacancie.title}
            </p>
            <div className='vacancies_box-detail-container'>
              <p className='vacancies_box-detail'>
                {data.vacancie.hour}
              </p>
              <p className='vacancies_box-detail'>
                {data.vacancie.salary}
              </p>
            </div>
          </div>
          <div className='vacancies__box'>
            <p className='vacancies__box-title'>
              {data.vacancie2.title}
            </p>
            <div className='vacancies_box-detail-container'>
              <p className='vacancies_box-detail'>
                {data.vacancie2.hour}
              </p>
              <p className='vacancies_box-detail'>
                {data.vacancie2.salary}
              </p>
            </div>
          </div>
          <div className='vacancies__box'>
            <p className='vacancies__box-title'>
              {data.vacancie3.title}
            </p>
            <div className='vacancies_box-detail-container'>
              <p className='vacancies_box-detail'>
                {data.vacancie3.hour}
              </p>
              <p className='vacancies_box-detail'>
                {data.vacancie3.salary}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
