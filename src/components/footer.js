import React from 'react'
import Logo from '../assets/logo.svg'
import Master from '../assets/mastercard.png'
import Visa from '../assets/visa.png'
import Bitcoin from '../assets/bitcoin.png'
import Facebook from '../assets/facebook.png'
import Insta from '../assets/insta.png'
import Youtube from '../assets/youtube.png'
import Twitter from '../assets/twitter.png'
import LinkedIn from '../assets/Linkedin.png'
const footer = () => {
   return (
      <footer className='footer'>
         <div className='footer__info'>
            <img src={Logo} alt="logo" />
            <div className='footer__links quick'>
               <h3>Quick Links</h3>
               <li>Home</li>
               <li>Products</li>
               <li>About</li>
               <li>Features</li>
               <li>Contact</li>
            </div>
            <div className='footer__links resource'>
               <h3>Resources</h3>
               <li>Download Whitepapper</li>
               <li>Smart Token</li>
               <li> Blockchain Explorer</li>
               <li>Crypto API</li>
               <li>Interest</li>
            </div>

            <div className='footer__payment'>
               <h3>We accept following payment systems</h3>
               <div className='payment__cards'>
                  <img src={Visa} alt="" />
                  <img src={Master} alt="" />
                  <img src={Bitcoin} alt="" />
               </div>
            </div>
         </div>
         <div className='footer__end'>
            <p>&copy;2021 CRAPPO. All rights reserved</p>
            <div className='footer__socials'>
               <img src={Facebook} alt="" />
               <img src={Insta} alt="" />
               <img src={Youtube} alt="" />
               <img src={Twitter} alt="" />
               <img src={LinkedIn} alt="" />
            </div>
         </div>
      </footer>
   )
}

export default footer