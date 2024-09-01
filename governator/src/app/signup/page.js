"use client"


// http://localhost:3000/signup
// this page is responsible for rendering the signup page
// import { Fragment } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigator = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      username,
      password,
      email,
    };
    String(data);
    console.log(data);
    // send the data to the server
    //reset the form
    setUsername("");
    setPassword("");
    setEmail("");
    //redirect the user to the login page
    navigator.push("/login");
  }

  return (
    <div className="shadow-2xl bg-gray-800 max-w-[25rem] m-auto text-left rounded-md px-4 py-2">
      <h1 className="text-3xl mb-[2rem]">Sign Up</h1>
      <form className="" onSubmit={handleSubmit}>
        <Input
          label="Username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="btn bg-[#124212] text-green-50 mt-[1rem]"
        >
          Sign Up
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
