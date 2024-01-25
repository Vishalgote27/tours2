import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./tour-card.css"
import { useDispatch, useSelector } from 'react-redux'
import { getTours } from '../redux/public/publicAction'
import { getSingleBookingAction } from '../redux/user/userAction'



const TourCard = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { tours } = useSelector(state => state.public)
    useEffect(() => {
        dispatch(getTours())
    }, [])

    return <>

        <div className="tour_card">
            <div className='row'>

                {
                    tours?.data && tours?.data.map((item, index) => {
                        return <>

                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="tour_img">
                                        <img className='img-fluid' src={item.photo} alt="tour-img" />

                                    </div>
                                    <div className="card-body">
                                        <div className="card_top d-flex align-items-center justify-content-between">
                                            <span className='tour_location d-flex align-items-center gap-1'>
                                                <i class="bi bi-geo-alt"></i>{item.city}
                                            </span>
                                            <span className='tour_rating d-flex align-items-center gap-1'>
                                                <i class="bi bi-star-fill"></i>


                                            </span>
                                        </div>
                                        <h5 className='tour_title'>
                                            <Link >{item.title}</Link>
                                        </h5>
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between mt-3">
                                        <h5>${item.price} <span>/per person</span></h5>
                                        <button className='btn booking_btn'>
                                            <Link to={`/booking/${item._id}`} >Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                }
            </div >


        </div>
    </>
}

export default TourCard