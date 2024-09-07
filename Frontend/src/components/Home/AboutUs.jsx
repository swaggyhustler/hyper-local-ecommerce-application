import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 mt-5">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
            <p className="mt-4 text-gray-600 text-lg">
              Our mission is to make shopping simple and efficient. With our platform, you can search for your favorite 
              items and easily discover nearby stores that have them in stock. We aim to bring the best deals and reliable 
              service to your doorstep, so you can enjoy fast, local shopping without the hassle.
            </p>
            <p className="mt-4 text-gray-600 text-lg">
              Whether you're looking for everyday essentials or something special, we connect you with trusted shops in your 
              area, ensuring a seamless shopping experience that saves you time and money.
            </p>
         
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
