"use client";

import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import Link from "next/link";
import {  useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isToast, setIsToast] = useState(false);
  const router = useRouter()
  const ref = useRef(null)

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        ref.current.style.backgroundColor = "green"
        ref.current.textContent = "success: Login Successful !"
        setIsToast(true)
        setTimeout( () =>{ router.push("/")} , 2000)
      }
      else {
        ref.current.style.backgroundColor = "red"
        ref.current.textContent = "Error: " + data.message
        setIsToast(true)
      }
    } catch (err) {
      console.log(err);
      ref.current.style.backgroundColor = "red"
      ref.current.textContent = "Error: there was an error logging in"
      setIsToast(true)
    }
    finally {
      setTimeout(() => {setIsToast(false)} , 3000)
    }
  };

  return (
    <main className="relative border-black border-4 border-solid w-screen h-screen flex justify-items-stretch">
      <div className="border-r-4  border-black w-7/12 ">
        <div className="mt-5 ml-10 text-center inline-block">
          <h1 className="uppercase font-bold text-5xl mb-9">welcome back !</h1>
          <span>
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-500">
              sign up
            </Link>
          </span>
        </div>
        <form onSubmit={handleSubmit} className="text-xl p-10 mt-6 w-fit">
          <label>
            <p>EMAIL</p>
            <input
              type="text"
              value={email}
              autoComplete=""
              placeholder="Enter  your email..."
              onChange={e => setEmail(e.target.value)}
              className="px-3 py-2 rounded-3xl border-2 border-black border-solid mt-3 mb-9 bg-gray-200 w-full"
            />
          </label>
          <label>
            <p>PASSWORD</p>
            <input
              type="password"
              value={password}
              autoComplete="current-password"
              placeholder="password"
              onChange={e => setPassword(e.target.value)}
              className="px-3 py-2 rounded-3xl border-2 border-black border-solid mt-3  bg-gray-200 w-full "
            />
          </label>
          <div className="mt-6 text-base flex space-x-24">
            <label className="flex items-center ">
              <input
                type="checkbox"
                name="remember"
                className=" appearance-none rounded-full mr-3 border transition-all w-4 h-4 border-black checked:border-white  bg-white checked:bg-foodRed  checked:ring ring-foodRed ring-offset-[-1px]"
              />
              <p>remember me</p>
            </label>
            <p className="text-blue-500">forgot password ?</p>
          </div>
          <button className="border-2 border-black border-solid rounded-3xl bg-foodRed text-white px-6 py-2 w-full mt-7">
            Sign in
          </button>
        </form>
      </div>
      <Image
        src="/images/login/food.png"
        priority
        alt="food"
        width={250}
        height={250}
        className="absolute left-[58%] -translate-x-1/2 top-1/2 -translate-y-1/2 h-64 w-auto"
      />
      <div className="w-5/12 bg-foodRed ">
        <Link href="/" className="absolute bottom-3 right-3">
          <Image
            src={logo}
            width={"auto"}
            height={90}
            alt="good food"
            priority={true}
            placeholder="empty"
          />
        </Link>
      </div>
      <div ref={ref} className={`${isToast ? "-translate-y-[120%]":"translate-y-5"} transition-all absolute z-10 left-1/2 -translate-x-1/2 text-white rounded-2xl px-4 py-3`} ></div>
    </main>
  );
};
