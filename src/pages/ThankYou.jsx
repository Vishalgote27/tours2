import React from 'react'
import "./../styles/thank-you.css"
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return <>
  <section>
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="thank_you">
                    <span><i class="bi bi-check-circle"></i></span>
                    <h1 className='mb-3 fw-semibold'>Thank You</h1>
                    <h3 className='mb-4'>your tour is booked.</h3>

                    <button type="button" class="btn primary_btn w-25"><Link to="/">Back to Home</Link></button>
                </div>
            </div>
        </div>
    </div>
  </section>
  </>
}

export default ThankYou