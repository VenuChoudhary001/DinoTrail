import React, {useEffect,useState } from 'react'
import { io } from "socket.io-client";
const USER_CONTEXT = React.createContext();


export const PROVIDER= ({children})=>{
    const socket=io('http://localhost:5000')
    const [position,setPosition]=useState();
    const [list,setList]=useState([]);
    const [err,setErr]=useState()
    useEffect(()=>{
       if(position){
         socket.emit("recieve-location", position);
       }
       if(!position){
         const getData=async ()=>{
           let res=await fetch('http://localhost:5000/locations');
           let data=await res.json();
           setList(data)
         }
         getData()
       }
    },[position])
    socket.on('send-location',pos=>{
      setList([...list,pos])
    })
    return (
      <USER_CONTEXT.Provider value={{socket ,position,list,setList,setPosition, err, setErr }}>
        {children}
      </USER_CONTEXT.Provider>
    );
}

export default USER_CONTEXT;