"use client";

import React, { useState, useEffect } from 'react';

const AnimatedBackground = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-40"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatStar ${10 + Math.random() * 20}s infinite linear`,
                animationDelay: `${Math.random() * 10}s`
              }}
            />
          ))}
          {/* Brighter accent stars */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`bright-${i}`}
              className="absolute bg-yellow-400 rounded-full opacity-60 animate-pulse"
              style={{
                width: `${Math.random() * 2 + 2}px`,
                height: `${Math.random() * 2 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatStar ${15 + Math.random() * 25}s infinite linear, pulse 2s infinite`,
                animationDelay: `${Math.random() * 15}s`
              }}
            />
          ))}
        </div>
    );
};

export default AnimatedBackground;
