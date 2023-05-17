import React from 'react'

import { Navbar } from '../../ui/components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Travel } from '../../pages/Travel'
import { CreateTravel } from '../../pages/createTravel'

export const TravelsRouter = () => {
  return (
    <>
         <Navbar />
          
         <div className="container">
          <Routes>
              <Route path="travels" element={<Travel />} /> 
              <Route path="crear" element={<CreateTravel />} />
          </Routes>

         </div>


    </>
  )
}
