import React from 'react'
import Globe from '../assets/globe.png'
import WhyImg from '../assets/why-img.png'
const why = () => {
   return (
      <section className='why'>
         <article className='why__stats'>
            <div className='stat__item'>
               <div className='item__img'>
                  <img src={Globe} alt="" />
               </div>
               <div className='item__info'>
                  <h2>$30B</h2>
                  <p>Digital Currency Exchanged</p>
               </div>
            </div>
            <div className='stat__item'>
               <div className='item__img'>
                  <img src={Globe} alt="" />
               </div>
               <div className='item__info'>
                  <h2>10M+</h2>
                  <p>Trusted Wallets Investors</p>
               </div>
            </div>
            <div className='stat__item'>
               <div className='item__img'>
                  <img src={Globe} alt="" />
               </div>
               <div className='item__info'>
                  <h2>195</h2>
                  <p>Countries Supported</p>
               </div>
            </div>
         </article>
         <article className='why__info'>
            <img src={WhyImg} className='info__img' alt="Bitcoin miner sorta" />
            <div className='info__details'>
               <h2>Why you should choose CRAPPO</h2>
               <p>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
               <button className='btn btn--learn'>Learn More</button>
            </div>
         </article>
      </section>
   )
}

export default why