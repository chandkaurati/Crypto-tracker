import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Header from './componants/Header/Header'
import Home from './pages/Home'
import Footer from './componants/Footer/Footer'
import Dashboard from './pages/Dashboard'
import CoinsContextProvider from './Context/CoinsContext'
import Coinpage from './pages/CoinChartpage'
import Header2 from './componants/Header/Header2'
import Compare from './pages/Compare'
function App() {
  const [count, setCount] = useState(0)
  
  return (
     <>
     <BrowserRouter>
    <div>
      {/* <Header/> */}
      <Header2/>
    </div>
    <CoinsContextProvider>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='dashboard/coin/:id' element={<Coinpage/>}></Route>
      <Route path='/Compare' element={<Compare/>}></Route>
     </Routes>
     </CoinsContextProvider>
    </BrowserRouter>

     </>
    )
}

export default App
