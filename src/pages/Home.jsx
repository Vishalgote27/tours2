import React from 'react'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import ServicesList from '../services/ServicesList'
import SearchBar from '../shared/SearchBar'
import Subtitle from '../shared/Subtitle'
import "../styles/home.css"
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'
import Gallery from '../shared/Gallery'
import TourCard from '../shared/TourCard'

const Home = () => {
  return <>
    <div className="container">
      {/* hero section start */}
      <section>
        <div className="container ">
          <div className="row">
            <div className="col-sm-6  ">
              <Subtitle subtitle={'Know Before You Go'} />
              <h1 className='pt-4'>Travelling opens the door to creating
                <span className="highlight"> memories</span>
              </h1>
              <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, id. Dolor rem sed sapiente perspiciatis ullam commodi ad libero nostrum reiciendis, autem modi id accusamus doloribus corporis fugit suscipit totam.</p>
            </div>
            <div className="col-sm-6">
              <div className='ms-4 d-flex gap-3  '>
                <div className="hero_img-box ">
                  <img height={600} className='img-fluid rounded-4 border border-1 border-warning' src="https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="hero_img-box mt-4">
                  <img height={100} className='img-fluid rounded-4 border border-1 border-warning' src="https://images.unsplash.com/photo-1512100254544-47340ba56b5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="hero_img-box mt-5">
                  <img className='img-fluid rounded-4 border border-1 border-warning' src="https://images.unsplash.com/photo-1553512313-64af79fdfe9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* hero section end */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h5 className='services_subtitle'>What we serve</h5>
              <h2 className='services_title'> We offer our best services</h2>
            </div>

            <ServicesList />
          </div>
        </div>
      </section>
      {/* featured tour section start */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mb-5">
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured_tour-title">Our featured tours</h2>
            </div>

          </div>
        </div>
        <div className="container">
          <div className="row">

            <div className="col-sm-12">

              <FeaturedTourList />
            </div>
          </div>
        </div>


      </section>

      {/* featured tour section end */}
      {/* experience section start */}

      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className='experience_content'>
                <Subtitle subtitle={'Experience'} />
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
                <img height={300} width={300} className='img-fluid border border-warning border-1 rounded-start rounded-5' src="https://images.unsplash.com/photo-1605333609697-835e68f6b45b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* experience section end */}
      {/* gallery section starts */}

      <section>
        <div className="container">
          <div className="row">
            <Subtitle subtitle={"Gallery"} />
            <h2 className='gallery_title'>Visit our customers tour galley</h2>
            <Gallery />
          </div>
        </div>
      </section>

      {/* gallery section end */}
      {/* testimonial section start */}

      <section>
        <div className="container">
          <div className="row">
            <Subtitle subtitle={'Fans Love'} />
            <h2 className='testimonial_title'>What our fans say us</h2>
            <Testimonials />
          </div>
        </div>
      </section>
      {/* testimonial section end */}
      <Newsletter />

    </div>

  </>
}

export default Home