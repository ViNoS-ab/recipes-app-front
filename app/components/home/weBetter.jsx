import Image from "next/image";
import React from "react";



export const WeBetter = () => {
  return (
    <section className="dashes flex justify-center items-center mt-16 relative flex-col" id="webetter">
      <h1 className="font-bold text-4xl">Why we are better than the others </h1>
      <div className="bg-foodRed  rounded-xl w-11/12 my-20 pb-28 flex flex-col justify-center items-center">
        <p className="text-center w-1/2 tracking-wide whitespace-pre-wrap  text-xl m-5  ">
                  {`There’s Why we are better than the
                
others

There’s magic in being able to create

your own meal plans . You get to

decide what to eat from`}
              </p>
              
              <div className="relative flex flex-row text-lg font-medium mt-16">
                  <div className="pt-16 mr-16 relative">
                      <p className="relative -left-10">Breakfast</p>
                      <Image className="absolute top-4 -right-20" src="/images/home/arrow1.png" width={130} height={200} alt="arrow" />
                      <Image src="/images/home/breakfast.png" alt="breakfast" width={150} height={150} />
                  </div>
                  <div className="relative mr-16">
                  <Image src="/images/home/lunch.png" alt="lunch" width={150} height={150} />
                      <p className="mt-2">Lunch</p>
                      <Image className="absolute bottom-[7.8rem] -right-10" src="/images/home/arrow2.png" width={120} height={150} alt="arrow" />
                      
                  </div>
                  <div className="mt-48 mr-16 -ml-16 ">
                      <Image src="/images/home/snack.png" alt="snack" width={150} height={150} />
                      <p className="relative  bottom-7 left-32">Snack</p>
                        <Image className="absolute top-5 right-16" src="/images/home/arrow3.png" width={300} height={400} alt="arrow" />
                  </div>
                  <div className="right-10 relative">
                      <Image src="/images/home/dinner.png" alt="dinner" width={150} height={150} />
                      <p className="top-24 -right-10 absolute">Dinner</p>
                      
                
                  </div>
              </div>
      </div>
    </section>
  );
};
