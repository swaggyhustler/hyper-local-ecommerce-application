import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {useAuthStore } from "../store/authStore.js"
const UserDetails = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {logout} = useAuthStore();
  const handleLogout = async() => {
    await logout();
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">User Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-600">Username:</span>
            <p className="text-lg text-gray-800">{user.username}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-600">Email:</span>
            <p className="text-lg text-gray-800 break-words">{user.email}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-600">Phone:</span>
            <p className="text-lg text-gray-800">{user.phone}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-600">Role:</span>
            <p className="text-lg text-gray-800">{user.role}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-600">Email Verified:</span>
            <p className="text-lg text-gray-800">{user.isVerified ? 'Yes' : 'No'}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-600">Account Created At:</span>
            <p className="text-lg text-gray-800">{new Date(user.createdAt).toLocaleString()}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
