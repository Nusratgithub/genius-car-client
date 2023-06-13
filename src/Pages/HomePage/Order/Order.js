import React, { useContext, useEffect, useState } from 'react';
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const { user, userLogout } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://genius-car-server-nu-ten.vercel.app/orders?email=${user?.email}`, {

    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {

        }
        return res.json();
      })
      .then(data => {
        setOrders(data);
      })
  }, [user?.email, userLogout])

  const handleOrderDelete = id => {
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if (proceed) {
      fetch(`https://genius-car-server-nu-ten.vercel.app/orders/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('deleted successfully');
            const remaining = orders.filter(odr => odr._id !== id);
            setOrders(remaining);
          }
        })
    }
  }

 



  return (
    <div className='container mx-auto'>
      <Breadcrumb title='Order Page' />
      <h3 className="text-3xl my-5 text-center">You have {orders.length} Orders</h3>
      <table className="min-w-full">
        <thead className="bg-gray-400 text-white border">
          <tr className="text-center">
            <th className="p-3">Image</th>
            <th className="p-3">Product Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Customer Details</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
        {
           orders?.map(order => <OrderRow
            key={order._id}
            order={order}
            handleOrderDelete={handleOrderDelete}
        ></OrderRow>)                 
        }
        </tbody>
      </table>
    </div>
  );
};

export default Order;