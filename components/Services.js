

import React from 'react'
import "@/styles/services.css"
import { serviceList } from './data';
import ServicesList from './ServicesList';

const Services = () => {
  return (
    <div className='m-services'>
        <div className='ms-header'>Our <span className="desktop-break"><br /></span>Services</div>
        <div className='ms-right'>
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
            <button className="test-button">
                    <div className="test-button-sign">➔</div>
                    <span className="test-button-text">Call to Action</span>
            </button>
        </div>
    </div>
  )
}

export default Services