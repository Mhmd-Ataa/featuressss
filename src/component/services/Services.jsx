import React from 'react';
import styled from './Services.module.css';
import Feature from '../home/feature/Feature';


const Services = () => {
    return(
        <>
         <section className={`${styled.services} `}>
                <div className={`${styled.first} d-flex align-items-center`}>
                    <div className="container">

                        <div className="cont ">
                            <h6>Services</h6>
                            <h1>Services - All Services</h1>
                        </div>
                    </div>
                </div>

                <Feature />

                {/* <div className={`${styled.second}  d-flex align-items-center py-5 `}> */}
                {/* <div className="container">
                <div className="row my-5">
                    {featured.map((item, i) => (
                        <div className="col-md">
                            <div className={`${styled.cardd} p-4 text-center bg-white`}>
                                <img src={item.cover} alt="" className='w-50 m-auto' />
                                <h5 className='mt-2'>{item.name}</h5>
                                <p>{item.total}</p>
                            </div>

                        </div>
                    ))}

                </div>


                </div> */}
                {/* </div> */}


            </section>

        </>
    )
}



export default Services;