import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeUser from './pages/HomeUser'
import Footer from './components/Footer'
import HeaderUser from './components/HeaderUser'
import Auth from './components/Auth'
import HomeVendor from './pages/HomeVendor'


import ViewCatering from './components/ViewCatering'
import ViewVenue from './components/ViewVenue'

function App() {

  return (
    <>
      <HeaderUser />
      <Routes>
        <Route path='/' element={<HomeUser />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/vendorhome' element={<HomeVendor />} />
        
        <Route path='/viewcatering' element={<ViewCatering />} />
        <Route path='/viewvenue' element={<ViewVenue />} />




      </Routes>
      <Footer />
    </>
  )
}

export default App
