import Image from "next/image";

const imageUrlPrefix = process.env.NEXT_PUBLIC_API_URL + "/static/";

export const Card = ({ image, name, ingrediants }) => {
  return (
      <div className="bg-gray-200 border border-solid border-black rounded-2xl p-8 mx-20 my-14 ">
          <div className=" flex flex-col items-center -translate-y-20">
              
          <Image src={imageUrlPrefix + image} width={150} height={150} alt={name} className="rounded-full aspect-square  "  />
              <h4 className="text-md mt-2">{name}</h4>
              <h2 className="font-bold mt-4">RECETTE</h2>
              <div className="flex flex-wrap mt-2 ">
                  {ingrediants.map(({name , id}, index) => (
                      <span key={id} className="max-w-20 bg-foodRed border-2 rounded-2xl border-black border-solid mx-2 px-2">
                          {name}
                     </span>
                  ))} 
                
              </div>
          </div>
    </div>
  );
};
