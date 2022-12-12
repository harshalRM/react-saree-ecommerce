import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div class="container-fluid py-4 bg-dark">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center text-white">
            <h4 class="fw-bold  foot">© 2021 Company, Glamaree</h4>
          </div>
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex text-white">
            <li class="ms-3 display-5"><FaFacebook/></li>
            <li class="ms-3 display-5"><FaTwitter/></li>
            <li class="ms-3 display-5"><FaInstagram/></li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default Footer