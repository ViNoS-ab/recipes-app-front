import React from 'react'
import Card from './card'

export const BasedOn = () => {
  return (
      <section className='flex flex-col items-center justify-center mt-10'>
      <h1 className="font-bold text-6xl">Based On </h1>
      <div className='flex flex-row justify-between mt-10 px-32 w-full flex-wrap'>
        <Card text="Your scheduel" image="/images/home/calendar.png" />
        <Card text="Your Budget" image="/images/home/money.png" />
        <Card text="Any food allergies in your household" image="/images/home/search.png" />
        <Card text="Everyone likes !" image="/images/home/heart.png" />
      </div>
    </section>
  )
}
