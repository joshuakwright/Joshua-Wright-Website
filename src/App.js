// Inspiration for the style of this website came from my friend, Cole Johnston -> www.colejohn.com

import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import ProExp from './ProExp/ProExp'
import Education from './Education/Education'
import Projects from './Projects/Projects'
import Home from './Home/Home'
import Error from './Error/Error'
import Resume from './Resume/Resume'
import Cisco from './ProExp/Companies/Cisco/Cisco'
import Pilot from './ProExp/Companies/Pilot/Pilot'
import Parke from './ProExp/Companies/Parke/Parke'
import DeliveryDudes from './ProExp/Companies/DeliveryDudes/DeliveryDudes'
import UTK from './Education/Schools/UTK/UTK'
import CPA from './Education/Schools/CPA/CPA'
import Sudoku from './Projects/IndvProjects/Sudoku/Sudoku'
import Project2 from './Projects/IndvProjects/Project2/Project2'
import Project3 from './Projects/IndvProjects/Project3/Project3'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={ <Home/> } />
        <Route path='proexp' element={ <ProExp/> }>
          <Route index element={ <Cisco/> } />
          <Route path='cisco' element={ <Cisco/> }/>
          <Route path='pilot' element={ <Pilot/> }/>
          <Route path='parke' element={ <Parke/> }/>
          <Route path='deliverydudes' element={ <DeliveryDudes/> }/>
          <Route path='*' element={ <Error/> } />
        </Route>
        <Route path='education' element={ <Education/> }> 
          <Route index element={ <UTK/> } />
          <Route path='utk' element={ <UTK/> }/>
          <Route path='cpa' element={ <CPA/> }/>
          <Route path='*' element={ <Error/> } />
        </Route>
        <Route path='projects' element={ <Projects/> }>
          <Route index element={ <Sudoku/> } />
          <Route path='sudoku' element={ <Sudoku/> }/>
          <Route path='project2' element={ <Project2/> }/>
          <Route path='project3' element={ <Project3/> }/>
          <Route path='*' element={ <Error/> } />
        </Route>
        <Route path='myresume' element={ <Resume/> } />
        <Route path='*' element={ <Error/> } />
       </Routes>
    </div>
  );
}

export default App;