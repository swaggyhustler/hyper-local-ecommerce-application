import React from 'react';

const ContactUs = () => {
  return (
    <section className="mb-32">
      <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
          width="100%" height="480" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
      </div>
      <div className="container px-6 md:px-12">
        <div
          className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleInput90" />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    htmlFor="exampleInput90">Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleInput91" />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    htmlFor="exampleInput91">Email address
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlTextarea1" rows="3"></textarea>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">Message</label>
                </div>
                <button type="submit"
                  className="inline-block w-full rounded bg-primary px-6 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal text-white bg-blue-600 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.3)] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_4px_9px_-4px_rgba(0,0,0,0.3)]"
                  data-te-ripple-init data-te-ripple-color="light">
                  Send
                </button>
              </form>
            </div>
            <div className="w-full grow-0 basis-auto px-3 lg:w-7/12 lg:px-6">
              <h2 className="mb-6 text-3xl font-bold">Get in touch with us!</h2>
              <p className="mb-6 text-neutral-500">We are here to help you with your queries. Reach out to us via the contact form or the following methods.</p>
              <ul className="fa-ul flex flex-col">
                <li className="mb-3 flex items-center text-base text-neutral-500">
                  <svg aria-hidden="true" className="mr-3 h-5 w-5 flex-shrink-0 text-primary" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h18zM12 11V7M12 17v-4M5 12h14"></path>
                  </svg>
                  <span className="text-base font-bold">Address:</span> 1234 Street Name, City, State, 56789
                </li>
                <li className="mb-3 flex items-center text-base text-neutral-500">
                  <svg aria-hidden="true" className="mr-3 h-5 w-5 flex-shrink-0 text-primary" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                  <span className="text-base font-bold">Phone:</span> (123) 456-7890
                </li>
                <li className="mb-3 flex items-center text-base text-neutral-500">
                  <svg aria-hidden="true" className="mr-3 h-5 w-5 flex-shrink-0 text-primary" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12.3c0-5.7-3.5-10.3-8-10.3S6 6.6 6 12.3s3.5 10.3 8 10.3 8-4.6 8-10.3zM12 4v8l6 2"></path>
                  </svg>
                  <span className="text-base font-bold">Email:</span> contact@yourdomain.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
