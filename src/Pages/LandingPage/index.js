import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import USER_CONTEXT from '../../Utility';

import Dino from './Dino.png'

const Landing=()=>{
  const {setCheckIn}=useContext(USER_CONTEXT);
    return (
      <>
        <section className="hero py-4 text-white bg-dark">
            <div className="container">

          <div className="row">
              <div className="col-12 offset-md-2 col-md-5">
                  <img src={Dino} className='img' alt="" />
              </div>
            <div className="col-12  text-md-justify col-md-4 d-flex flex-column justify-content-center">
              <div className=" display-2 fw-bold">
                <span className="text-info">DINO</span>
                <span className="">TRAIL</span>
              </div>
              <div className="h1">
               <span>
               Hurry ! Find out the nearest DINO and save your life{" "}
                   </span> 
              </div>
              <div className="my-2">
                <NavLink to='/locator'>

                    <button className="btn btn-info text-white btn-lg fs-4" onClick={()=>setCheckIn(true)}>CHECK IN NOW</button>
                </NavLink>
              </div>
            </div>
          </div>
            </div>
        </section>
      </>
    );
}

export default Landing;