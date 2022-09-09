import React from 'react'
import Btc from '../assets/hero-img.png'
import Arrow from '../assets/arrow.svg'
const hero = () => {
   return (
      <section className='hero'>
         <div className='hero__info'>
            <div className='hero__pop-scroll'>
               <span>75% SAVE</span>
               <p>For the Black Friday weekend</p>
            </div>
            <div className="hero__heading">
               <h1>Fastest & secure platform to invest in crypto</h1>
               <p>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transaction</p>
               <button className='btn btn--try'>Try for FREE <span className='arrow'><img src={Arrow} alt="arrow" /></span></button>
            </div>
         </div>

         <img src={Btc} className="hero__btc-img" alt="hero-btc" />

      </section>
   )
}

export default hero