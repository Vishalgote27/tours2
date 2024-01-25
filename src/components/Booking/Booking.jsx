import React, { useEffect, useState } from 'react'
import "./booking.css"
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BookingAction, getSingleBookingAction } from '../../redux/user/userAction'

const Booking = () => {
    const { info, book, Singlebook } = useSelector(state => state.user)
    const serviceCharge = 200
    const value = Singlebook?.price
   const  total = (value + serviceCharge)
    const { id } = useParams()
    const dispatch = useDispatch()
    const [bookingData, setBookingData] = useState({
        date: "",
        guests: "",
        phone: ""
    })
    const handleChange = () => {
        const { name, value } = e.target
        setBookingData({ ...bookingData, [name]: value })
    }
    const navigate = useNavigate()
    const handleBooking = e => {
        dispatch(BookingAction())
        if (!info) {
            navigate("/login")
        }
        if (book) {
            navigate("/thank-you")
        }

    }
    useEffect(() => {
        dispatch(getSingleBookingAction(id))
    }, [])
    return <>
        {/* <pre>{JSON.stringify(Singlebook)}</pre> */}


        <div className="container">
            <div className="booking">
                <div className="booking_top d-flex align-items-center justify-content-between">
                    <h3>$  {Singlebook?.price}<span>/per person</span></h3>
                    <span className='tour_rating d-flex align-items-center'>
                        <i class="bi bi-star-fill"></i>

                    </span>
                </div>

                {/* booking form start */}

                <div className="booking_form">
                    <h5>Information</h5>
                    <form className='booking_info-form'>
                        <form className='group'>
                            <input
                                value={info.username}
                                disabled
                                type="text"
                                placeholder='Full Name'
                                id='fullName'
                            />
                        </form>
                        <form className='group my-2'>
                            <input
                                onChange={e => setBookingData({ ...bookingData, phone: e.target.value })}
                                disabled={info.phone}
                                value={bookingData.phone}
                                type="number"
                                placeholder='Phone'
                                id='phone'
                            />
                        </form>
                        <form className='group d-flex align-content-center gap-3 my-2'>
                            <input
                                value={bookingData.date}
                                onChange={e => setBookingData({ ...bookingData, date: e.target.value })}
                                type="date"
                                placeholder=''
                                id='bookAt'
                            />
                            <input
                                value={bookingData.guests}
                                onChange={e => setBookingData({ ...bookingData, guests: e.target.value })}
                                type="number"
                                placeholder='Guests'
                                id='guestSize'
                            />
                        </form>
                    </form>

                </div>

                {/* booking form end */}

                {/* booking  bottom start */}

                <div className="booking_bottom">
                    <ul class="list-group">
                        <li class="list-group-item border-0 px-0">
                            <h5 className='d-flex align-content-center gap-1'>
                                {Singlebook?.price}
                                <i class="bi bi-x"></i> 1 person
                            </h5>
                            <span></span>
                        </li>
                        <li class="list-group-item border-0 px-0">
                            <h5>{serviceCharge} = Service charge</h5>
                            <span></span>
                        </li>
                        <li class="list-group-item border-0 px-0 total">
                            <h5>{ total} = Total</h5>
                            <span></span>
                        </li>
                    </ul>
                    <button
                        className='btn primary_btn w-100 mt-4'
                        onClick={handleBooking} >Book Now</button>
                </div>

                {/* booking  bottom end */}

            </div>

        </div>
    </>
}

export default Booking