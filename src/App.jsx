
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home/Home'
import Mens from './Components/Mens/Mens'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Women from './Components/Women/Women'
import Kids from './Components/kids/Kids'

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/mens' element={<Mens/>}></Route>
          <Route path='/women' element={<Women/>}></Route>
          <Route path='/kids' element={<Kids/>}></Route>
        </Routes>
      </div>
    </Router>
      
  )
}

export default App
