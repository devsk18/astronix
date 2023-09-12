import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Launches from './pages/Launches'
import NavBar from './components/NavBar'
import Vehicles from './pages/Vehicles'
import Spacecrafts from './pages/Spacecrafts'
import './styles/App.css' 

function App() {

  return (
    <div className="container-fluid p-0 main">
      <BrowserRouter basename="/astronix">
        <NavBar />
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/launches' Component={Launches}/>
          <Route path='/spacecrafts' Component={Spacecrafts}/>
          <Route path='/vehicles' Component={Vehicles}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
