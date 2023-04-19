import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Weather from '../components/Weather'

export default function Approutes() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Weather/>}/>
                    <Route/>
                </Route>
            </Routes>
        </Router>
    </div>
  )
}
