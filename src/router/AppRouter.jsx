import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Biseccion, Dashboard, NewtonRaphson, PuntoFijo } from '../pages'
import { FalsaPosicion } from '../pages/FalsaPosicion'
import { Navbar } from '../ui/components/Navbar'

export const AppRouter = () => {
  const [isNavbarVisible, setisNavbarVisible] = useState(false);

  useEffect(() => {
    const rutas = window.location.href;
    setisNavbarVisible(rutas.includes('nosotros') || rutas.includes('playground') ? false  : true)

  }, [window.location.href])
  
  return (
    <>
    <div className="flex flex-no-wrap">
   {/* { 
      (isNavbarVisible) && (
        <Navbar/> 
      ) 
    }  */}
      <Routes>
          <Route path='punto-fijo' element={<PuntoFijo/>}/>
          <Route path='newton' element={<NewtonRaphson/>}/>
          <Route path='biseccion' element={<Biseccion/>}/>
          <Route path='falsaPosicion' element={<FalsaPosicion/>}/>
        

          <Route path='/' element={<Dashboard/>}/>
      </Routes>
      </div>
    </>
  )
}
