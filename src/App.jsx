import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';

import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import VideoGallery from './components/VideoGallery';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
     
      <Pricing />
      <Gallery/>
      <VideoGallery/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
