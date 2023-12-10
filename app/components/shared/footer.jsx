import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export  function Footer() {
  return (
    <footer className="w-full justify-between  items-start flex flex-wrap text-black font-medium     mt-20   bg-foodCrevet pb-8 pt-16 pl-24 pr-14">
      <div className="-mt-4">
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
        <div className=" pl-12 p-5 tracking-wider">
          <p className="font-normal my-4">
          Fresh & Healthy Meal PLAN <br /> your recipes in 1 min!
          </p>

          <p className="p-3 pl-0 font-semibold">Follow us</p>
          <div className="flex space-x-5">
            <FaFacebookF className="h-5 cursor-pointer" />
            <FaInstagram className="h-5 cursor-pointer" />
            <FaTwitter className="h-5 cursor-pointer" />
            <FaLinkedin className="h-5 cursor-pointer" />
          </div>
        </div>
      </div>
      {footerLinks.map((link, index) => (
        <Links key={index} links={link.links} title={link.title} />
      ))}
    </footer>
  );
}

const Links = ({ links, title }) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-lg ">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li className="p-2 font-normal text-base" key={index}>
            {Array.isArray(link) ? (
              <Link href={link[1]}>{link[0]}</Link>
            ) : (
              <p>{link}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const footerLinks = [
  {
    title: "Explore",
    links: [
      ["Home", "/#"],
      ["about", "/#webetter"],
      ["Recipes", "/recipes"],
  
    ],
  },
  {
    title: "About Us",
    links: ["Who Are We", "Our Vision", "Terms And Conditions", "FAQ"],
  },
  {
    title: "Contact Us",
    links: [
      "02, Rue Didouche Mourad, Alger, Algérie",
      ["contact@goodfood.dz", "mailto:contact@goodfood.dz"],
      "+213 01 23 45 67",
    ],
  },
];