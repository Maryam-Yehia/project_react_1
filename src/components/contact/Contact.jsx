import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function Contact() {


    useEffect(() => {
      document.title = "Contact ";
    }, []); 
  


  return (
    <>

    <div className='contact d-flex justify-content-center align-items-center flex-column '>
      <h1 className='text-uppercase fw-bold text-center mt-5'>contact section</h1>
        <div className='text-center my-3 d-flex justify-content-center align-items-center '>
              <div className='line me-3'></div>
              <FontAwesomeIcon icon={faStar} style={{ color: "#2C3E50", fontSize: "16px" }} />
              <div className='line ms-3 '></div>
        </div>

      <form className='my-5 mx-3  '>
        <div className="form-floating mb-4">
          <input type="text" className="form-control w-100  " id="Name" placeholder="name" />
          <label htmlFor="Name" className="text-secondary">userName</label>
        </div>
        <div className="form-floating mb-4">
          <input type="text" className="form-control w-100" id="Age" placeholder="age" />
          <label htmlFor="Age" className="text-secondary">userAge </label>
        </div>
        <div className="form-floating mb-4">
          <input type="email" className="form-control w-100" id="Email" placeholder="name@example.com" />
          <label htmlFor="Email" className="text-secondary">userEmail</label>
        </div>
        <div className="form-floating mb-4">
          <input type="password" className="form-control w-100" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword" className="text-secondary">userPassword</label>
        </div>
        <button type="submit" className="btn btn-success ">send Message</button>


      </form>



    </div>


    </>
  )
}
