import React,{useContext, useEffect, useState} from 'react'
import { Map ,Marker} from "pigeon-maps";
import USER_CONTEXT from '../Utility';
import Loading from '../Pages/Loading';
const Maps = () => {
      const [zoom, setZoom] = useState(11);
      const {position,setPosition,setErr,list}=useContext(USER_CONTEXT);


      useEffect(()=>{

           if(navigator.geolocation){
               navigator.geolocation.getCurrentPosition(pos=>{
                 setPosition({
                   latitude: pos.coords.latitude,
                   longitude: pos.coords.longitude,
                 });
               
                
               },(err)=>console.log(err))
           }else{
               setErr('Ooops!Unable to determine location')
           }
      },[])
      
      if(!position){
          return <Loading/>
      }
    return (
      <div className="map">
        <Map
          center={[position.latitude,position.longitude]}
          zoom={zoom}
          minZoom={3}
          onBoundsChanged={({ center, zoom }) => {
            setZoom(zoom);
          }}
        
        >
         { list.map(item=>item && <Marker anchor={[item.latitude,item.longitude]} color="black" />)}
          
          <Marker anchor={[position.latitude,position.longitude]} color="green" />
        </Map>
      </div>
    );
}

export default Maps
