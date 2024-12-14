import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './components/Navbar.jsx'
import { MainLanch } from './components/MainLanch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <MainLanch />
  </StrictMode>,
)
