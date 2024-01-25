import React, { useRef, useState } from 'react'
import "../styles/tour-details.css"
import tours from "../assets/data/tour"
import { useParams } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import Booking from '../components/Booking/Booking'
import Newsletter from "./../shared/Newsletter"

const TourDetails = () => {
  const { id } = useParams()
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)

  const tour = tours.find(tour => tour.id === id)
  const { photo, title, desc, address, price, reviews, city, distance, maxGroupSize } = tour
  const { totalRating, avgRating } = calculateAvgRating(reviews)

  const options = { day: "numeric", month: "long", year: "numeric" }

  const submitHandler = e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

  }

  return <>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="tour_content">
              <img src={photo} alt="" />
              <div className='tour_info'>
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className='tour_rating d-flex align-items-center gap-1'>
                    <i class="bi bi-star-fill" style={{ color: "var(--secondary-color" }}></i>
                    {
                      avgRating === 0
                        ? null
                        : avgRating}
                    {
                      totalRating === 0
                        ? "Not Rated"
                        : <span>({reviews?.length})</span>
                    }

                  </span>
                  <span>
                    <i class="bi bi-geo-alt"></i>{address}
                  </span>
                </div>
                <div className="tour_extra-details">
                  <span>
                    <i class="bi bi-geo-alt"></i>{city}
                  </span>
                  <span>
                    <i class="bi bi-currency-dollar"></i>${price} /per pserson
                  </span>
                  <span>
                    <i class="bi bi-signpost-2"></i>{distance} k/m
                  </span>
                  <span>
                    <i class="bi bi-people-fill"></i>{maxGroupSize}
                  </span>

                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>
              {/* tour review section start */}

              <div className="tour_reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>
                <form onSubmit={submitHandler}>
                  <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                    <span onClick={e => setTourRating(1)}>
                      1 <i class="bi bi-star-fill"></i>
                    </span>
                    <span onClick={e => setTourRating(2)}>
                      2 <i class="bi bi-star-fill"></i>
                    </span>
                    <span onClick={e => setTourRating(3)}>
                      3 <i class="bi bi-star-fill"></i>
                    </span>
                    <span onClick={e => setTourRating(4)}>
                      4 <i class="bi bi-star-fill"></i>
                    </span>
                    <span onClick={e => setTourRating(5)}>
                      5 <i class="bi bi-star-fill"></i>
                    </span>
                  </div>
                  <div className="review_input">
                    <input
                    required
                      ref={reviewMsgRef}
                      type="text"
                      placeholder='share your thoughts' />
                    <button
                      type="submit"
                      class=" btn btn-outline-warning rounded-full">Submit</button>
                  </div>
                </form>
                <ul class="list-group user_reviews">
                  {
                    reviews?.map(review => <>
                      <div className='review_item'>
                        <img className='img-fluid' src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className='w-100'>
                          <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>John</h5>
                              <p>{new Date('01-18-2023').toLocaleDateString("en-US", options)}</p>
                            </div>
                            <span className='d-flex align-items-center'>
                              5 <i class="bi bi-star-fill"></i>
                            </span>
                          </div>
                          <h6>Amazing Tour</h6>
                        </div>
                      </div>
                    </>)
                  }
                </ul>
              </div>

              {/* tour review section end */}

            </div>
          </div>
          <div className="col-sm-4">
            <Booking tour={tour} avgRating={avgRating}/>
          </div>
        </div>
      </div>
    </section>
    <Newsletter/>
  </>
}

export default TourDetails