import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {


  return (
    <>
    <footer className='w-100 text-white'>
      <div className='row py-5 text-center w-100'>
          {/* <div className=''> */}
            <div className='col-4 py-5'>
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className='col-4 py-5'>
              <h3>AROUND THE WEB</h3>
               <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap'>
                <div className=' rounded-circle border-1 border p-3 py-2 ' ><FontAwesomeIcon icon={faFacebookF} /></div>
                <div className=' rounded-circle border-1 border p-3 py-2 ' ><FontAwesomeIcon icon={faTwitter} /></div>
                <div className=' rounded-circle border-1 border p-3 py-2 ' ><FontAwesomeIcon icon={faLinkedinIn} /></div>
                <div className=' rounded-circle border-1 border p-3 py-2 ' ><FontAwesomeIcon icon={faGlobe} /></div>
              </div>

            </div>
            <div className='col-4 py-5'>
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            {/* </div> */}
          </div>
        
      </div>
    </footer>
    <div className='copyright  py-3 text-center text-white'>
      <p>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}



