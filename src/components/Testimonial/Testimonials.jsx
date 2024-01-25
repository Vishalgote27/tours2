import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 100,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slideToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slideToShow: 2,
                    slideToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slideToShow: 1,
                    slideToScroll: 1,
                }
            }

        ]

    }
    return <>
        {/* <Slider {...settings}>
            <div className="testimonial py-4 px-3 d-flex gap-2">
                <div className='col-sm-4'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem id explicabo modi nisi voluptates, fuga nobis doloribus eveniet ab ipsa sunt ullam delectus nesciunt, assumenda ea iusto sapiente aspernatur. Quas hic dolor nihil et, vero, repellat repellendus aliquid libero sint quo voluptate rem culpa officia laboriosam explicabo architecto nobis magnam!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src="https://images.unsplash.com/photo-1517265446290-91e599dc3b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGxlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>John</h6>
                        <p>Customer</p>
                    </div>
                </div>
                </div>
                <div className='col-sm-4'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem id explicabo modi nisi voluptates, fuga nobis doloribus eveniet ab ipsa sunt ullam delectus nesciunt, assumenda ea iusto sapiente aspernatur. Quas hic dolor nihil et, vero, repellat repellendus aliquid libero sint quo voluptate rem culpa officia laboriosam explicabo architecto nobis magnam!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src="https://images.unsplash.com/photo-1517265446290-91e599dc3b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGxlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>John</h6>
                        <p>Customer</p>
                    </div>
                </div>
                </div>
                <div className='col-sm-4'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem id explicabo modi nisi voluptates, fuga nobis doloribus eveniet ab ipsa sunt ullam delectus nesciunt, assumenda ea iusto sapiente aspernatur. Quas hic dolor nihil et, vero, repellat repellendus aliquid libero sint quo voluptate rem culpa officia laboriosam explicabo architecto nobis magnam!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src="https://images.unsplash.com/photo-1517265446290-91e599dc3b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGxlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>John</h6>
                        <p>Customer</p>
                    </div>
                </div>
                </div>              
            </div>    
            <div className="testimonial py-4 px-3 d-flex gap-2">
                <div className='col-sm-4'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem id explicabo modi nisi voluptates, fuga nobis doloribus eveniet ab ipsa sunt ullam delectus nesciunt, assumenda ea iusto sapiente aspernatur. Quas hic dolor nihil et, vero, repellat repellendus aliquid libero sint quo voluptate rem culpa officia laboriosam explicabo architecto nobis magnam!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src="https://images.unsplash.com/photo-1517265446290-91e599dc3b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGxlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>John</h6>
                        <p>Customer</p>
                    </div>
                </div>
                </div>
                <div className='col-sm-4'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem id explicabo modi nisi voluptates, fuga nobis doloribus eveniet ab ipsa sunt ullam delectus nesciunt, assumenda ea iusto sapiente aspernatur. Quas hic dolor nihil et, vero, repellat repellendus aliquid libero sint quo voluptate rem culpa officia laboriosam explicabo architecto nobis magnam!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src="https://images.unsplash.com/photo-1517265446290-91e599dc3b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGxlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>John</h6>
                        <p>Customer</p>
                    </div>
                </div>
                </div>
                <div className='col-sm-4'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem id explicabo modi nisi voluptates, fuga nobis doloribus eveniet ab ipsa sunt ullam delectus nesciunt, assumenda ea iusto sapiente aspernatur. Quas hic dolor nihil et, vero, repellat repellendus aliquid libero sint quo voluptate rem culpa officia laboriosam explicabo architecto nobis magnam!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src="https://images.unsplash.com/photo-1517265446290-91e599dc3b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGxlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>John</h6>
                        <p>Customer</p>
                    </div>
                </div>
                </div>              
            </div>    
             
        </Slider> */}
    </>
}

export default Testimonials