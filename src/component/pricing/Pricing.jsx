import React from 'react';
import styled from './Pricing.module.css';
import { price } from '../../Assets/data/data';
import Package from '../home/package/Package';


const Pricing = () => {
    return (
        <>
        <section className={`${styled.pricing} `}>
                <div className={`${styled.first} d-flex align-items-center`}>
                    <div className="container">

                        <div className="cont ">
                            <h6>30 Days Money Back Guarantee</h6>
                            <h1>No Extra Fees . Friendly Support</h1>
                        </div>
                    </div>
                </div>
                <Package />
                {/* <div className={`${styled.second}  d-flex align-items-center my-5 `}>
                    <div className="container">
                    <div className="row my-5">
                        {price.map((item, i) => (                            
                            
                                <div className={`col-md-4 ${styled.carddd} `} key={i} >

                                    <div className={`${styled.cardd} align-items-center justify-content-center flex-column py-5`} >
                                        <div className={`${styled.best}`}><button className='btn  mb-3'> {item.best}</button></div>
                                        <h4>{item.plan}</h4>
                                        <h2>$ {item.price}</h2>
                                        <p>{item.ptext}</p>

                                        <div className="content">
                                            {item.list.map((val) => (
                                                <div className={`${styled.text} d-flex `}>
                                                    <div className={`${styled.icon} d-flex align-items-center justify-content-center`} style={{
                                                        background: val.change === 'color' ? '#dc35451d' : '#27ae601f',
                                                        color: val.change === 'color' ? '#dc3545' : '#27ae60'
                                                    }}>{val.icon}</div>
                                                    <p>{val.text}</p>

                                                </div>
                                            ))}

                                            <button className='btn form-control border mt-4 ' style={{
                                                background: item.plan === 'Standard' ? '#27ae60' : '#fff',
                                                color: item.plan === 'Standard' ? '#fff' : '#27ae60'
                                            }}>Start {item.plan}</button>

                                        </div>
                                    </div>
                                </div>
                            
                            )    )}

                    </div>
                   

                    </div>
                </div> */}


            </section>
        </>
    )
}


export default Pricing;