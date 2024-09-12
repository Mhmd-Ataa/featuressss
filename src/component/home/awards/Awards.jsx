import React from 'react';
import styled from './Awards.module.css';
import { awards } from '../../../Assets/data/data';


const Awards = () => {
    return (
        <>
            <section className={`${styled.awards} py-5 mt-4`}>
                <div className="container">
                    <div className="title text-center ">
                        <span>Our Awards</span>
                        <h3 className=' mb-5'>Lorem ipsum dolor sit amet,licabo fugit sunt obcaecati, error  <br /> beatae in saepe enim velit.</h3>
                    </div>
                    <div className="row">
                        {awards.map((item, i) => (
                            <div className="col-md-3" key={i}>
                                <div className="cardd text-center my-5">
                                    <div className={`${styled.icon} d-flex align-items-center justify-content-center m-auto`}>{item.icon}</div>
                                    <h2 className='mt-3'>{item.num}</h2>
                                    <p>{item.name}</p>

                                    
                                    
                                </div>
                            </div>
                        ))}

                    </div>
                </div>


            </section>
        </>
    )
}



export default Awards;