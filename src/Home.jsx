import React from 'react'
import Hero from './components/Hero'
import All from './components/All'
import CarouselComponent from './components/CarouselComponent'
import CarouselComponent2 from './components/CarouselComponent2'
import CarouselComponent3 from './components/CarouselComponent3'
import Navbar  from './components/Navbar'
import Footer from './components/Footer'
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <Hero/>
    <All/>

    <div className=''>
    <div className="popular1">
                <h3>Popular</h3>
                <p className='construction3'>Sports</p>
            </div>
            <CarouselComponent/>
            <div className="popular1">
                <h3>Popular</h3>
                <p className='construction4'>Health Care</p>
            </div>
            <CarouselComponent2/>
            <div className="popular1">
                <h3>Popular</h3>
                <p className='construction5'>Entertainment</p>
            </div>
            <CarouselComponent3/>

  
    
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home