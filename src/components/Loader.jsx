import React from 'react'
import loader from '../assets/images/ZKZg.gif'
import './Loader.css'

const CustomLoader = () => {
  return (
    <>
        <div className="loading">
          <img src={loader} alt="" />
        </div>
    </>
  )
}

export default CustomLoader