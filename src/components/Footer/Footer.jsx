import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'



const quick_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  }
]
const quick_links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  }
]
const Footer = () => {
  const year = new Date().getFullYear()
  return <>
    <footer className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="">
            <img className='img-fluid' height={100} width={200} src="https://travelicious.bold-themes.com/wp-content/uploads/2018/10/travelicious-logo-big.png" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae accusamus commodi esse veniam consectetur.</p>
              <div className="social_links d-flex align-items-center gap-4">
                <span>
                  <Link to='#' ><i class="bi bi-youtube"></i></Link>
                </span>
                <span>
                  <Link to='#' ><i class="bi bi-github"></i></Link>
                </span>
                <span>
                  <Link to='#' ><i class="bi bi-facebook"></i></Link>
                </span>
                <span>
                  <Link to='#' ><i class="bi bi-instagram"></i></Link>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <h5 className='footer_link-title'>Discover</h5>
            <ul class="list-group footer_quick-links">
              {
                quick_links.map((item, index) => <>
                  <li key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                </>)
              }
            </ul>
          </div>
          <div className="col-sm-3">
            <h5 className='footer_link-title'>Quick links</h5>
            <ul class="list-group footer_quick-links">
              {
                quick_links2.map((item, index) => <>
                  <li key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                </>)
              }
            </ul>
          </div>
          <div className="col-sm-3">
            <h5 className='footer_link-title'>Contact</h5>
            <ul class="list-group footer_quick-links">
              <li className='ps-0 border-0 d-flex align-items-center gap-3 '>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="bi bi-geo-alt"></i>
                  </span>
                  Address
                </h6>
                <div>Maharashtra, India</div>
              </li>
            </ul>
            <ul class="list-group footer_quick-links">
              <li className='ps-0 border-0 d-flex align-items-center gap-3 '>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="bi bi-geo-alt"></i>
                  </span>
                  Email
                </h6>
                <div>john@gmail.com</div>
              </li>
            </ul>
            <ul class="list-group footer_quick-links">
              <li className='ps-0 border-0 d-flex align-items-center gap-3 '>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="bi bi-geo-alt"></i>
                  </span>
                  Phone
                </h6>
                <div>+0123456789</div>
              </li>
            </ul>
          
          </div>
          <div className="col-sm-12 text-center">
            <p className='copyright'>Copyright {year}, design and develop by john. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>

  </>
}

export default Footer