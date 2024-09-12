import React from 'react';
import styled from './Feature.module.css';
import  {featured}  from '../../../Assets/data/data';

const Feature = () => {
    return (
        <>
            <section className={`${styled.feature} py-5`}>
                <div className="container">
                <div className="title text-center mb-5">
                    <h1 className='mb-2'>Feature Property Types</h1>
                    <p>Find All Type Of Property </p>
                </div>
                <div className="row">
                    {featured.map((item, i) => (
                        <div className="col-md" key={i}>
                            <div className={`${styled.cardd} p-4 text-center bg-white mb-2`}>
                                <img src={item.cover} alt="" className='w-50 m-auto' />
                                <h5 className='mt-2'>{item.name}</h5>
                                <p>{item.total}</p>
                            </div>

                        </div>
                    ))}

                </div>


                </div>
               

            </section>

        </>
    )
}



export default Feature;