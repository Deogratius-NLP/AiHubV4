import { useState, useEffect, useRef } from 'react';
import classImg from '../assets/class.jpg';
import coorpImg from '../assets/coorp.jpg';
import facilityImg from '../assets/facilty.jpg';
import logoImg from '../assets/AiHubLogo.png';

const Header = () => {
  // ========== Mobile Menu ==========
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) &&
          toggleRef.current && !toggleRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // ========== Slideshow ==========
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [classImg, coorpImg, facilityImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  // ========== Rotating Words Typewriter ==========
  const words = ['Innovate', 'Inspire', 'Accelerate', 'Discover', 'Transform', 'Evolve', 'Create', 'Lead', 'Integrate', 'Enhance'];
  const [wordIndex, setWordIndex] = useState(0);
  const [wordState, setWordState] = useState('active'); // 'active' or 'exit'

  useEffect(() => {
    const cycle = setInterval(() => {
      setWordState('exit');
      setTimeout(() => {
        setWordIndex(prev => (prev + 1) % words.length);
        setWordState('active');
      }, 600); // match exit animation duration
    }, 2800);
    return () => clearInterval(cycle);
  }, [words.length]);

  // ========== Hero Title Typing Animation ==========
  const [showCursor, setShowCursor] = useState(false);
  const [typedLine1, setTypedLine1] = useState('');
  const [typedLine2, setTypedLine2] = useState('');
  const [showAccent, setShowAccent] = useState(false);
  const titleLine1 = 'Welcome to the';
  const titleLine2 = 'Future of AI';

  useEffect(() => {
    // Simulate typing on mount
    let timer;
    const typeLine1 = () => {
      let i = 0;
      const interval = setInterval(() => {
        setTypedLine1(titleLine1.slice(0, i + 1));
        i++;
        if (i === titleLine1.length) {
          clearInterval(interval);
          setTimeout(() => {
            setShowCursor(true);
            typeLine2();
          }, 300);
        }
      }, 80);
    };
    const typeLine2 = () => {
      let i = 0;
      const interval = setInterval(() => {
        setTypedLine2(titleLine2.slice(0, i + 1));
        i++;
        if (i === titleLine2.length) {
          clearInterval(interval);
          setTimeout(() => {
            setShowCursor(false);
            setShowAccent(true);
          }, 400);
        }
      }, 100);
    };
    timer = setTimeout(typeLine1, 800);
    return () => clearTimeout(timer);
  }, []);

  // ========== Particles ==========
  useEffect(() => {
    const container = document.getElementById('aiHubParticles');
    if (!container) return;
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'ai-hub-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      container.appendChild(particle);
    }
    // Optional cleanup – remove particles if component unmounts
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  // ========== Stats Counter ==========
  const statsRef = useRef(null);
  const [counts, setCounts] = useState({ members: 0, projects: 0, events: 0 });
  const targets = { members: 50, projects: 20, events: 10 };
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!statsRef.current || animated) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimated(true);
        ['members', 'projects', 'events'].forEach((key, idx) => {
          let start = 0;
          const increment = targets[key] / (2000 / 16); // 2000ms duration, 60fps
          const timer = setInterval(() => {
            start += increment;
            if (start >= targets[key]) {
              setCounts(prev => ({ ...prev, [key]: targets[key] }));
              clearInterval(timer);
            } else {
              setCounts(prev => ({ ...prev, [key]: Math.floor(start) }));
            }
          }, 16);
        });
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <header className="ai-hub-header" id="aiHubHeader">
      {/* Background Slideshow */}
      <div className="ai-hub-slideshow">
        {slides.map((img, index) => (
          <div
            key={index}
            className={`ai-hub-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="ai-hub-overlay-gradient ai-hub-overlay-1" />
      <div className="ai-hub-overlay-gradient ai-hub-overlay-2" />
      <div className="ai-hub-overlay" />

      {/* Animated Particles */}
      <div className="ai-hub-particles" id="aiHubParticles" />

      {/* Floating Shapes */}
      <div className="ai-hub-floating-shapes">
        <div className="ai-hub-shape ai-hub-shape-1" />
        <div className="ai-hub-shape ai-hub-shape-2" />
        <div className="ai-hub-shape ai-hub-shape-3" />
        <div className="ai-hub-shape ai-hub-shape-4" />
      </div>

      {/* Navigation */}
      <nav className="ai-hub-nav">
        <div className="ai-hub-logo">
          <img src={logoImg} alt="AI Club Logo" className="ai-hub-logo-image" />
          <div className="ai-hub-logo-text">
            <span className="ai-hub-logo-main">
              AI <span className="ai-hub-logo-sub-1"> &amp; </span>
            </span>
            <span className="ai-hub-logo-sub">Signal Processing Hub</span>
          </div>
        </div>
        <ul ref={menuRef} className={`ai-hub-nav-links ${isMenuOpen ? 'active' : ''}`} id="aiHubNavLinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#sponsors">Partners</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button
          ref={toggleRef}
          className={`ai-hub-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          id="aiHubMenuToggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Hero Header */}
      <div className="ai-hub-hero-header">
        <h1 className="ai-hub-hero-main-title">
          <span className="ai-hub-title-word">AI</span>
          <span className="ai-hub-title-ampersand">&amp;</span>
          <span className="ai-hub-title-word">Signal</span>
          <span className="ai-hub-title-word">Processing</span>
          <span className="ai-hub-title-word-highlight">Hub</span>
        </h1>
      </div>

      {/* Hero Content */}
      <div className="ai-hub-hero-content">
        <div className="ai-hub-hero-badge">
          <span className="ai-hub-badge-icon">✨</span>
          <span className="ai-hub-badge-text">The Incubator For AI Minds</span>
        </div>

        <h2 className="ai-hub-hero-title">
          <span className="ai-hub-title-line-1 ai-hub-typing-text">
            {typedLine1}
          </span>
          <span className="ai-hub-title-line-2">
            <span className="ai-hub-gradient-text ai-hub-typing-text-main">
              {typedLine2}
            </span>
            {showCursor && <span className="ai-hub-typing-cursor">|</span>}
            {showAccent && <span className="ai-hub-title-accent">.</span>}
          </span>
        </h2>

        <div className="ai-hub-hero-subtitle-wrapper">
          <p className="ai-hub-hero-subtitle ai-hub-hero-subtitle-typing">
            <span className="ai-hub-typing-label">We</span>
            <span className="ai-hub-typing-word-container" id="aiHubTypingContainer">
              <span className={`ai-hub-typing-word ${wordState}`}>
                {words[wordIndex]}
              </span>
            </span>
            <span className="ai-hub-typing-label">the Future</span>
          </p>
        </div>

        <div className="ai-hub-hero-stats" ref={statsRef}>
          <div className="ai-hub-stat-item">
            <div className="ai-hub-stat-number">{counts.members}+</div>
            <div className="ai-hub-stat-label">Active Members</div>
          </div>
          <div className="ai-hub-stat-item">
            <div className="ai-hub-stat-number">{counts.projects}+</div>
            <div className="ai-hub-stat-label">Projects</div>
          </div>
          <div className="ai-hub-stat-item">
            <div className="ai-hub-stat-number">{counts.events}+</div>
            <div className="ai-hub-stat-label">Events</div>
          </div>
        </div>

        <div className="ai-hub-hero-buttons">
          <a href="#join" className="ai-hub-btn ai-hub-btn-primary">
            <span>Join The Hub</span>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#explore" className="ai-hub-btn ai-hub-btn-secondary">
            <span>Explore More</span>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
              <path d="M10 3V17M3 10H17" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            </svg>
          </a>
        </div>

        {/* Slideshow Indicators */}
        <div className="ai-hub-slideshow-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`ai-hub-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="ai-hub-scroll-indicator">
        <div className="ai-hub-scroll-text">Scroll</div>
        <div className="ai-hub-scroll-line" />
      </div>
    </header>
  );
};

export default Header;