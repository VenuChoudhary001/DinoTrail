import React, {useEffect,useState } from 'react'
import { io } from "socket.io-client";
const USER_CONTEXT = React.createContext();
const API = "https://dino-trail.herokuapp.com";

export const PROVIDER= ({children})=>{
     const socket = io("https://dino-trail.herokuapp.com");
    
    const [position,setPosition]=useState();
    const [list,setList]=useState([]);
    const [err,setErr]=useState()
    const [checkIn,setCheckIn]=useState(false);
    useEffect(()=>{
       if(position){
         socket.emit("recieve-location", position);
       }
       if(!position){
         const getData=async ()=>{
            let res=await fetch(`${API}/locations`);
         
           let data = await res.json();
           setList(data);
         }
         getData()
       }
    },[position])
    socket.on('send-location',pos=>{
      setList([...list,pos])
    })
    socket.on('active',arr=>{
      setList([...arr])
    })
    return (
      <USER_CONTEXT.Provider
        value={{
          checkIn,
          setCheckIn,socket,
          position,
          list,
          setList,
          setPosition,
          err,
          setErr,
        }}
      >
        {children}
      </USER_CONTEXT.Provider>
    );
}

export default USER_CONTEXT;