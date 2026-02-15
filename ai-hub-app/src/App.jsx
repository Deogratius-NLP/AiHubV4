
import './styles/header.css'
import './styles/section.css'
import './styles/footer.css'
import './styles/sponsors.css'
import './styles/style.css'
import './styles/leader.css'
import './styles/leaders-photo.css'

import Header from './components/header'
import About from './components/about'
import Events from './components/events'
import Projects from './components/project'
import LeadersSection from './components/leadersection'   
import Sponsorship from './components/sponsors'           
import Partnership from './components/partnership'        
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Header />
      <About />
      <Events />
      <Projects />
      <LeadersSection />    
      <Sponsorship />       
      <Partnership />       
      <Contact />
      <Footer />
    </>
  )
}

export default App