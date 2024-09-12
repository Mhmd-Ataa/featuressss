import React from 'react';
import styled from './Package.module.css';
import { price } from '../../../Assets/data/data';


const Package = () => {
    return (
        <>
            <section className={`${styled.package} mt-5`}>
                <div className="container">
                    <div className="title text-center my-5">
                        <h1 className='mb-2'>Recent Property List</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sapiente <br /> voluptatum aliquam officia </p>
                    </div>

                    <div className="row my-5">
                        {price.map((item, i) => (                            
                            
                                <div className={`col-md-4  ${styled.carddd} `} key={i} >

                                    <div className={`${styled.cardd} align-items-center justify-content-center flex-column py-5 mb-3`} >
                                        <div className={`${styled.best}`}><button className='btn  mb-3'> {item.best}</button></div>
                                        <h4>{item.plan}</h4>
                                        <h2>$ {item.price}</h2>
                                        <p>{item.ptext}</p>

                                        <div className="content">
                                            {item.list.map((val , i) => (
                                                <div className={`${styled.text} d-flex `} key={i}>
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
            </section>

        </>
    )

}



export default Package;