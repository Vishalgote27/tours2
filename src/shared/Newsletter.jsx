import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return <>
 <section className='newsletter'>
 <div className="container">
    <div className="row">
        <div className="col-sm-6">
            <div className="newsletter_content">
              <h2>Subscribe now to get useful travelling information</h2> 
              <div className='newsletter_input'>
                <input type="text"  placeholder='Enter your email'/>
                <button type="button" class="btn newsletter_btn">Subscribe</button>
                </div>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, dolor! Eaque non delectus similique! Suscipit sunt at nulla similique explicabo.</p>
                
            </div>
        </div>
        <div className="col-sm-6">
            <div className='newsletter_img'>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  </div>
 </section>
  </>
}

export default Newsletter