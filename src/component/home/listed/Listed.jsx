import React from 'react';
import { list } from '../../../Assets/data/data';
import styled from './Listed.module.css'

const Listed = () => {
    return (
        <>
            <section className={`${styled.listed} my-4 `}>
                <div className="container">
                    <div className="title text-center mb-5">
                        <h1 className='mb-2'>Recent Property List</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa  <br /> voluptatum aliquam officia </p>
                    </div>

                    <div className="row">
                        {list.map((item, i) => (
                            <div className="col-md-4" key={i}>
                                <div className={`${styled.cardd} mb-4`}>
                                    <img src={item.cover} alt="" className='w-100 mb-3' />
                                    <div className="content px-3">
                                        <div className='d-flex align-items-center justify-content-between mb-2'>
                                            <span style={{background : item.category === 'For Rent' ? '#ff98001a' : '#25b5791a' 
                                                          ,color : item.category === 'For Rent' ? '#ff9800' : '#25b579'}}>
                                                              {item.category}
                                            </span>
                                            <p><i className="fa-solid fa-heart"></i></p>
                                        </div>
                                        <h5>{item.name}</h5>
                                        <p className='mb-4'><i className="fa-solid fa-location-dot"></i> {item.location}</p>

                                        <div className={`${styled.btns} d-flex align-items-center justify-content-between py-2`}>
                                            <div className='d-flex align-items-center '>
                                                <div className={`${styled.btnn}`}>{item.price} </div>
                                                <p className='mt-3 ms-2'>/sqft</p>


                                            </div>
                                            <h6>{item.type}</h6>


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



export default Listed;