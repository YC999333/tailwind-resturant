import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [serverError, setServerError] = useState("");
  const history = useHistory();

  const onSubmit = async (data) => {
    let formData = JSON.stringify({
      email: data.email,
      username: data.username,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
    try {
      const response = await axios("https://localhost:5000/auth/signup", {
        headers: { "content-type": "application/json" },
        data: formData,
        method: "PUT",
      });

      if (response.status === 200 || response.status === 201) {
        history.push("/signin");
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        setServerError(error.response);
      }
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <div className="container max-w-sm mx-auto mt-10 md:mt-20 flex flex-col items-center justify-center px-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white px-6 py-4 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            {serverError ? (
              <p className="text-red-500 mb-2">{serverError}</p>
            ) : null}
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="User Name"
              {...register("username", {
                required: "Required!",
                minLength: {
                  value: 2,
                  message: "Min length is 2",
                },
              })}
            />
            {errors.username && (
              <p className="text-red-500 mb-2">{errors.username.message}</p>
            )}

            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Email"
              {...register("email", {
                required: "Required!",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 mb-2">{errors.email.message}</p>
            )}

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Password"
              {...register("password", {
                required: "Required!",
                minLength: {
                  value: 5,
                  message: "Min length is 5",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 mb-2">{errors.password.message}</p>
            )}
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Required!",
                minLength: {
                  value: 5,
                  message: "Min length is 5",
                },
              })}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4 p-3">
              By signing up, you agree to the {""}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and {""}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </form>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <a
            className="no-underline border-b border-blue text-blue"
            href="/sign-in/"
          >
            {""} Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default SignUp;
