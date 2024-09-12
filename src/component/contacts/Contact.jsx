import React from 'react';
import styled from './Contact.module.css';


const Contact = () => {
    return (
        <>
            <section className={`${styled.contacts} `}>
                <div className={`${styled.first} d-flex align-items-center`}>
                    <div className="container">

                        <div className="cont ">
                            <h6>Contact Us</h6>
                            <h1>Get Helps & Friendly Support </h1>
                        </div>
                    </div>
                </div>
                <div className={`${styled.second}  d-flex align-items-center my-5 `}>
                    <div className="container">
                        <form className={`${styled.cardd} px-4 py-5`}>
                            <h4>Fillup The Form</h4>

                            <div className="inputBox d-flex mt-4 ">
                                <input type="text" className='form-control me-2' placeholder='Name' />
                                <input type="text" className='form-control' placeholder='Email'/>
                            </div>

                            <div className="inputBox py-4">
                                <input type="text" className='form-control' placeholder='Subject' />
                            </div>

                            <div className="inputBox">
                                <textarea name="" id=""  rows="6" className='form-control'></textarea>
                            </div>

                            <button className='btn btn-success mt-3'>Submit Request</button>

                        </form>
                    </div>
                </div>

            </section>
        </>
    )
}



export default Contact;