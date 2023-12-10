import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const features = ["MEAL PLANING CALENDER" , "ONLINE RECIPE ORGANIZER" , "AUTOMATED SHOPPINGL LIST" , "SEARCH FOR RECIPES BASED ON TIME", "ADD PERSONAL RECIPES"]

export const PlanCard = ({name , available , price}) => {
  return (
      <div className='bg-foodRed border-2 border-solid border-black rounded-md p-5 flex flex-col items-center justify-between w-80 mx-10 my-10 ' >
          <h2 className='font-medium text-md mx-auto'>{name}</h2>
          <div className='flex flex-col items-start'>
              
          {features.map((feature, i) => (
              <div className='flex flex-row items-baseline relative left-0' key={i}>
                <Image src={`/images/home/${available[i]? "check": "no"}.png`} className='w-5 h-5 relative top-1 m-2' width={20} height={20} alt="check" />
            <span  className={`flex items-center mt-5 `}>{feature} </span>
              </div>
          ))}
          </div>
          
        <span className='font-semibold text-5xl mt-5'>{price && price + "$"}</span>
          
          <div className='w-full flex justify-center mt-4'>
          <Link href="/login" className='border-2 bg-gray-300 px-3 py-2 border-solid border-black rounded-md'>GET STARTED</Link>
          </div>
      </div>
  )
}
