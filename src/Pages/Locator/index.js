import React, { useContext } from 'react'

import Maps from '../../Components/Maps'
import Lines from '../Loading/lines'
import Caveman from '../../Assets/caveman.png'
import USER_CONTEXT from '../../Utility'
import { useHistory } from 'react-router'


const Locator=()=>{
  const {position,socket,setCheckIn}=useContext(USER_CONTEXT);
  const history=useHistory();

  const handleLogOut=()=>{
     socket.emit('log-out',position)
     setCheckIn(false)
     history.push('/')
  }

    return (
      <>
        <div className="row g-0">
          <div className="col-4 bg-dark text-white d-flex justify-content-center flex-column align-items-center">
            <div className="caveman">
              <img src={Caveman} alt="" />
            </div>
            
            {position?(
              <>
            <div className="info">
              <span className="fw-bold">Current Location</span>: {position.latitude},{position.longitude}
            </div>
            <div className="info text-info">Currently Active
            </div></>):(<Lines/>)}
            <div className="">
              <button className="btn btn-success btn-sm my-4 fw-bold" onClick={handleLogOut}>Check out</button>
            </div>
          </div>
          <div className="col map ">
            <Maps/>
          </div>
        </div>
      </>
    );
}

export default Locator