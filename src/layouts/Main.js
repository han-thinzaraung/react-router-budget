import React from 'react'
//assets
import wave from "../assets/wave.svg";
//helper function
import { fetchData } from '../helper'
//components 
import  Nav from '../components/Nav';
//rrd imports
import { Outlet, useLoaderData } from 'react-router-dom';

export function mainLoader(){
    const userName = fetchData("userName");
    return { userName}
}
const Main = () =>  {
   const {userName} =  useLoaderData()
   return (

    <div  className='layout'>
        <Nav userName = {userName}/>
        <main>
        <Outlet/>
        </main>
        <img src={wave} alt=""/>
    </div>

  )
}
export default Main
