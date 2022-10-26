import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css';
const Services = () => {

  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div id ="services" className='container'>
       <h1 className='text-primary text-center mt-5'> our services</h1>
      <div className='row'>
       
        <div className='services-container'>
          {
            services.map(service => <Service
              key={service.id}
              service={service}
            >
            </Service>)
          }
        </div>
      </div>
    </div>
  );
};

export default Services;