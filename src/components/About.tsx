import React from 'react';
import { Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="About" className="relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gray-800/50 to-transparent" />
      </div>

      <div className="relative">
        <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="flex items-center text-xl font-semibold text-white mb-2">
                <Sparkles className="h-5 w-5 mr-2 text-yellow-500" />
                Expertise & Interests
              </h3>
              <p className="text-gray-300">Passionate about developing solutions focused on automation and workflow optimization.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Background</h3>
              <p className="text-gray-300">
                Dedicated to building efficient workflows and exploring new technologies.
                Finding joy in improving inefficient processes discovered in daily operations.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center p-8">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600"
                alt="Coding workspace"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;