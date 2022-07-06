import React, { useEffect, useRef } from 'react'
import { getTodo } from '../actions/todoActions'

export default function Todo() {
    const isLoad=useRef(false);
    useEffect(() => {
        if(!isLoad.current){
            isLoad.current=true;
            getTodo('todos').then((data)=>{
                console.log("nothing",data)
            }).catch((err)=>{
                console.log(err)
                isLoad.current=false;
            })
        }
       
        
      
    }, [])
  return (
    <div>Todo</div>
  )
}
