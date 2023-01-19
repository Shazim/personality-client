import React, { useState } from "react";
import ModalLayout from "./ModalLayout";
import { useFormik } from "formik";
import { generateSchema } from "../validation";
import { signIn } from "api";
import { setCookie } from "cookies/Cookies";

function SigninModal({ open, onClose }) {
  const initialValues = {
    password: "",
    email: "",
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
      const result = await signIn({
        email: values.email,
        password: values.password,
        grant_type: "password",
      });
      if (result) {
        console.log("heelo", result);
        setCookie("token", result?.data?.access_token);
      }
    },
    validationSchema: generateSchema(initialValues),
  });
  return (
    <div>
      <ModalLayout modalIsOpen={open} closeModal={onClose}>
        <div className="px-20 pt-7 ">
          <h1 className="text-3xl font-semibold text-center text-purple underline">
            Sign in
          </h1>
          <div className="mt-6">
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
                placeholder="Enter New Password"
                name="password"
                type="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-purple bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="error-text">
                {touched.password && errors.password}
              </p>
            </div>
            {/* <a href="#" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </a> */}
            <div className="mt-6">
              <button
                onClick={handleSubmit}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </div>

          <p className="mt-8 text-xs font-light text-center ">
            {" "}
            Don't have an account?{" "}
            <div className="font-medium text-purple hover:underline">
              Sign up
            </div>
          </p>
        </div>
      </ModalLayout>
    </div>
  );
}

export default SigninModal;
