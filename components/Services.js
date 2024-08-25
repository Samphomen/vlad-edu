

import React from 'react'
import "../styles/services.css"
import { serviceList } from './data';
import ServicesList from './servicesList';

const Services = () => {
  return (
    <div className='m-services'>
        <div className='ms-header'>Our <span className="desktop-break"><br /></span>Services</div>
        <div className='ms-content'>
            {
                serviceList.map((list, index) => (
                    <ServicesList 
                        key={list.id} 
                        {...list} 
                        isLast={index === serviceList.length - 1}   
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Services