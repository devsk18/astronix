import CardTabs from '../components/CardTabs'
import { useEffect, useState } from 'react'

function Launches() {

  const [ data, setData ] = useState(null);

  const fetchData = () => {
    fetch('https://services.isrostats.in/api/launches').then((res)=>res.json()).then((data)=>{
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
              <h4 className='text-center mt-3'>Launches</h4>
              <small className='text-center mb-3'>List of all the launches made by ISRO, includes payload, rocket type and mission status</small>
              {data &&
                data.map((res)=>{
                  return <CardTabs data={res} key={res.SerialNumber}/>
                })
              }
              <div className="pb-3"></div>
            </div>
        </div>
    </div>
  )
}

export default Launches