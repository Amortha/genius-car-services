import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service,setService] = useState({});

  useEffect (()=>{
    const url = `http://localhost:5000/service/${serviceId}`;

    fetch(url)
    .then(res => res.json())
    .then (data => setService(data));
  },[])

  return (
    <div className='w-50 mx-auto'>
      <h2>{service.name}</h2>
      <img className='w-100' src={service.img}alt=''/>
      <p className=''>{service.description}</p>
      <div className='text-center'>
        <Link to="/checkout">
          <button className='btn btn-primary'>proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;