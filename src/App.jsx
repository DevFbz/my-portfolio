
import Banner from './Components/Banner'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects.jsx'
import MailchimpForm from './Components/MailchimpForm'
import Footer from './Components/Footer'
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