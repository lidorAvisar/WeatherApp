import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Weather from '../components/Weather'
import Error from '../components/Error'

export default function Approutes() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Weather/>}/>
                    <Route path='/search/:s' element={<Weather/>}/>
                </Route>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </Router>
    </div>
  )
}
