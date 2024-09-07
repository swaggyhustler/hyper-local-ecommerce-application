import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import bannerImage from "../../assets/bannerImage.jpg"
const ShopCard = ({ name, duration, distance, image }) => {
  return (
    <div className="w-[25%] bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg" src={bannerImage} alt="Shop" />
      </a>
      <div className="p-5">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
        {name}
        </h5>
        <div className='flex gap-5'>
                <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
                <FaClock className="mr-2" />
                <span>Duration: {duration}</span>
                </div>
                <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
                <FaMapMarkerAlt className="mr-2" />
                <span>Distance: {distance}</span>
                </div>
        </div>
        
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Check It
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
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
