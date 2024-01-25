import React from 'react'
import "./common-section.css"

const CommonSection = ({title}) => {
  return <>
  <section className='common_section'>
  <div className="container">
    <div className="row">
        <div className="col-sm-12">
            <h1>{title}</h1>
        </div>
    </div>
  </div>
  </section>
  </>
}

export default CommonSection