import React from 'react';
import Banar from '../Banner/Banar';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;