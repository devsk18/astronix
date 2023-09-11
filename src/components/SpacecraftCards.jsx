import React from 'react'
import { VscCalendar, VscRocket } from "react-icons/vsc";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineAim } from "react-icons/ai";
import { LuOrbit } from "react-icons/lu";
import { Link } from 'react-router-dom';


function SpacecraftCards({data}) {
  return (
    <div className="tab col-9 col-md-5 p-3 m-md-4 m-3">
        
        <h5 className='mb-3' title='Know More'><Link to={data?.link}>{data?.name}</Link></h5>
        <div className="launchType col" title='Launch Vehicle'>
            <small><VscRocket /> {data?.launchVehicle}</small>
        </div>
        <div className="date col" title='Launch Date'>
            <small><VscCalendar /> {data?.launchDate}</small>
        </div>
        <div className="status col" title='Mission Status'>
            <small>
                {
                    data?.missionStatus == "MISSION SUCCESSFUL" ? (<AiOutlineCheckCircle />) : (<AiOutlineCloseCircle />)
                }
                {
                    data?.missionStatus == "MISSION SUCCESSFUL" ? " Success" : " Failed"
                }
            </small>
        </div>
        {
            data?.orbitType !== "" ? (
                <div className="orbit col" title='Orbit'>
                    <small><LuOrbit /> {data?.orbitType}</small>
                </div>
            ) : ''
        }
        {
            data?.application !== "" ? (
                <div className="application col" title='Application'>
                    <small><AiOutlineAim /> {data?.application}</small>
                </div>
            ) : ''
        }

    </div>
  )
}

export default SpacecraftCards