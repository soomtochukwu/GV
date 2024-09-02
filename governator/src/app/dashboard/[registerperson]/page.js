"use client";

import { useParams } from "next/navigation";

function RegisterPerson({ poll }) {
  return <div>{poll}</div>;
}

export default RegisterPerson;

export  async function getSticProps()  {
  const param = useParams();
  const id = param.registerperson;
  try {
    const response = await fetch("/" + id);
    const data = await response.json();
    return {data: poll};
  } catch (err) {
    console.log(err);
  }
}
