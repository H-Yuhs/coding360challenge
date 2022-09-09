import React from 'react'
import Bitcoin from '../assets/bitcon.png'
import Litecoin from '../assets/litecoin.png'
import Ethereum from '../assets/ethereum.png'
import Arrow from '../assets/arrow.svg'
const whypoints = () => {
   return (
      <section className='why__points'>
         <div className='why__points--items reference'>
            <div className='points--header btm--padding'>
               <h2>Check how much you can earn</h2>
               <p>Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className='card'>
               <div className='card--calculate'>
                  <form className='card__form'>
                     <input type="number" name="type" id="type" placeholder='Enter your hash rate' />
                     <select name="TH/s" id="currency">
                        <option value="one">TH/s</option>
                        <option value="two">UH/s</option>
                        <option value="three">VH/s</option>
                     </select>
                     <button className='btn btn--calc'>Calculate</button>
                  </form>
               </div>
               <div className='card--stat'>
                  <h4>ESTIMATED 24 HOUR REVENUE:</h4>
                  <p>0.055 130 59 ETH <span>($1275)</span> </p>
                  <p>Revenue will change based on mining difficulty and Ethereum price.</p>
               </div>
            </div>
         </div>

         <div className='why__points--items bg--white'>
            <div className='points--header'>
               <h2>Trade securely and market the high growth cryptocurrencies.</h2>
               <div className='crypto--card'>
                  <div className='ccard one'>
                     <img src={Bitcoin} alt="" />
                     <h3>Bitcoin <span>BTC</span></h3>
                     <p>Digital currency in which a record of transactions is maintained.</p>
                     <button className='btn btn--start'><p>Start mining</p><span className='arrow'><img src={Arrow} alt="arrow" /></span></button>
                  </div>
                  <div className='ccard two'>
                     <img src={Ethereum} alt="" />
                     <h3>Ethereum <span>ETH</span></h3>
                     <p>Blockchain technology to create and run decentralized digital applications.</p>
                     <button className='btn btn--start'><p>Start mining</p><span className='arrow'><img src={Arrow} alt="arrow" /></span></button>
                  </div>
                  <div className='ccard three'>
                     <img src={Litecoin} alt="" />
                     <h3>Litecoin <span>LTC</span></h3>
                     <p>Cryptocurrency that enables instant payments to anyone in the world.</p>
                     <button className='btn btn--start'><p>Start mining</p><span className='arrow'><img src={Arrow} alt="arrow" /></span></button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default whypoints