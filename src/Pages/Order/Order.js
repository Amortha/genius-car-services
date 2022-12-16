import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { get } from 'react-hook-form';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://genius-car-services-serversite.onrender.com/order?email=${email}`
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrders();
    }, [user])
    return (
        <div className='mx-auto w-50'>
            <h1>this is our all order{orders.length}</h1>
            {
                orders.map(order => <div key={order._id}>
                    <p>{order.email}: {order.service}</p>


                </div>)
            }
        </div>
    );
};

export default Order;