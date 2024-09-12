import React from 'react';
import styled from './About.module.css';
import img from '../../Assets/images/immio.jpg'

const About = () => {
    return (
        <>
            <section className={`${styled.about} `}>
                <div className={`${styled.first} d-flex align-items-center`}>
                    <div className="container">

                        <div className="cont ">
                            <h6>About Us</h6>
                            <h1>About Us - Who We Are ?</h1>
                        </div>
                    </div>
                </div>
                <div className={`${styled.second}  d-flex align-items-center py-5 `}>
                    <div className="container">
                        <div className="row align-items-center  justify-content-between">
                            <div className="col-md-6">
                                <h2>Our Agency Story</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                                <h6 className='mt-4 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi officia consectetur at? Animi, magnam iste alias voluptate reprehenderit impedit quibusdam, doloribus fugit commodi magni doloremque!</h6>
                                <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti harum ut magni cupiditate porro id et consequuntur soluta blanditiis, assumenda autem at accusamus nemo. Aspernatur soluta ea dolorum blanditiis!</h6>


                                  <button className='btn btn-success mt-3 '>More About Us</button>
                            </div>
                            <div className="col-md-5 mt-3">
                                <div className="img">
                                    <img src={img} alt=""  className='w-100'/>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>


            </section>

        </>
    )
}


export default About;