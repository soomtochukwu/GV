import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col p-3 *:m-2 items-center">
      <h1 className="text-5xl text-center">Governator</h1>
      <div className="space-x-8 ">
        <Link href={"/login"}>Login</Link>
        <Link href={"/signup"}>Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
