import Image from 'next/image'
import React from 'react'

const Card = ({text , image}) => {
  return (
      <div className='bg-foodCrevet border-2  border-black border-solid rounded-md flex flex-col items-center justify-center p-8 w-44 '>
          <Image className='mb-10 flex-1' src={image} width={90} height={90} alt={text} />
          <p className='flex-1 text-center'>{text}</p>
    </div>
  )
}

export default Card