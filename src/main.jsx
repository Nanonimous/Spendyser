import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './components/Navbar.jsx'
import { MainLanch } from './components/MainLanch.jsx'
import { Feature } from './components/Feature.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navbar />
      <MainLanch />
      <Feature />
  </StrictMode>,
)
