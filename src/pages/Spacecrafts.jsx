import React from 'react'
import { useEffect, useState } from 'react'
import SpacecraftCards from '../components/SpacecraftCards';

function Spacecrafts() {
    const [ data, setData ] = useState(null);

    const fetchData = () => {
      fetch('https://services.isrostats.in/api/spacecraft').then((res)=>res.json()).then((data)=>{
        data = data.sort(compare); 
        setData(data)
      })
    }

    let compare = (a,b) => {
        if(a.launchDate < b.launchDate)
            return 1
        if(a.launchDate > b.launchDate)
            return -1
        else
            return 0
    }

    useEffect(() => {
      fetchData()
    },[])
    
    return (
      <div className="page-body">
          <div className="inside-body text-white">
              <div className="tabs row justify-content-center">
                <h4 className='text-center mt-3'>Spacecrafts</h4>
                <small className='text-center mb-3'>List of all the satellite launched by ISRO, includes details like Orbit, Application</small>
                {data &&
                  data?.map((res)=>{
                    return <SpacecraftCards data={res} key={res.serialNumber}/>
                  })
                }
                <div className="pb-3"></div>
              </div>
          </div>
      </div>
    )
}

export default Spacecrafts