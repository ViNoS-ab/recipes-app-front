import { Card } from "./card"

async function getRecipes(query, timing) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/recipes?q=${query || ''}${timing ? "&time=" + timing : ""}`
       , {next: {revalidate: 0}});
      const data = await res.json();
      if (!data.success) throw new Error(data.message)
      return data.recipes;
    } catch (err) {
      console.log(err.message);
      return [];
    }
  }

export const Recipes = async ({ title , query }) => {
  const recipes = await getRecipes(query, title);
    if (!recipes.length) return null
  return (
      <div className='px-10 flex flex-col items-center justify-center my-10 dashes'>
          <h1 className="font-bold text-3xl mb-16">{ title}</h1>
          <div className="flex flex-wrap justify-center">
              {recipes.map((recipe , i ) => <Card key={i} {...recipe} />) }
        </div>
    </div>
  )
}
