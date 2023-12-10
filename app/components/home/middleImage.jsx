import Link from 'next/link'
import React from 'react'

export const MiddleImage = () => {
  return (
      <div className='bg-foodYellow border border-black border-solid rounded-lg px-5 py-8 w-11/12 mx-auto h-80 mt-10'>
          <div className='bg-lemon bg-cover  border border-black border-solid  bg-left-bottom rounded-3xl relative w-full h-full'>
              <h2 className='absolute right-8 top-1/2 -translate-y-1/2 text-center font-semibold text-2xl '>There is no limit to the number of <br/> recipes you can add to your digital <br /> meal plan calendar </h2>
              <Link href="/recipes" className='absolute bottom-4 right-10 border-2 bg-gray-300 px-10 py-2 border-solid border-black rounded-md'>Let's GO</Link>
          </div>
    </div>
  )
}
