import React, { useState } from "react";

import ModalLayout from "./ModalLayout";
import { useFormik } from "formik";
import { generateSchema } from "../validation";
import { signIn } from "api";
import { setCookie } from "cookies/Cookies";
import { SignUpModal } from "modals";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SigninModal({ open, onClose, setAccessToken }) {
  const initialValues = {
    password: "",
    email: "",
  };

  const [signUpModal, setSignUpModal] = useState(false);
  const history = useNavigate();

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      onSubmit: async (values) => {
        const result = await signIn({
          email: values.email,
          password: values.password,
          grant_type: "password",
        });

        if (result) {
          setCookie("token", result?.data?.access_token);
          setAccessToken(result?.data?.access_token);
          toast.success("Login Successfully");
          onClose();
          history("/test");
        }
      },
      validationSchema: generateSchema(initialValues),
    });

  return (
    <>
      <div>
        <ModalLayout modalIsOpen={open} closeModal={onClose}>
          <div className="px-20 pt-7 ">
            <h1 className="text-3xl font-semibold text-center">Sign in</h1>
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
                  placeholder="Enter your email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                />
                <p className="error-text">{touched.email && errors.email}</p>
              </div>
              <div className="mb-2">
                <label for="password" className="block text-sm font-semibold">
                  Password
                </label>
                <input
                  placeholder="Enter your password"
                  name="password"
                  type="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2  bg-white border rounded-md "
                />
                <p className="error-text">
                  {touched.password && errors.password}
                </p>
              </div>
              <div className="mt-6">
                <button
                  onClick={handleSubmit}
                  className="w-full px-4 py-2 tracking-wide bg-black font-bold text-white transition-colors duration-200 transform rounded-md "
                >
                  Login
                </button>
              </div>
            </div>

            <p className="mt-8 text-xs font-light text-center ">
              {" "}
              Don't have an account?{" "}
              <div
                className="font-medium  hover:underline cursor-pointer"
                onClick={() => {
                  setSignUpModal(true);
                  onClose();
                }}
              >
                Sign up
              </div>
            </p>
          </div>
        </ModalLayout>
      </div>
      <SignUpModal open={signUpModal} onClose={() => setSignUpModal(false)} />
    </>
  );
}

export default SigninModal;
