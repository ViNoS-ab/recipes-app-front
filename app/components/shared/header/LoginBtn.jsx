"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const LoginBtn = () => {
  const [user, setUser] = useState(null);
  const getProfile = async () => {
    const currentUser = localStorage.getItem("user");
    setUser(currentUser ? JSON.parse(currentUser) : null);
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/me", {
          credentials: "include"
      });
      const data = await res.json();
      if (data.success) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
      } else throw new Error(data.message);
    } catch (err) {
      console.error(err.message);
      localStorage.removeItem("user");
    }
  };

  const handleLogout = async () => {
    try {
      fetch(process.env.NEXT_PUBLIC_API_URL + "/logout", {
        method: "DELETE",
      });
      setUser(null);
      localStorage.removeItem("user");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  if (!user)
    return (
      <span className="border-2 border-black  rounded-xl  font-semibold bg-foodRed flex flex-row">
        <Link
          className="border-r border-solid border-black py-2 px-3"
          href={"#"}>
          Fre Trial
        </Link>
        <Link className="px-3 py-2" href={"/login"}>
          Login
        </Link>
      </span>
    );
  return (
    <span className="border-2 border-black  rounded-xl  font-semibold bg-foodRed flex flex-row">
      <Link className="border-r border-solid border-black py-2 px-3" href={"#"}>
        My Plannings
      </Link>
      <button className="px-3 py-2">Logout</button>
    </span>
  );
};
