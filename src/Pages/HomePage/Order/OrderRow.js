import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, handleOrderDelete }) => {
  const { _id, serviceName, phone, email, customer, price, img, service, status } = order
  const [orderService, setOrderService] = useState([])

  useEffect(() => {
    fetch(`https://genius-car-server-nu-ten.vercel.app/services/${service}`)
      .then(res => res.json())
      .then(data =>
        setOrderService(data.data));
  }, [service])

  return (
    <tr className="border border-t-0 text-center">
      <td className="p-3 flex items-center gap-2">
        <button onClick={() => handleOrderDelete(_id)} className="btn btn-circle btn-outline btn-xs btn-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <img className='w-20 rounded' src={img} alt="" />
      </td>
      <td className="p-3">
        <p>{serviceName}</p>
      </td>
      <td className="p-3">
        <p>${price}</p>
      </td>
      <td className="p-3 hidden md:block">
        <p>{customer}</p>
        <p>{email}</p>
      </td>
      <td className="p-3">
      {
         !order.paid && <Link
          to={`/payment/${order._id}`}
      >
          <button
              className='btn btn-sm'
          >Pay</button>
      </Link>                              
      }
        {
            order.paid && <span className='text-green-600 font-bold'>Paid</span>
        }
                                  

      </td>
    </tr>
  );
};

export default OrderRow;