import React from 'react'
import Skull from "../Assets/dinosaur-skull.png";
const Navbar = () => {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <span class="navbar-brand fw-bold d-flex justify-content-center  fs-3" href="#">
              <img src={Skull} className='logo mx-1' alt="" />
              <span className="text-info">DINO</span>
              <span className="text-white">TRAIL</span>
            </span>
          </div>
        </nav>
      </div>
    );
}

export default Navbar
