// http://localhost:3000/signup
// this page is responsible for rendering the signup page
import { Fragment } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigator = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      username,
      password,
      email,
    });
    // send the data to the server
    //reset the form
    setUsername("");
    setPassword("");
    setEmail("");
    //redirect the user to the login page
    navigator.push("/login");
  }

  return (
    <Fragment>
      <h1>Signup</h1>
      <form className=" max-w-80 border mx-auto" onSubmit={handleSubmit}>
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
        <button type="submit">Signup</button>
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
        required
      />
    </div>
  );
}
