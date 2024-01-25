import React from 'react'
import ServiceCard from './ServiceCard'

const serviceData =[
    {
        imgUrl:"bi bi-cloud-sun",
        title:"Calculate Weather",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
    },
    {
        imgUrl:"bi bi-microsoft-teams",
        title:"Best Tour Guide",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
    },
    {
        imgUrl:"bi bi-gear",
        title:"Customization",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
    },
]

const ServicesList = () => {
  return <>
  {
    serviceData.map((item,index) =><>
    <div className="col-sm-3" key={index}>
        <ServiceCard item={item}/>
    </div>
    </> )
  }
  </>
}

export default ServicesList