import React from 'react'
import VehicleTabs from '../components/VehicleTabs'


let vehicleData = [
    {
        name: "Augmented Satellite Launch Vehicle - ASLV",
        details: "The Augmented Satellite Launch Vehicle or Advanced Satellite Launch Vehicle, also known as ASLV, was a small-lift launch vehicle five-stage solid-fuel rocket developed by the Indian Space Research Organisation (ISRO) to place 150 kg satellites into LEO. This project was started by India during the early 1980s to develop technologies needed for a payload to be placed into a geostationary orbit.",
        img: "https://isrostats.in/assets/ASLV.png"
    },
    {
        name: "Geosynchronous Satellite Launch Vehicle - GSLV",
        details: "Geosynchronous Satellite Launch Vehicle (GSLV) is an expendable launch system operated by the Indian Space Research Organisation (ISRO). GSLV was used in fourteen launches from 2001 to 2021.",
        img: "https://isrostats.in/assets/GSLV.png"
    },
    {
        name: "Launch Vehicle Mark-3 - LVM3",
        details: "The Launch Vehicle Mark-3 (LVM 3), previously referred to as the Geosynchronous Satellite Launch Vehicle Mark III (GSLV Mk3), is a three-stage medium-lift launch vehicle developed by the Indian Space Research Organisation (ISRO). Primarily designed to launch communication satellites into geostationary orbit, it is also due to launch crewed missions under the Indian Human Spaceflight Programme.",
        img: "https://isrostats.in/assets/LVM3.png"
    },
    {
        name: "Polar Satellite Launch Vehicle - PSLV",
        details: "The Polar Satellite Launch Vehicle (PSLV) is an expendable medium-lift launch vehicle designed and operated by the Indian Space Research Organisation (ISRO). It was developed to allow India to launch its Indian Remote Sensing (IRS) satellites into sun-synchronous orbits, a service that was, until the advent of the PSLV in 1993, only commercially available from Russia. PSLV can also launch small size satellites into Geostationary Transfer Orbit (GTO).",
        img: "https://isrostats.in/assets/PSLV.png"
    },
    {
        name: "Satellite Launch Vehicle - SLV",
        details: " The Satellite Launch Vehicle or SLV was a small-lift launch vehicle project started in the early 1970s by the Indian Space Research Organisation to develop the technology needed to launch satellites. SLV was intended to reach a height of 400 kilometres (250 mi) and carry a payload of 40 kg (88 lb). The first experimental flight of SLV-3, in August 1979, was a failure. The first successful launch took place on 18 July 1980.",
        img: "https://isrostats.in/assets/SLV.png"
    },
    {
        name: "Small Satellite Launch Vehicle - SSLV",
        details: "The Small Satellite Launch Vehicle (SSLV) is a small-lift launch vehicle developed by ISRO with payload capacity to deliver 500 kg (1,100 lb) to low Earth orbit (500 km (310 mi)) or 300 kg (660 lb) to Sun-synchronous orbit (500 km (310 mi)) for launching small satellites, with the capability to support multiple orbital drop-offs.",
        img: "https://isrostats.in/assets/SSLV.png"
    }
] 

function Vehicles() {
  return (
    <div className="page-body">
        <div className="inside-body text-white">
            <div className="tabs row justify-content-center">
                <h4 className='text-center mt-3'>Vehicles</h4>
                <small className='text-center mb-3'>Launch vehicles used by ISRO in our space explorations</small>
                {
                    vehicleData && vehicleData?.map((res)=>{
                        return <VehicleTabs data={res}  key={res?.name}/>
                    })
                }
                <div className="pb-3"></div>
            </div>
        </div>
    </div>
  )
}

export default Vehicles