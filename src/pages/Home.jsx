import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground'
import  {Navbar}  from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillSection'
import { ProjectsSection } from '../components/Projects'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <div className=' min-h-screen text-foreground overflow-hidden'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
    </div>
  )
}

export default Home