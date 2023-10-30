import { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import './App.css'
import CreateCars from './components/CreateCars'
import Cars from './components/Cars'




function App() {
  return (
    <>
      <h1>My Cars</h1>
      <Cars />
      <CreateCars />

    </>
  )
}
export default App;


 