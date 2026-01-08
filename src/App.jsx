import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import './App.css'

function App() {
  return (
    <div className='App h-full min-h-screen text-[aliceblue] bg-[#1d1d1d]'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  )
}

export default App
