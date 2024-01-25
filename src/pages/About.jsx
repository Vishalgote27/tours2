import React from 'react'
import Newsletter from '../shared/Newsletter'
import Gallery from '../shared/Gallery'
import Subtitle from '../shared/Subtitle'

const About = () => {
  return <>
  <section>
  <div className="container">
    <div className="row">
      <div className="col-sm-6">
        <div className='experience_content'>
          <Subtitle subtitle={'Experience'}/>
          <h2>With our all experience <br /> we will serve you</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="counter_wrapper d-flex align-items-center gap-5">
          <div className="counter_box">
            <span>12k+</span>
            <h6>Successful Trip</h6>
          </div>
          <div className="counter_box">
            <span>2k+</span>
            <h6>Regular Clients</h6>
          </div>
          <div className="counter_box">
            <span>15</span>
            <h6>Years Experience</h6>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="experience_img">
          <img height={300} width={300}  className='img-fluid rounded-5 border border-warning' src="https://images.unsplash.com/photo-1605333609697-835e68f6b45b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
  <Gallery/>
  <Newsletter/>
  </>
}

export default About