import React, { useState } from "react";
import ModalLayout from "./ModalLayout";
import { useFormik } from "formik";
import { generateSchema } from "../validation";
import { signUp } from "api";

function SignUpModal({ open, onClose }) {
  const initialValues = {
    password: "",
    email: "",
    confirmPassword: "",
  };
  const {
    values,
    errors,
    touched,
    setFieldError,
    setFieldTouched,
    handleChange,
    handleSubmit,
    handleReset,
    handleBlur,
  } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log("heelo", values);
      const result = await signUp({
        email: values.email,
        password: values.password,
        password_confirmation: values.confirmPassword,
      });
      if (result) {
        console.log("heelo", result);
      }
    },
    validationSchema: generateSchema(initialValues),
  });
  return (
    <div>
      <ModalLayout modalIsOpen={open} closeModal={onClose}>
        <div className="px-20 pt-7 ">
          <h1 className="text-3xl font-semibold text-center text-purple underline">
            Sign up
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
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-purple bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="error-text">{touched.email && errors.email}</p>
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
                placeholder="Enter New Password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-purple bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="error-text">
                {touched.password && errors.password}
              </p>
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Confirm Password
              </label>
              <input
                type="confirmPassword"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-purple bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="error-text">
                {touched.confirmPassword && errors.confirmPassword}
              </p>
            </div>
            {/* <a href="#" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </a> */}
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Signup
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

export default SignUpModal;
