import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeUser from './pages/HomeUser'
import Footer from './components/Footer'
import HeaderUser from './components/HeaderUser'
import Auth from './components/Auth'

function App() {

  return (
    <>
      <HeaderUser />
      <Routes>
        <Route path='/' element={<HomeUser />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/login' element={<Auth />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
