import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'

const CheckoutForm = ({ service }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { _id, price, title, img } = service

    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const email = form.email.value
        const phone = form.phone.value
        const message = form.message.value

        const placeOrder = {
            service: _id,
            serviceName: title,
            price,
            img,
            customer: name,
            email,
            phone,
            message
        }

        fetch('https://genius-car-server-nu-ten.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
               
            },
            body: JSON.stringify(placeOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Order placed successfully")
                    form.reset()
                    navigate('/orders')
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <section className="mx-auto container bg-[#F3F3F3] rounded-rounded-10 my-20">
            <div className='px-10 md:px-16 lg:px-20 pt-10 md:pt-12 lg:pt-20'>
                <div className='p-4 rounded-rounded-10 bg-white flex w-full md:max-w-sm justify-between items-center mx-auto gap-4'>
                    <img className='w-60 rounded-rounded-10' src={img} alt={title} />
                    <div>
                        <h3 className='text-theme-dark text-xl font-bold leading-leading-30'>{title}</h3>
                        <p className='font-bold text-lg text-red-500'>${price}</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <div className="p-10 md:p-16 lg:p-20">
                    <form onSubmit={handlePlaceOrder} className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 md:col-span-3">
                            <input
                                className="w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-red-500"
                                type="text"
                                defaultValue={user?.displayName}
                                name="name"
                                placeholder='First Name'
                            />
                        </div>
                        <div className="col-span-6 md:col-span-3">
                            <input
                                className="w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-red-500"
                                type="tel"
                                name="phone"
                                placeholder='Your Phone'
                            />
                        </div>
                        <div className="col-span-6">
                            <input
                                className="w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-red-500"
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                readOnly
                                placeholder='Your Email'
                            />
                        </div>
                        <div className="col-span-6">
                            <textarea name="message" rows="8" className="w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-red-500" placeholder="Your Message"></textarea>
                        </div>
                        <div className="col-span-6">
                            <button
                                className="block w-full py-4 text-xl leading-leading-30 font-semibold text-white bg-red-500 rounded-rounded-10"
                                type="submit"
                            >
                                Order Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CheckoutForm