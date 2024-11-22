import React from 'react';
import { Mail, Github, Link as LinkIcon } from 'lucide-react';

const ContactLink = ({ icon: Icon, href, label }: { icon: any; href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center p-4 bg-gray-700/50 rounded-xl shadow-lg border border-gray-600 hover:border-gray-500 transition-colors"
  >
    <Icon className="h-6 w-6 text-gray-300 mr-3" />
    <span className="text-white">{label}</span>
  </a>
);

const Contact = () => {
  return (
    <section id="Contact" className="relative">
      <h2 className="text-3xl font-bold text-white mb-8">Contact</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <ContactLink
          icon={Mail}
          href="mailto:atsi505082@gmail.com"
          label="Email"
        />
        <ContactLink
          icon={Github}
          href="https://github.com/atsu5050"
          label="GitHub"
        />
        <ContactLink
          icon={LinkIcon}
          href="https://mdotparvis.theshop.jp/"
          label="Accessories"
        />
      </div>
    </section>
  );
};

export default Contact;