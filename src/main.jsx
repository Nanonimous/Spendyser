import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { MainLanch } from './components/MainLanch/MainLanch.jsx'
import { Feature } from './components/Feature/Feature.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navbar />
      <MainLanch />
      <Feature />
  </StrictMode>,
)
