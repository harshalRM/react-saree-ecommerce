import React from 'react'
import { NavLink } from 'react-router-dom'
import Category from './Category'

const Home = () => {
  return (
    <>
    <div className='home container-fluid align-items-end' style={{backgroundImage: `linear-gradient(-90deg, transparent, rgba(0,0,0,0.8)),url('images/background5.jpg')`}}>
        <div className=' p-3 justify-content-start align-items-center '>
            <h1 className='fw-bold text-white display-3 '> GLAMAREE STYLIST </h1>
            <p className='lead fw-bold text-white'>Wear Your Own Favourite Saree</p>
        </div>
        <div className='p-3 justify-content-start align-items-center '>
            <p className='lead fw-bold text-white w-50 text-justify'>Shop for Your Favourite Sarees With give category according to your choice, color, size, and wear these sarees with beautiful jewellaries to complete the look and look best among others.</p>
        </div>
        <div className='p-3 justify-content-start align-items-center bg-danger mt-4 text-white fw-bold w-25 rounded-circle text-center'>
              <h5 className='mt-4 p-2'>Special offer</h5>
              <p>20%-off</p>
        </div>
        <div className='mt-4 p-3 justify-content-start align-items-center '>
            <NavLink to="/category" className='btn btn-outline-primary text-white fw-bold p-2 w-25 border-2 border-light rounded-4 mt-5'>SHOP NOW</NavLink>
        </div>
    </div>
    <Category/>
    </>
  )
}

export default Home