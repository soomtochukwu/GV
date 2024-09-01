"use client"

// http://localhost:3000/login
// this page is responsible for rendering the login page
// import { Fragment } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    //wallet: "",
  });
  const navigator = useRouter();

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
    String(data);
    console.log(data);
    // send loginState to the server
    setLoginState({
      email: "",
      password: "",
    });
    // redirect the user to the dashboard
    navigator.push("/dashboard");
  };

  return (
    <div
      div
      className="bg-[#121212] shadow-2xl max-w-[25rem] m-auto text-left rounded-md px-4 py-2"
    >
      <h1 className="text-3xl mb-[2rem]">Login</h1>
      <form className="" onSubmit={handleSubmit}>
        <Input
          label="email"
          name="email"
          type="email"
          value={loginState.email}
          onChange={handleChange}
        />
        <Input
          label="password"
          name="password"
          type="password"
          value={loginState.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn bg-[#124212] text-green-50 mt-[1rem]"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export function Input({ label, name, type, value, onChange, ...props }) {
  return (
    <div className="flex gap-2 flex-col py-1 text-left ">
      <label className="capitalize text-blue-200">{label}</label>
      <input
        className="w-full rounded-md p-2 bg-white text-slate-800 border-none outline-0"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
        required
      />
    </div>
  );
}
