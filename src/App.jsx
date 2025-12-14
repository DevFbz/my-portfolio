
import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './Components/Projects.jsx'
import MailchimpForm from './components/MailchimpForm'
import Footer from './components/Footer'
import Navbar from './Components/Navbar.jsx'



function App() {
  return (
    <div className="min-h-screen bg-dark-primary text-text-primary">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <MailchimpForm />
      <Footer />
    </div>
  );
}

export default App;