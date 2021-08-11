import React, { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from 'gsap/gsap-core'
import useMedia from '../hooks/useMedia';


const Back2Top = () => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

// mediaquery
const {xs} = useMedia()

// intial setup
useEffect(() =>{
    xs? gsap.to('.back2top',{scrollTrigger:{
        
        // trigger: '.projects',
         start:300,
         scrub:.5
      },display:'flex'}) 
      : gsap.to('.back2top',{scrollTrigger:{
        
         //trigger: '.projects',
         start:500,
         scrub:.5
      },display:'flex'}) 
      
},[xs])
  
const toTopClick = ()=>{
        gsap.to(window,.7,{scrollTo:0})
        
}
    return (
        <div className='btn-back2top back2top' onClick={toTopClick}>
            {xs ? <p>Top</p> : <p>Back To Top</p>}
        </div>
    )
}
export default Back2Top
