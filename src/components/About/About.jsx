import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function About() {

    useEffect(() => {
      document.title = "About ";
    }, []); 
  

  return (
    <>
    <div className='about py-5 mt-5 d-flex flex-column justify-content-center align-items-center text-white'>
      <h1 className='text-uppercase text-center fw-bold mb-0'>about component</h1>
      <div className='text-center my-3 d-flex justify-content-center align-items-center '>
        <div className='line me-3 bg-white'></div>
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff", fontSize: "1rem" }} />
        <div className='line ms-3 bg-white'></div>
      </div>
      <div className='container d-flex justify-content-center align-items-center flex-md-column flex-sm-column flex-lg-row g-5'>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>


    </div>
   
    </>
  )
}
