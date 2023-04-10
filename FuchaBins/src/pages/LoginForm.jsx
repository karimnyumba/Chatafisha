import React from "react";

const LoginForm = () => {
  return (
    <div className="bg-baki bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-green-400 p-10 rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-5">Login Form</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
