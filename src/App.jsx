import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { LoadingScreen } from './components/LoadingScreen'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Navbar } from './components/Navbar'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { ProjectsSection } from './components/Projects'
import { Footer } from './components/Footer'
import Layout from './components/Layout'

const App = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])
  const [loading, setLoading] = React.useState(true)
  return (
    <Layout>
      <BrowserRouter>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hero" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/more-about-me" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </Layout>

  )
}

export default App