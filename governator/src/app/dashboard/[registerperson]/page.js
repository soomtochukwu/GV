"use client";

import { useParams } from "next/navigation";

async function RegisterPerson() {
  const param = useParams();
  const id = param.registerperson;
  try {
    const response = await fetch("/" + id);
    const poll = await response.json();
    return (
      <div>
        <h1>{poll}</h1>
        <p>{id}</p>
      </div>
    );
  } catch (err) {
    console.log(err);
  }
}

export default RegisterPerson;
