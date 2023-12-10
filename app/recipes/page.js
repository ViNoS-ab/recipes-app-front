import React from "react";
import { Search } from "../components/recipes/search";
import { Recipes } from "../components/recipes";



async function Page({ searchParams }) {
  return (
    <main>
      <Search />
      <Recipes title={"BREAKFAST"} query={searchParams.q}  />
      <Recipes title={"LUNCH"} query={searchParams.q}  />
      <Recipes title={"SNACK"} query={searchParams.q}  />
      <Recipes title={"DINER"} query={searchParams.q} />
      <h1 className="font-bold text-3xl text-center mb-16">OTHER</h1>
      
      <Recipes title={""} query={searchParams.q}  />
    </main>
  );
}

export default Page;
