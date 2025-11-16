import React, { useState, useEffect } from 'react';

export function Hero() {
  const words = ['Presence', 'Marketing', 'Management', 'Distribution', 'Solutions', 'Development'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; x: number; y: number; angle: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const createStar = () => {
      const newStar = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 2 + 1,
      };
      setStars((prev) => [...prev, newStar]);

      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== newStar.id));
      }, newStar.duration * 1000);
    };

    const interval = setInterval(createStar, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const createShootingStar = () => {
      const newShootingStar = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 50,
        angle: Math.random() * 45 - 22.5,
      };
      setShootingStars((prev) => [...prev, newShootingStar]);

      setTimeout(() => {
        setShootingStars((prev) => prev.filter((star) => star.id !== newShootingStar.id));
      }, 2000);
    };

    const interval = setInterval(createShootingStar, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Starlight effects */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white pointer-events-none animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `pulse ${star.duration}s ease-in-out`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute pointer-events-none"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            transform: `rotate(${star.angle}deg)`,
          }}
        >
          <div
            className="w-1 h-1 bg-white rounded-full"
            style={{
              boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.8)',
              animation: 'shootingStar 2s ease-out forwards',
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Elevate Your <span key={currentWordIndex} className="italic text-[#6366f1] inline-block min-w-[280px] text-left md:text-left text-center animate-word-scroll">{words[currentWordIndex]}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Providing unmatched services and opportunities to creators and artists
        </p>
        
        <button className="bg-[#6366f1] hover:bg-[#5855eb] text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#6366f1]/25">
          Start Here
        </button>
        
        {/* Animated mouse scroll indicator */}
        <div className="mt-16 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-gray-400 text-sm mt-2 animate-pulse">Scroll down</p>
        </div>
      </div>

    </main>
  );
}