import React from 'react'
import HeroBanner from '../sections/Home/HeroBanner.section'
import Categories from '../sections/Home/Categories.section'
import TopFood from '../sections/Home/TopFood.section'

const Home = () => {
  return (
    <div className="mt-10">
        <HeroBanner />
        <Categories />
        <TopFood />
    </div>
  )
}

export default Home