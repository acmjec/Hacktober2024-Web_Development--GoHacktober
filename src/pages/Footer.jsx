import React from 'react';
import acm_logo from "../assets/acm_logo.png";
import './Footer.css';

const SocialLink = ({ href, icon, ariaLabel, name }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="m-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 relative group"
    aria-label={ariaLabel}
  >
    <i className={`fa-brands ${icon} text-2xl sm:text-3xl md:text-4xl`}></i>
    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {name}
    </span>
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-white py-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-4 flex-wrap justify-center">
            <SocialLink href="https://www.instagram.com/acmjec/" icon="fa-instagram" ariaLabel="Instagram" name="Instagram" />
            <SocialLink href="https://www.linkedin.com/company/acmjec/" icon="fa-linkedin" ariaLabel="LinkedIn" name="LinkedIn" />
            <SocialLink href="https://www.facebook.com/jecacm/" icon="fa-facebook" ariaLabel="Facebook" name="Facebook" />
            <SocialLink href="https://github.com/acmjec" icon="fa-github" ariaLabel="GitHub" name="GitHub" />
            <SocialLink href="https://x.com/AcmJec/" icon="fa-twitter" ariaLabel="Twitter" name="Twitter" />
          </div>
          <a href="https://jecjabalpur.acm.org" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
            <img src={acm_logo} alt="ACM Logo" className="h-16 sm:h-18 md:h-20" />
          </a>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ACM JEC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}