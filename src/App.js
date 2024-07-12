import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import Experience from './components/experience/Experience';
import Testimonials from './components/testimonials/Testimonials';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
function App() {
  return (
    <>
      <ParticlesBackground />
      <Header/> 
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Testimonials/>
      <Portfolio/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
