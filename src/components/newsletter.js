import React from 'react'

const newsletter = () => {
   return (
      <div className='newsletter'>
         <div className='newsletter__box'>
            <div className='newsletter__info'>
               <h3>Start mining now</h3>
               <p>Join now with CRAPPO to get the latest news and start mining now</p>
            </div>
            <form className='newsletter__form' >
               <input type="email" name="email" id="email" placeholder='Enter your email' />
               <button type='submit' className='btn btn--subscribe'>Subscribe</button>
            </form>
         </div>
      </div>
   )
}

export default newsletter