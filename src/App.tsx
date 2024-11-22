import React from 'react';
import { Mail, Github, Link } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen relative bg-gray-900">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=3000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.2',
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-24">
          <div className="backdrop-blur-sm bg-gray-800/90 rounded-2xl p-8 shadow-lg">
            <About />
          </div>
          
          <div className="backdrop-blur-sm bg-gray-800/90 rounded-2xl p-8 shadow-lg">
            <Skills />
          </div>
          
          <div className="backdrop-blur-sm bg-gray-800/90 rounded-2xl p-8 shadow-lg">
            <Contact />
          </div>
        </main>

        <footer className="bg-gray-800/90 backdrop-blur-sm mt-24 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
            <p>© 2024 Junya Hanyuda. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;