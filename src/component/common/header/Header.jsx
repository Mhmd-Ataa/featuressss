import React, { useState } from 'react';
import logo from '../../../Assets/images/logo.png';
import { nav } from '../../../Assets/data/data';
import { Link } from 'react-router-dom';
import styled from "./Header.module.css"

const Header = () => {
    const [responsive, setResponsive] = useState(false)
    return (
        <>
            <header className='py-2 fixed-top '>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src={logo} alt="" className="w-50" />
                    </div>

                    <div className={`${styled.navlink}`}>
                        <ul className={responsive ? styled.small : styled.nav }>
                            {nav.map((link, i) => (
                                <li key={i}>
                                    <Link to={link.path} >{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`${styled.btns}  align-items-center`}>
                        <div className="no d-flex align-items-center  mx-2">
                            <span className='d-flex align-items-center justify-content-center me-1 bg-success'>2</span>
                            <h6 className='m-0'>My List</h6>
                        </div>
                        <button className='btn btn-success'> <i className="fa-solid fa-right-to-bracket me-1"></i> Signout</button>

                    </div>
                    <div className={`${styled.toggle}  px-2 py-1 bg-success`} onClick={() => setResponsive(!responsive)}>
                        <i className="fa-solid fa-bars"></i>
                    </div>

                </div>

            </header>
        </>
    )
}


export default Header;