import React from 'react'
import ChartCard from '../assets/feature-1-img.png'
import PriceChart from '../assets/feature-2-img.png'
import CoinChart from '../assets/feature-3-img.png'

const features = () => {
   return (
      <section className='features'>
         <h2> Market sentiments, portfolio, and run the infrastructure of your choice</h2>
         <div className='features__list'>
            <div className='features__items'>
               <div className='features__info'>
                  <h3>Invest Smart</h3>
                  <p>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
                  <button className='btn btn--learn'>Learn More</button>
               </div>
               <div className='features__img'>
                  <img src={ChartCard} alt="" />
               </div>
            </div>
            <div className='features__items'>
               <div className='features__img'>
                  <img src={PriceChart} alt="" />
               </div>
               <div className='features__info'>
                  <h3>Detailed Statistics</h3>
                  <p>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
                  <button className='btn btn--learn'>Learn More</button>
               </div>
            </div>
            <div className='features__items'>
               <div className='features__info'>
                  <h3>Grow your profit and track your investments</h3>
                  <p>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
                  <button className='btn btn--learn'>Learn More</button>
               </div>
               <div className='features__img'>
                  <img src={CoinChart} alt="" />
               </div>
            </div>
         </div>
      </section>
   )
}

export default features