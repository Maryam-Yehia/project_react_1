import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>

    <div className='d-flex flex-column align-items-center justify-content-center home py-5 mt-5 text-white'>
      <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="Avatar" className='my-4' />
      <h2 className='text-uppercase'>start Framework</h2>
       <div className='text-center my-3 d-flex justify-content-center align-items-center '>
              <div className='line me-3 bg-white'></div>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff", fontSize: "1rem" }} />
              <div className='line ms-3 bg-white'></div>
        </div>
      <i className="fa-solid fa-star"></i>


      <p>Graphic Artist - Web Designer - Illustrator</p>

    </div>
    </>
  )
}
