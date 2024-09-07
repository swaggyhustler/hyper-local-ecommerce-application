import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import bannerImage from "../../assets/bannerImage.jpg";

const ShopCard = ({ name, duration, distance, image }) => {
  return (
    <div className="w-[22%] bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-2">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-40 object-cover"
          src={image || bannerImage}
          alt="Shop"
        />
      </a>
      <div className="p-4">
        <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-800">
          {name}
        </h5>
        <div className="flex items-center mb-4 gap-4 text-gray-600">
          <div className="flex items-center">
            <FaClock className="mr-1 text-blue-500" />
            <span className="text-sm font-medium">Duration: {duration}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-1 text-red-500" />
            <span className="text-sm font-medium">Distance: {distance}</span>
          </div>
        </div>
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Check It
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ShopCard;
