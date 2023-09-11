import React from 'react'

function VehicleTabs({data}) {
  return (
    <div className="tab col-8 col-md-5 p-3 m-md-4 m-3">
        
        <div>
            <img className='rocket-img' src={data?.img} alt={data?.name} />
        </div>
        <div className="text-box text-md-justify">
            <h4>{data?.name}</h4>
            <small>{data?.details}</small>
        </div>

    </div>
  )
}

export default VehicleTabs