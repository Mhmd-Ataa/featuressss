import React from 'react';
import styled from './Hero.module.css';

const Hero = () => {
    return (
        <>
            <section className={`${styled.hero} vh-100 d-flex align-items-center justify-content-center`}>
                <div className="content text-center">

                    <h1 className='mb-2'>Search Your Next Home</h1>
                    <p>Find New  & Feature Properity LOcated In Your Local City </p>

                    <div className="inputs d-flex bg-white p-3 align-items-center mt-5">

                        <div className={`${styled.box}  text-start px-1`}>
                            <label htmlFor="" className='mb-1'>City/Street</label><br />
                            <input type="text" name="" id="" placeholder='Location' className='form-control' />
                        </div>
                        <div className={`${styled.box} text-start px-1 `}>
                            <label htmlFor="" className='mb-1'> Property Type</label><br />
                            <input type="text" name="" id="" placeholder='Property Type'  className='form-control'/>
                        </div>
                        <div className={`${styled.box} text-start px-1`}>
                            <label htmlFor="" className='mb-1'>Price Range</label><br />
                            <input type="text" name="" id="" placeholder='price Range' className='form-control' />
                        </div>
                        <div className={`${styled.box1} d-flex px-1 mt-4 `}>
                            <input type="text" name="" id="" placeholder='Advanced Filter' className='form-control border-0' />
                            <button className='btn btn-success'><i className="fa-solid fa-magnifying-glass"></i></button>


                        </div>
                        

                    </div>
                </div>

            </section>
        </>
    )
}


export default Hero;