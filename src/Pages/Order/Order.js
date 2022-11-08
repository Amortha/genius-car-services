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
           const email= user.email;
            const url = `http://localhost:5000/order?email=${email}`
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrders();
    }, [user])
    return (
        <div>
            <h1>this is our all order{orders.length}</h1>
        </div>
    );
};

export default Order;