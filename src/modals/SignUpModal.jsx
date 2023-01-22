import React from "react";
import ModalLayout from "./ModalLayout";
import { useFormik } from "formik";
import { generateSchema } from "../validation";
import { signUp } from "api";
import { toast } from "react-toastify";

function SignUpModal({ open, onClose }) {
  const initialValues = {
    password: "",
    email: "",
    confirm: "",
  };
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      onSubmit: async (values) => {
        const result = await signUp({
          user: {
            email: values.email,
            password: values.password,
            password_confirmation: values.confirm,
          },
        });
        if (result?.data?.error) {
          toast.error("email has already taken");
        } else if (result?.data?.user) {
          toast.success("user is created");
          onClose();
        }
      },
      validationSchema: generateSchema(initialValues),
    });
  return (
    <div>
      <ModalLayout modalIsOpen={open} closeModal={onClose}>
        <div className="px-20 pt-7 ">
          <h1 className="text-3xl font-semibold text-center  underline">
            Sign up
          </h1>

          <div className="mb-2">
            <label for="email" className="block text-sm font-semibold ">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-md "
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
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md "
            />
            <p className="error-text">{touched.password && errors.password}</p>
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              value={values.confirm}
              onBlur={handleBlur}
              onChange={handleChange}
              name="confirm"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md "
            />
            <p className="error-text">{touched.confirm && errors.confirm}</p>
          </div>

          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="w-full px-4 py-2 tracking-wide bg-black font-bold text-white transition-colors duration-200 transform  rounded-md"
            >
              Signup
            </button>
          </div>
        </div>
      </ModalLayout>
    </div>
  );
}

export default SignUpModal;
