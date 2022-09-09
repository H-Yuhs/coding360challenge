import React from 'react'
import Hero from './components/hero'
import Why from './components/why'
import Points from './components/whypoints'
import Features from './components/features';
import Footer from './components/footer.js'
import Navbar from './components/navbar'
import Newsletter from './components/newsletter';
const home = () => {
   return (
      <div className='wrapper'>
         <Navbar />
         <Hero />
         <Why />
         <Points />
         <Features />
         <Newsletter />
         <Footer />
      </div>
   )
}

export default home