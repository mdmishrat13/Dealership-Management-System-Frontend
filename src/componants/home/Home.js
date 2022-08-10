import React from 'react';
import Body from './Body'
import Header from './../shared/Header'

const Home = () => {
    return (
        <div>
           <div className="header">
            <Header/>
            <Body/>
           </div>
        </div>
    );
};

export default Home;