import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { MainLanch } from './components/MainLanch/MainLanch.jsx'
import { Feature } from './components/Feature/Feature.jsx'
import { Useit } from './components/Useit/Useit.jsx'
import { Footer } from './components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navbar />
      <MainLanch />
      <Feature />
      <Useit />
      <Footer />
  </StrictMode>,
)
