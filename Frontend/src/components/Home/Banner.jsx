import React from "react";
import bannerImage from "../../assets/bannerImage.jpg"
const Banner = () => {
  return (
    <section
      className="relative " style={{ backgroundImage: `url(${bannerImage})`, // Set the background image
      backgroundSize: 'cover', 
      backgroundPosition: 'center', }}
    >
      <div className="absolute inset-0 bg-gray-800/75 sm:bg-transparent sm:from-gray-800/95 sm:to-gray-800/25 sm:bg-gradient-to-r"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Find the Best Shops for

            <strong className="block font-extrabold text-[#EC1B24]"> Your Desired Products </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl sm:leading-relaxed">
            Search for your favorite items and discover nearby stores that have them in stock.
            Enjoy fast, local shopping with the best deals and reliable service.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-[#ec1b24] px-12 py-3 text-sm font-medium text-white shadow   sm:w-auto"
            >
              Search Product
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium  hover:border-[#EC1B24]  shadow focus:outline-none focus:ring sm:w-auto"
            >
              Find Nearby Shops
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
