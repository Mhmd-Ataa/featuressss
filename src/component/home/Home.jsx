import React from 'react';
import Agent  from './agent/Agent';
import Awards from './awards/Awards';
import Feature from './feature/Feature';
import Hero from './hero/Hero';
import Listed from './listed/Listed';
import Location from './location/Location';
import Package from './package/Package';


const Home = () => {
    return(
        <>
        <Hero />
        <Feature />
        <Listed />
        <Awards />
        <Location />
        <Agent />
        <Package/>

        </>
    )
}



export default Home;