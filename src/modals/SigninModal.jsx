import React, { useState } from "react";
import ModalLayout from "./ModalLayout";

function SigninModal({ open, onClose }) {
  return (
    <div>
      <ModalLayout modalIsOpen={open} closeModal={onClose}>
        <div className="px-20 pt-7 ">
          <h1 className="text-3xl font-semibold text-center text-purple underline">
            Sign in
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {/* <a href="#" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </a> */}
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center ">
            {" "}
            Don't have an account?{" "}
            <a href="#" className="font-medium text-purple hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </ModalLayout>
    </div>
  );
}

export default SigninModal;
