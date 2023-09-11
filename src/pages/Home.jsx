import React from 'react'
import '../styles/Home.css'
import isro_logo from '../assets/ISRO_logo.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page-body">
        <div className="inside-body">
            <div className="center text-white text-center">
              <img src={isro_logo} className='isro-logo' alt="ISRO LOGO" />
              <h1 className='pt-3'>Lets Learn About Our Space Acheivements</h1>
              <div className="buttons">
                <button className='m-2 btns'>
                  <Link to="/launches">
                    Launches
                  </Link>
                </button>
                <button className='m-2 btns'>
                  <Link to="/spacecrafts">
                    Spacecrafts
                  </Link>
                </button>
                <button className='m-2 btns'>
                  <Link to="/vehicles">
                    Vehicles
                  </Link>
                </button>
              </div>
              <small className="mt-2">Developed by <a target='_blank' rel='noopener noreferrer' href='https://devsk18.github.io/samkthampan'>Sam K Thampan</a></small>
            </div>
        </div>
    </div>
  )
}

export default Home