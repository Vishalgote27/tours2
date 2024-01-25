import React, { useEffect, useState } from 'react'
import "../../admin/components/admin-tourcard.css"
import { useDispatch, useSelector } from 'react-redux'
import { createTourAction, deleteToursAction, readAllToursAction, updateToursAction } from '../../redux/admin/adminAction'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { invalidate } from '../../redux/admin/adminSlice'


const AdminTourCard = () => {
    const [selectedTour, setSelectedTour] = useState()
    const [updateTour, setUpdateTour] = useState("")
    const { tourAdded, tours, error, update } = useSelector(state => state.admin)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            title: "Landon",
            city: "Bali",
            address: "united kingdom",
            desc: "Awesome tour",
            price: 299,
            photo: "https://images.unsplash.com/photo-1540544660406-6a69dacb2804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1264&q=80"

        },
        validationSchema: yup.object({
            title: yup.string().required(),
            city: yup.string().required(),
            address: yup.string().required(),
            desc: yup.string().required(),
            price: yup.string().required(),
            photo: yup.string().required(),
        }),
        onSubmit: values => {
            dispatch(createTourAction(values))
            dispatch(readAllToursAction())
        }
    })

    useEffect(() => {
        if (tourAdded || error) {
            setTimeout(() => {
                dispatch(invalidate())
                dispatch(readAllToursAction())
            }, 2000);
        }
    }, [tourAdded, error])

    useEffect(() => {
        dispatch(readAllToursAction())
    }, [])
    const handleUpdateTour = () => {
        console.log(selectedTour)
        dispatch(updateToursAction(selectedTour))
        dispatch(readAllToursAction())
    }

    const handleDelete = (id) => {
        dispatch(deleteToursAction(id))
        dispatch(readAllToursAction())
    }
    return <>
        <pre>{JSON.stringify(tours?.data, null, 2)}</pre>

        {
            tourAdded && <div class="alert alert-success">
                Tours Added Successfully
            </div>
        }
        {
            error && <div class="alert alert-danger">
                {error}
            </div>
        }
        <div className='d-flex justify-content-end'>
            <button
                data-bs-toggle="modal"
                data-bs-target="#addModal"
                type="button"
                class="btn btn-warning mx-5 text-white btn-lg w-25 my-5 ">
                +Add Tour</button>
        </div>
        <div className="container">
            <div className="row">
                {
                    tours && tours.map((item, index) => <div className="col-sm-3"  >
                        <div className="tour_card">
                           
                            <div className="card" >
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
                                        <h4>{item.title}</h4>
                                        <h6>{item.address}</h6>
                                        <p>{item.desc}</p>
                                        
                                    </h5>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between mt-3">
                                    <h5>${item.price} <span>/per person</span></h5>
                                    <button
                                        onClick={e => handleDelete(item._id)}
                                        type="button"
                                        class="btn  btn-sm mx-1 btn-warning text-light ">Delete</button>
                                    <button
                                        onClick={e => setSelectedTour(item)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#updateModal"
                                        type="button"
                                        class="btn btn-sm mx-1 btn-warning text-light  ">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

        {/* add modal start */}
        <form onSubmit={formik.handleSubmit}>
            <div class="modal fade" id="addModal" >
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Tour</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <pre>
                                {JSON.stringify(formik.errors, null, 2)}
                            </pre>
                            <div className="my-2">
                                <label for="name" class="form-label">Title</label>
                                <input
                                    {...formik.getFieldProps("title")}
                                    type="text"
                                    className={`
                                    form-control ${formik.touched.title
                                        &&
                                        (formik.errors.title
                                            ? "is-invalid"
                                            : "is-valid")}
                                    `}
                                    placeholder="Enter Tour Title" />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="my-2">
                                <label for="name" class="form-label">City</label>
                                <input
                                    {...formik.getFieldProps("city")}
                                    type="text"
                                    className={`
                                    form-control ${formik.touched.city
                                        &&
                                        (formik.errors.city
                                            ? "is-invalid"
                                            : "is-valid")}
                                    `}
                                    placeholder="Enter City" />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="my-2">
                                <label for="name" class="form-label">Address</label>
                                <input
                                    {...formik.getFieldProps("address")}
                                    type="text"
                                    className={`
                                    form-control ${formik.touched.address
                                        &&
                                        (formik.errors.address
                                            ? "is-invalid"
                                            : "is-valid")}
                                    `}
                                    placeholder="Enter Address" />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="my-2">
                                <label for="name" class="form-label">Description</label>
                                <input
                                    {...formik.getFieldProps("desc")}
                                    type="text"
                                    className={`
                                    form-control ${formik.touched.desc
                                        &&
                                        (formik.errors.desc
                                            ? "is-invalid"
                                            : "is-valid")}
                                    `}
                                    placeholder="Enter description" />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="my-2">
                                <label for="name" class="form-label">Price</label>
                                <input
                                    {...formik.getFieldProps("price")}
                                    type="number"
                                    className={`
                                    form-control ${formik.touched.price
                                        &&
                                        (formik.errors.price
                                            ? "is-invalid"
                                            : "is-valid")}
                                    `}
                                    placeholder="Enter price" />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="my-2">
                                <label for="name" class="form-label">Photo</label>
                                <input
                                    {...formik.getFieldProps("photo")}
                                    type="text"
                                    className={`
                                    form-control ${formik.touched.photo
                                        &&
                                        (formik.errors.photo
                                            ? "is-invalid"
                                            : "is-valid")}
                                    `}
                                    placeholder="Enter Image" />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="submit"
                                class="btn btn-warning w-100"
                                data-bs-dismiss="modal">Add Tour</button>

                        </div>
                    </div>
                </div>
            </div>
        </form>
        {/* add modal end */}

        {/* update modal start */}

        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label htmlFor="">Title</label>
                        <input
                            value={selectedTour?.title}
                            onChange={e => setSelectedTour({ ...selectedTour, title: e.target.value })}
                            type="text"
                            className='form-control' />
                        <label htmlFor="">City</label>
                        <input
                            value={selectedTour?.city}
                            onChange={e => setSelectedTour({ ...selectedTour, city: e.target.value })}
                            type="text"
                            className='form-control' />
                        <label htmlFor="">Address</label>
                        <input
                            value={selectedTour?.address}
                            onChange={e => setSelectedTour({ ...selectedTour, address: e.target.value })}
                            type="text"
                            className='form-control' />
                        <label htmlFor="">Distance</label>
                        <input
                            value={selectedTour?.distance}
                            onChange={e => setSelectedTour({ ...selectedTour, distance: e.target.value })}
                            type="text"
                            className='form-control' />
                        <label htmlFor="">Photo Url</label>
                        <input
                            value={selectedTour?.photo}
                            onChange={e => setSelectedTour({ ...selectedTour, photo: e.target.value })}
                            type="text"
                            className='form-control' />
                        <label htmlFor="">Description</label>
                        <input
                            value={selectedTour?.desc}
                            onChange={e => setSelectedTour({ ...selectedTour, desc: e.target.value })}
                            type="text"
                            className='form-control' />
                        <label htmlFor="">Price</label>
                        <input
                            value={selectedTour?.price}
                            onChange={e => setSelectedTour({ ...selectedTour, price: e.target.value })}
                            type="number
                        " className='form-control' />


                    </div>
                    <div class="modal-footer">
                        <button
                            onClick={handleUpdateTour}
                            type="button"
                            class="btn btn-warning w-100"
                            data-bs-dismiss="modal">Update</button>

                    </div>
                </div>
            </div>
        </div>
        {/* update modal end */}

    </>
}

export default AdminTourCard