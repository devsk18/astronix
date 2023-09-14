import React from 'react'
import { VscCalendar, VscRocket } from "react-icons/vsc";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { LuSatelliteDish } from "react-icons/lu";
import { Link } from 'react-router-dom';


function CardTabs({data}) {
  return (
    <div className="tab col-9 col-md-5 col-lg-3 p-3 m-md-4 m-3">
        
        <h5 className='mb-3' title='Know More'><Link to={data?.Link}>{data?.Name}</Link></h5>
        <div className="launchType col" title='Launch Vehicle'>
            <small><VscRocket /> {data?.LaunchType}</small>
        </div>
        <div className="date col" title='Launch Date'>
            <small><VscCalendar /> {data?.LaunchDate}</small>
        </div>
        <div className="status col" title='Mission Status'>
            <small>
                {
                    data?.MissionStatus == "MISSION SUCCESSFUL" ? (<AiOutlineCheckCircle />) : (<AiOutlineCloseCircle />)
                }
                {
                    data?.MissionStatus == "MISSION SUCCESSFUL" ? " Success" : " Failed"
                }
            </small>
        </div>
        <div className="payload col" title='Payloads'>
            <small><LuSatelliteDish /> 
                {
                    data?.Payload == "" ? " Undisclosed" : " " + data?.Payload
                }
            </small>
        </div>

    </div>
  )
}

export default CardTabs