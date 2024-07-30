import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeUser from './pages/HomeUser'
import Footer from './components/Footer'
import HeaderUser from './components/HeaderUser'

function App() {

  return (
    <>
      <HeaderUser />
      <Routes>
        <Route path='/' element={<HomeUser />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
