import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import SkillsPage from './pages/SkillsPage/SkillsPage'
import ExperiencePage from './pages/ExperiencePage/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import './App.css'

function App() {
  return (
    <div className='App min-h-screen w-full text-[aliceblue] bg-[#1d1d1d] scroll-smooth'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  )
}

export default App
