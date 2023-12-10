import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/app/assets/logo.svg";
import { LoginBtn } from "./LoginBtn";

const Header = () => {
    return (
        <header className={`dashes flex flex-row justify-between items-center px-4 py-2 `}>
      <Link href="/">
        <Image
          src={logo}
          width={"auto"}
          height={70}
          alt="good food"
          priority={true}
          placeholder="empty"
        />
            </Link>
            <nav className="flex flex-row content-center space-x-5 capitalize font-bold">
                <Link className="p-2" href={"/"}>Home</Link>
                <Link className="p-2" href={"/recipes"}>Recipes</Link>
                <Link className="p-2" href={"/#aboutUs"}>about us</Link>
                <Link className="p-2" href={"#"}>FAQ</Link>
                <Link className="p-2" href={"/#contact-us"}>contact us</Link>
            </nav>
      <LoginBtn />
    </header>
  );
};

export { Header as Navbar};
