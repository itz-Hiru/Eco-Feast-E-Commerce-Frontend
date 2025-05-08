import React from 'react'
import HeroBanner from '../sections/Home/HeroBanner.section'
import Categories from '../sections/Home/Categories.section'
import TopFood from '../sections/Home/TopFood.section'
import About from '../sections/Home/About.section'

const Home = () => {
  return (
    <div className="mt-10">
        <HeroBanner />
        <Categories />
        <TopFood />
        <About />
    </div>
  )
}

export default Home