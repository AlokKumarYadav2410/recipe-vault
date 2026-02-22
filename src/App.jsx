import React from 'react'
import MainRoutes from './routes/mainroutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='py-5 px-[10%] bg-gray-800 w-screen h-screen font-thin text-white' >
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App
