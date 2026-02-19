import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PixelBlast from './components/PixelBlast';

function App() {
  return (
    <div className="min-h-screen font-sans relative">
      {/* Pixel Blast Background */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#000000"
          patternScale={2}
          patternDensity={1}
          enableRipples={true}
          rippleSpeed={0.3}
          rippleThickness={0.1}
          rippleIntensityScale={1}
          speed={0.5}
          transparent={true}
          edgeFade={0.5}
        />
      </div>
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
