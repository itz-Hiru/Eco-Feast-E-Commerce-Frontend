import React from 'react'
import HeroBanner from '../components/Home/HeroBanner.component'
import Categories from '../components/Home/Categories.component'

const Home = () => {
  return (
    <div className="mt-10">
        <HeroBanner />
        <Categories />
    </div>
  )
}

export default Home