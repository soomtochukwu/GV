"use client";
// http://localhost:3000/login
// this page is responsible for rendering the login page
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import InputButton from "../../../components/InputButton";
import LoginIcon from "../../../components/LoginIcon";
export default function Login() {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setLoginState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: loginState.email,
      password: loginState.password,
    };
    console.log(data);
    // Send loginState to the server

    setLoginState({
      email: "",
      password: "",
    });

    // Redirect the user to the dashboard
    router.push("/dashboard");
  };

  return (
    <Fragment>
      <div className="min-h-screen flex">
        {/****************************Left side with form ********************************/}
        <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
          <div className="w-full max-w-md">
            <div className="flex justify-center mb-6">
              {/* Placeholder for the logo */}
              <Image
                src="/welcomeback.svg" // Replace with the actual logo path
                alt="Governator Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-center mb-2 text-[#0E0E2C]">
              Welcome Back
            </h1>
            <p className="text-center text-black mb-6">
              You can continue from where you stopped
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputButton
                label="Username or Email"
                name="email"
                type="email"
                value={loginState.email}
                onChange={handleChange}
                icon={<LoginIcon type="email" />}
              />
              <InputButton
                label="Password"
                name="password"
                type="password"
                value={loginState.password}
                onChange={handleChange}
                icon={<LoginIcon type="password" />}
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#0E0E2C] text-white rounded-md mt-[1rem] text-sm font-medium"
              >
                LOGIN
              </button>
            </form>
            <div className="relative flex justify-center text-sm mt-4 text-gray-400">
              <span className="px-2 bg-white">OR</span>
            </div>
            <button
              type="button"
              className="w-full py-3 mt-4 border border-gray-300 text-sm font-medium rounded-md text-[#0E0E2C] bg-white hover:bg-gray-100"
            >
              CONNECT WALLET
            </button>
            <div className="mt-6 text-center text-sm">
              <span className="text-black">
                If you do not have an account with us,
                <Link
                  href="/signup"
                  className="text-green-600 hover:text-green-500"
                >
                  Register here
                </Link>
              </span>
            </div>
          </div>
        </div>

        {/******************************  Right side with image ******************************/}
        <div className="hidden lg:flex flex-1 bg-gray-900 text-white items-center justify-center">
          <div className="w-full max-w-lg">
            <Image
              src="/Hidden-mining-bro2.svg" // We are going to replace the image later
              alt="Governator image"
              width={1000}
              height={1000}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
