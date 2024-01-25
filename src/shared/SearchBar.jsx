import React, { useRef } from 'react'
import './search-bar.css'


const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)

    const searchHandler = async () => {
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if (location === "" || distance === "" || maxGroupSize === "") {
            return alert("All fields are required")
        }
       
      
    }
    return <>
    <div className="container">
        <div className="row">       
        <div className="col-sm-12">
            <div className="search_bar">
                <form className='d-flex align-items-center gap-4'>
                    <div className='d-flex gap-3 form_group form_group-fast '>
                        <span>
                            <i class="bi bi-geo-alt"></i>
                        </span>
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder='Where are you going' ref={locationRef} />
                        </div>
                    </div>
                    <div className='d-flex gap-3 form_group form_group-fast '>
                        <span>
                            <i class="bi bi-clock-history"></i>
                        </span>
                        <div>
                            <h6>Distance</h6>
                            <input type="number" placeholder='Distance k/m' ref={distanceRef} />
                        </div>
                    </div>
                    <div className='d-flex gap-3 form_group form_group-last '>
                        <span>
                            <i class="bi bi-people-fill"></i>
                        </span>
                        <div>
                            <h6>Max People</h6>
                            <input type="number" placeholder='0' ref={maxGroupSizeRef} />
                        </div>
                    </div>
                    <span className="search_icon" type="submit" onClick={searchHandler}>
                        <i class="bi bi-search"></i>
                    </span>
                </form>
            </div>
        </div>
        </div>
    </div>
    </>
}

export default SearchBar