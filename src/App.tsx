import {BrowserRouter, HashRouter, Router, Routes, Route, Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// import './App.css'
import routes from './config/routes';
import Navbar from './components/Navbar';
import './styles.css'


function App() {
  // const [allData, setAllData] = useState([]);
  // const [filteredData, setFilteredData] = useState(allData);

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        {routes.map((route: any, index:any)=>(
          <Route
            key={index}
            path={route.path}
            element={
                <route.component />
            }
               />
               )) }
      </Routes>
    </HashRouter>
        )
          }  
      


export default App
