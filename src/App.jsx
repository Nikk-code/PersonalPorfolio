import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import GitHubContributions from './components/GitHubContributions'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Skills />
          <Certificates />
          <Projects />
          <GitHubContributions />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
