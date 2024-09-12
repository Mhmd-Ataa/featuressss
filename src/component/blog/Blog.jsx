import React from 'react';
import styled  from './Blog.module.css';
import { list } from '../../Assets/data/data';
import Listed from '../home/listed/Listed';


const Blog = () => {
    return (
        <>
          <section className={`${styled.blog} `}>
                <div className={`${styled.first} d-flex align-items-center`}>
                    <div className="container">

                        <div className="cont ">
                            <h6>Blog</h6>
                            <h1>Blog Grid - Our Blogs</h1>
                        </div>
                    </div>
                </div>
                <Listed />
                {/* <div className={`${styled.second}  d-flex align-items-center my-5 `}>
                    <div className="container">
                    <div className="row">
                        {list.map((item, i) => (
                            <div className="col-md-4">
                                <div className={`${styled.cardd} mb-4`}>
                                    <img src={item.cover} alt="" className='w-100 mb-3' />
                                    <div className="content px-3">
                                        <div className='d-flex align-items-center justify-content-between mb-2'>
                                            <span style={{background : item.category === 'For Rent' ? '#ff98001a' : '#25b5791a' 
                                                          ,color : item.category === 'For Rent' ? '#ff9800' : '#25b579'}}>
                                                              {item.category}
                                            </span>
                                            <p><i class="fa-solid fa-heart"></i></p>
                                        </div>
                                        <h5>{item.name}</h5>
                                        <p className='mb-4'><i class="fa-solid fa-location-dot"></i> {item.location}</p>

                                        <div className={`${styled.btns} d-flex align-items-center justify-content-between py-2`}>
                                            <div className='d-flex align-items-center '>
                                                <div className={`${styled.btnn}`}>{item.price} </div>
                                                <p className='mt-3 ms-2'>/sqft</p>
                                            </div>
                                            <h6>{item.type}</h6>
                                        </div>

                                    </div>

                                </div>
                            </div>


                        ))}

                    </div>
                       

                    </div>
                </div> */}


            </section>

        </>
    )
}



export default Blog;