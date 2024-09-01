// http://localhost:3000/login
// this page is responsible for rendering the login page

import { Fragment } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
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
    console.log(loginState);
    // send loginState to the server
    setLoginState({
      email: "",
      password: "",
    });
    // redirect the user to the dashboard
    navigator.push("/dashboard");
  };

  return (
    <Fragment>
      <h1>Login</h1>

      <form className=" max-w-80 border mx-auto" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </Fragment>
  );
}

export function Input({ label, name, type, value, onChange, ...props }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
