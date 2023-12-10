import Image from 'next/image'
import React from 'react'
import fryingPic from "@/app/assets/frying.png"
import Link from 'next/link'

export default function Hero() {
  return (
      <main className='flex flex-row dashes px-16 pb-10 flex-wrap' >
          <div className='flex-1 min-w-fit' >
              <div className='bg-foodRed p-3 rounded-2xl flex justify-center content-center w-fit   '>
                  <div className='bg-foodYellow rounded-lg border-2 border-black border-solid p-5'>
                      <Image src={fryingPic} width={300} height={500} alt="food" className='w-[400px] h-[450px]' />
                  </div>
              </div>
          </div>
          <div className='flex-1 text-center flex justify-around items-center flex-col min-w-fit'>
              <h1 className='font-bold text-3xl '>
              Fresh & Healthy Meal PLAN 
              </h1>             
              <h2 className='text-2xl font-medium'>
              Vos repas de la semaine en 1 minute  !
              </h2>
              <Link href="/#webetter" className='bg-foodCrevet border-2 py-2 px-10 text-lg font-semibold border-black border-solid  rounded-md w-fit'>
                  Discover &nbsp; &nbsp; {">"}
              </Link>
          </div>
    </main>
  )
}
