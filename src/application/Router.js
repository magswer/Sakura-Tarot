import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import App from '../App'
import Secondpage from '../pages/Secondpage'


function Router() {
  return (
<BrowserRouter>
     <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/lectura' element={<Secondpage/>}/>
    </Routes>
</BrowserRouter>

  )
}

export default Router
