import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {  faPlus } from '@fortawesome/free-solid-svg-icons'; 


export default function Portfolio() {

  useEffect(() => {
    document.title = "Portfolio ";
  }, []); 


  function click(e){
    document.getElementById("fully").classList.remove("d-none");
    const image = e.currentTarget.querySelector('img').src;
    console.log(image);
    document.querySelector('.photo img').src = image;
    

  }

  function hidden(){
    document.getElementById("fully").classList.add("d-none");
  }





  return (
    <>
          <div className=' w-100 h-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center align-items-center d-none' id='fully' onClick={hidden}>
            <div className='photo w-50'>
              <img src="" alt="photo" />
            </div>

          </div>
    <div className="container py-5 mt-3 port position-relative">
      <h1 className='text-uppercase text-center fw-bold mt-5 text '>portfolio component</h1>
      <div className='text-center my-3 d-flex justify-content-center align-items-center '>
        <div className='line me-3'></div>
        <FontAwesomeIcon icon={faStar} color='red' className='icon'  />
        <div className='line ms-3 '></div>
      </div>
      <div className='row g-5'>
        <div className='col-lg-4 col-md-6 '>
      <div className='position-relative' onClick={click}>
        <div className=' w-100'>
          <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="home" className='rounded-3 '  />
          </div>
          <div className='position-absolute top-0 h-100 rounded-3'id='folow'>
            <div className='d-flex justify-content-center align-items-center h-100 fs-00 ' ><FontAwesomeIcon icon={faPlus} className='text-white'/></div>
          </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 '>
      <div className='position-relative' onClick={click}>
        <div className=' w-100'>
          <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="home" className='rounded-3 ' />
          </div>
          <div className='position-absolute top-0 h-100 rounded-3'id='folow'>
            <div className='d-flex justify-content-center align-items-center h-100 fs-00 '><FontAwesomeIcon icon={faPlus} className='text-white'/></div>
          </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 '>
      <div className='position-relative 'onClick={click}>
        <div className=' w-100'>
          <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="home" className='rounded-3 ' />
          </div>
          <div className='position-absolute top-0 h-100 w-100 rounded-3'id='folow'>
            <div className='d-flex justify-content-center align-items-center w-100 h-100 fs-00 '><FontAwesomeIcon icon={faPlus} className='text-white'/></div>
          </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 '>
      <div className='position-relative ' onClick={click}>
        <div className=' w-100'>
          <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="home" className='rounded-3 ' />
          </div>
          <div className='position-absolute top-0 h-100 rounded-3'id='folow'>
            <div className='d-flex justify-content-center align-items-center h-100 fs-00 '><FontAwesomeIcon icon={faPlus} className='text-white' /></div>
          </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 '>
      <div className='position-relative ' onClick={click}>
        <div className=' w-100'>
          <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="home" className='rounded-3 ' />
          </div>
          <div className='position-absolute top-0 h-100 rounded-3'id='folow'>
            <div className='d-flex justify-content-center align-items-center h-100 fs-00 '><FontAwesomeIcon icon={faPlus} className='text-white' /></div>
          </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 '>
      <div className='position-relative ' onClick={click}>
        <div className=' w-100'>
          <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="home" className='rounded-3 ' />
          </div>
          <div className='position-absolute top-0 h-100 rounded-3'id='folow'>
            <div className='d-flex justify-content-center align-items-center h-100 fs-00 '><FontAwesomeIcon icon={faPlus} className='text-white' /></div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
