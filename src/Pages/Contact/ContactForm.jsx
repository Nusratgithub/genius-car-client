import React from 'react'

const ContactForm = () => {
    return (
        <section className="mx-auto mt-12 container bg-[#F3F3F3] rounded-rounded-10 mb-b-70 lg:mb-b-130">
            <div className="grid grid-cols-1">
                <div className="p-10 md:p-16 lg:p-24">
                    <form className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 md:col-span-3">
                            <input
                                className="w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-red-500"
                                type="text"
                                name="first_name"
                                placeholder='First Name'
                            />
                        </div>
                        <div className="col-span-6 md:col-span-3">
                            <input
                                className="w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-red-500"
                                type="text"
                                name="last_name"
                                placeholder='Last Name'
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
                        <div className="col-span-6 md:col-span-3">
                            <input
                                className="w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-red-500"
                                type="email"
                                name="email"
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
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm