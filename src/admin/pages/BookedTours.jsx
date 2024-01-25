import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBookedToursAction } from '../../redux/admin/adminAction'

const BookedTours = () => {
    const { bookings, loading, error } = useSelector(state => state.admin)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBookedToursAction())
    }, [])

    const bookingTable = <>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th >#</th>
                    <th >Fullname</th>
                    <th >Mobile</th>
                    <th >Tourname</th>
                    <th >Guests</th>
                    <th >Date</th>
                    <th >Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    bookings && bookings.map((item, index) => <tr>
                        <th >1</th>
                        <td>{item.fullName}</td>
                        <td>{item.phone}</td>
                        <td>{item.tourName}</td>
                        <td>{item.guestSize}</td>
                        <td>{item.bookingDate}</td>
                        <td>{item.status}</td>
                       

                    </tr>)
                }

            </tbody>
        </table>


    </>
    if (loading) {
        <div class="spinner-border text-primary"></div>
    }
    return <>
        {bookingTable}
    </>
}

export default BookedTours