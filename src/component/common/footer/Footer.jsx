import React from 'react';
import styled from './Footer.module.css';
import logo from '../../../Assets/images/logo-light.png';
import { footer } from '../../../Assets/data/data';

const Footer = () => {
    return (
        <>
            <section className={`${styled.footer} `}>
                <div className={`${styled.first}  bg-success`}>
                    <div className="container d-flex justify-content-between align-items-center h-100">

                        <div className="text">
                            <h2>Do You Have Questions ?</h2>
                            <h6>We will Help You To Grow Your Career And Growth</h6>
                        </div>
                        <button className='btn '>Contact Us Today</button>
                    </div>
                </div>
                <div className={`${styled.second} py-5`}>
                    <div className="container">

                        <div className="row">
                            <div className="col-md-6">
                                <img src={logo} alt="" className='w-25 mb-4' />
                                <h5>Do You Need Help With Anything ?</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta amet explicabo sequi autem eligendi beatae!</p>

                                <div className={`${styled.inputBox} d-flex my-5`}>
                                    <input type="text" className="form-control" placeholder="Email Address" />
                                    <button className={`${styled.btn2} btn btn-success`}>Subscribe</button>
                                </div>

                            </div>
                            <div className="col-md-6 ">
                                <div className="row">
                                    {footer.map((item, i) => (
                                        <div className="col-md-4" key={i}>
                                            <h6 className='mb-4'>{item.title}</h6>
                                            {item.text.map((val, i) => (
                                                <p className='mb-3' key={i}>{val.list}</p>
                                            ))}
                                        </div>
                                    ))}
                                </div>

                            </div>



                        </div>
                        <div className="text-center mt-5">
                            <p>@2024RentUP Designd By MHMD ATAA</p>

                        </div>

                    </div>

                </div>


            </section>
        </>
    )
}



export default Footer;