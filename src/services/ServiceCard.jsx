import React from 'react'
import "./service-card.css"

const ServiceCard = ({item}) => {
    const {imgUrl, title, desc} = item
  return <>
  <div className="service_item">
    <div className="service_img">
        <i className={imgUrl}></i>
    </div>
    <h5>{title}</h5>
    <p>{desc}</p>
  </div>
  </>
}

export default ServiceCard