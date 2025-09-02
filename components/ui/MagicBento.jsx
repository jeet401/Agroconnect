import { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '0, 200, 100'; // fresh green RGB
const MOBILE_BREAKPOINT = 768;

const cardData = [
  { color: '#060010', title: 'Analytics', description: 'Track user behavior', label: 'Insights' },
  { color: '#060010', title: 'Dashboard', description: 'Centralized data view', label: 'Overview' },
  { color: '#060010', title: 'Collaboration', description: 'Work together seamlessly', label: 'Teamwork' },
  { color: '#060010', title: 'Automation', description: 'Streamline workflows', label: 'Efficiency' },
  { color: '#060010', title: 'Integration', description: 'Connect favorite tools', label: 'Connectivity' },
  { color: '#060010', title: 'Security', description: 'Enterprise-grade protection', label: 'Protection' }
];

/* ---------------- Global Spotlight ---------------- */
const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR
}) => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (disableAnimations || !enabled) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.25) 0%,
        rgba(${glowColor}, 0.15) 20%,
        rgba(${glowColor}, 0.08) 35%,
        rgba(${glowColor}, 0.04) 55%,
        transparent 80%
      );
      z-index: 50;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
      filter: blur(40px);
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e) => {
      gsap.to(spotlight, {
        left: e.clientX,
        top: e.clientY,
        opacity: 1,
        duration: 0.15,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(spotlight, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      spotlight.remove();
    };
  }, [disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

/* ---------------- Floating Particles ---------------- */
const FloatingParticles = ({ count = 50 }) => {
  const containerRef = useRef(null);

  const colors = [
    '0, 200, 100',   // medium green
    '50, 220, 150',  // light minty green
    '0, 160, 80',    // darker green
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < count; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${2 + Math.random() * 3}px;
        height: ${2 + Math.random() * 3}px;
        border-radius: 50%;
        background: rgba(${color}, 0.9);
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        filter: blur(1px);
      `;
      container.appendChild(particle);

      gsap.to(particle, {
        x: `+=${Math.random() * 100 - 50}`,
        y: `+=${Math.random() * 100 - 50}`,
        duration: 5 + Math.random() * 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to(particle, {
        opacity: 0.2 + Math.random() * 0.8,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    return () => {
      container.innerHTML = '';
    };
  }, [count]);

  return <div ref={containerRef} className="absolute inset-0" />;
};


/* ---------------- Main Component ---------------- */
const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
};

const MagicBento = ({
  enableSpotlight = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,

  backgroundOnly = false, // 👈 NEW PROP
}) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  return (
    <div className="fixed inset-0 w-full h-full z-0 bg-white">

      {/* Particles always in background */}
      <FloatingParticles count={60} color={glowColor} />

      {/* Spotlight effect */}
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      {/* Render cards only if not background mode */}
      {!backgroundOnly && (
        <div className="card-grid bento-section" ref={gridRef}>
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card card--border-glow"
              style={{ backgroundColor: card.color }}
            >
              <div className="card__header">
                <div className="card__label">{card.label}</div>
              </div>
              <div className="card__content">
                <h2 className="card__title">{card.title}</h2>
                <p className="card__description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MagicBento;
