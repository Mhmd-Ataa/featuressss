import React from 'react';
import { location } from '../../../Assets/data/data';
import styled from './Location.module.css'

const Location = () => {
    return (
        <>
            <section className={`${styled.location} py-5`}>
                <div className="container">
                    <div className="title text-center mb-5">
                        <h1 className='mb-2'>Explore By Location </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa  <br /> voluptatum aliquam officia </p>
                    </div>

                    <div className="row">
                    
                        {location.map((item , i) =>(
                            <div className="col-md-4 mb-4" key={i}>
                                <div className="cardd position-relative p-4  ">
                                   <img src={item.cover} alt="" className='w-100' /> 

                                   <div className={`${styled.overlay} position-absolute d-flex flex-column align-items-center justify-content-center `}>
                                       <h4>{item.name}</h4>
                                       <div className='d-flex align-items-center justify-content-between '>
                                           <p>{item.Villas}</p>
                                           <p>{item.Offices}</p>
                                           <p>{item.Apartments}</p>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}



export default Location;