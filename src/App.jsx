import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GradeSelection from './components/GradeSelection'
import SubjectSelection from './components/SubjectSelection'
import GameModeSelection from './components/GameModeSelection'
import DifficultySelection from './components/DifficultySelection'
import GameInterface from './components/GameInterface'
import TopicSelection from './components/TopicSelection'
import ScienceBranch from './components/ScienceBranch'
import MathematicsBranch from './components/MathematicsBranch'
import AboutSection from './components/AboutSection'
import WhyGamifiedSection from './components/WhyGamifiedSection'
import Footer from './components/Footer'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [pageData, setPageData] = useState({})

  const handlePageChange = (page, data = {}) => {
    setCurrentPage(page)
    setPageData(data)
    console.log('Page changed to:', page, 'with data:', data)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero setCurrentPage={handlePageChange} />
      case 'gradeSelection':
        return <GradeSelection setCurrentPage={handlePageChange} />
      case 'subjectSelection':
        return <SubjectSelection setCurrentPage={handlePageChange} selectedGrade={pageData.grade} />
      case 'gameModeSelection':
        return <GameModeSelection setCurrentPage={handlePageChange} selectedGrade={pageData.grade} selectedSubject={pageData.subject} />
      case 'difficultySelection':
        return <DifficultySelection setCurrentPage={handlePageChange} selectedGrade={pageData.grade} selectedSubject={pageData.subject} mode={pageData.mode} />
      case 'gameInterface':
        return <GameInterface setCurrentPage={handlePageChange} selectedGrade={pageData.grade} selectedSubject={pageData.subject} mode={pageData.mode} difficulty={pageData.difficulty} />
      case 'topicSelection':
        return <TopicSelection setCurrentPage={handlePageChange} selectedGrade={pageData.grade} selectedSubject={pageData.subject} />
      case 'scienceBranch':
        return <ScienceBranch setCurrentPage={handlePageChange} selectedGrade={pageData.grade} selectedSubject={pageData.subject} branch={pageData.branch} />
      case 'mathematicsBranch':
        return <MathematicsBranch setCurrentPage={handlePageChange} selectedGrade={pageData.grade} selectedSubject={pageData.subject} />
      case 'about':
        return <AboutSection />
      case 'contact':
        return <div className="min-h-screen bg-gray-900 text-white pt-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8 text-stem-blue">Contact Us</h1>
            <p className="text-xl mb-8">Get in touch with the STEM Quest team</p>
            <div className="bg-gray-800 p-8 rounded-2xl">
              <p className="text-lg mb-4">Email: contact@stemquest.com</p>
              <p className="text-lg mb-4">Phone: (555) 123-4567</p>
              <p className="text-lg">Address: 123 Education St, Learning City, LC 12345</p>
            </div>
          </div>
        </div>
      case 'login':
        return <LoginPage setCurrentPage={handlePageChange} />
      case 'signup':
        return <SignupPage setCurrentPage={handlePageChange} />
      default:
        return <Hero setCurrentPage={handlePageChange} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      {currentPage === 'home' && (
        <>
          <AboutSection />
          <WhyGamifiedSection />
        </>
      )}
      <Footer />
    </div>
  )
}

export default App
