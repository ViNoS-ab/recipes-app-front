"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export const Search = () => {
  const searchParams = useSearchParams();
  const [text, setText] = useState(searchParams.get("q") || "");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/recipes?q=${text}`);
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <h1 className="italic text-lg mb-4">Find all our recipes here!</h1>
      <span className="w-1/2 max-w-xl rounded-3xl border border-black border-solid flex  overflow-hidden">
        <span className="bg-foodCrevet text-lg border-r border-black border-solid px-3 py-1 ">
          Recipes
        </span>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          className="bg-gray-100 w-full px-3 py-1 text-lg outline-none"
          onKeyDown={e => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <IoSearchOutline
          className="text-2xl h-10 w-12 font-bold bg-gray-100 px-1  text-foodRed cursor-pointer"
          onClick={handleSearch}
          title="search"
          role="button"
          aria-label="search"
          tabIndex={0}
        />
      </span>
    </div>
  );
};
