import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      href: "https://github.com/KartikPanwar11", 
      label: "GitHub" 
    },
    { 
      icon: <Linkedin size={20} />, 
      href: "https://linkedin.com/in/KartikPanwar11", 
      label: "LinkedIn" 
    },
    { 
      icon: <Twitter size={20} />, 
      href: "https://twitter.com/KartikPwr", 
      label: "Twitter" 
    },
    { 
      icon: <Mail size={20} />, 
      href: "mailto:Kartikpanwar1101@gmail.com", 
      label: "Email" 
    }
  ];

  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Left Side: Brand & Tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">
              Let's <span className="text-purple-500">Connect</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-sm">
                Currently looking for new opportunities. <br />
                Feel free to reach out through any of the platforms! <br />
                Could have added light mode but meh... this looks better.
            </p>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl hover:border-purple-500 hover:-translate-y-1 transition-all duration-300"
                aria-label={social.label}
              >
                {/* Icon Glow Effect */}
                <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Itself */}
                <div className="relative text-slate-400 group-hover:text-purple-400 transition-colors">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Kartik Panwar. All rights reserved.</p>
          <p>Built with React, Tailwind & ❤️</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;