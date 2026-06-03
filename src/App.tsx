
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { GalleryPreview } from './components/home/GalleryPreview';
import { Stats } from './components/home/Stats';
import { About } from './components/home/About';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-gold/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <GalleryPreview />
        <Stats />
        <About />
      </main>
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-12">
        <p>© {new Date().getFullYear()} Magic 4 You. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
}

export default App;
