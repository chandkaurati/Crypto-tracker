import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Header from './componants/Header/Header'
import Home from './pages/Home'
import Footer from './componants/Footer/Footer'
import Dashboard from './componants/Dashboard/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
     <>
    <BrowserRouter>
    <div>
      <Header/>
    </div>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
     </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
