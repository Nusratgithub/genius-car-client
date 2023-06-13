import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)

const Payment = () => {
    const order = useLoaderData();
    // console.log(order);
    const {serviceName,price} = order;
    // const navigation = useNavigation();
    
    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }
    return (
        <div className='container mx-auto my-20  border shadow rounded py-8 lg:w-7/12'>
            <h3 className="text-2xl px-10">Payment for {serviceName }</h3>
            <p className="text-xl px-10 mb-5">Please pay <strong>${price}</strong> for car service</p>
            <div className='px-10 pt-2'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                      order={order}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;