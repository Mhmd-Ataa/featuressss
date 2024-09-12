import React from 'react';
import styled from './Ajent.module.css';
import { team } from '../../../Assets/data/data';


const Agent = () => {
    return (
        <>
            <section className={`${styled.agent}`}>
                <div className="container">
                    <div className="title text-center ">
                        <h2>Our Feature Agents</h2>
                        <p className=' mb-5'>Lorem ipsum dolor sit amet,licabo fugit sunt obcaecati, error  <br /> beatae in saepe enim velit.</p>
                    </div>
                    <div className="row">
                        {team.map((item , i) =>(
                            <div className="col-md-4" key={i}>
                                <div className={`${styled.cardd} text-center  mb-4 position-relative p-5`}>
                                    <span className='position-absolute'>{item.list} Listings</span>
                                    <div className={`${styled.content} mt-5`}></div>
                                   <div className={`${styled.images} m-auto`}><img src={item.cover} alt="" srcset="" className=''/> </div> 
                                   <p className='mt-2'><i className="fa-solid fa-location-dot"></i> {item.address}</p>
                                   <h6>{item.name}</h6>

                                   <div className={`${styled.social} d-flex align-items-center justify-content-center mt-3`}>
                                   {item.icon.map((icon , e) =>(
                                       
                                       <div className={`${styled.icons}  d-flex align-items-center justify-content-center`} key={e}>
                                       {icon}

                                       </div>
                                       
                                   ))}
                                   </div> 

                                   <div className="btns d-flex align-items-center justify-content-between mt-5">
                                       <div className={`${styled.btn1} bg-success d-flex align-items-center justify-content-center`}><i className="fa-solid fa-envelope me-2"></i> Message</div>
                                       <div className={`${styled.btn2} bg-black d-flex align-items-center justify-content-center`}><i className="fa-solid fa-phone-flip"></i></div>
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


export default Agent;