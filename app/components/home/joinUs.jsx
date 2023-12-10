"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const JoinUs = () => {
  const [email, setEmail] = useState("");
  return (
    <section className="mt-10 px-20" id="contact-us">
      <div className="bg-foodRed border border-black border-solid rounded-lg w-7/12 mx-auto py-10 px-10 ">
        <h1 className="text-white text-center text-3xl leading-6 inline-block ">
          JOIN US NOW FOR MORE <br /> INFOMATION
        </h1>
        <div className="mt-16 mb-8 flex justify-between">
          <span className=" w-fit  bg-white rounded-3xl mt-5 py-1 text-black flex flex-row">
            <Image
              src="/images/home/Email.png"
              alt="email"
              className="pr-1 pl-3 w-12 h-10"
              width={20}
              height={20}
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="outline-none bg-transparent"
              placeholder="Enter your email"
            />
          </span>
          <button
            className={`bg-blue-600 text-white font-semibold px-5 py-2 rounded-3xl mt-5 inline-block `}>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};
