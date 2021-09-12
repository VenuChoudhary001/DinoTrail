import React from 'react'

import Maps from '../../Components/Maps'

import Caveman from '../../Assets/caveman.png'


const Locator=()=>{
    return (
      <>
        <div className="row g-0">
          <div className="col-4 bg-dark text-white d-flex justify-content-center flex-column align-items-center">
            <div className="caveman">
              <img src={Caveman} alt="" />
            </div>
            <div className="info">
              <span className="fw-bold">Current Location</span>: 172.3 deg N
              ,109 deg E
            </div>
            <div className="info">Currently Active:</div>
          </div>
          <div className="col map ">
            <Maps/>
          </div>
        </div>
      </>
    );
}

export default Locator