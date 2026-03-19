'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
      }
    }
    window.addEventListener('scroll', handleParallax)
    return () => window.removeEventListener('scroll', handleParallax)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-corporate-navy via-corporate-blue to-primary-700">
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">航空科技 · 创新引领</span>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              湖南中超星空
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-white">
                科技有限公司
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              专注于通用航空服务、民用航空器维修培训、卫星遥感测绘、智能无人飞行器研发制造，
              以科技创新推动航空产业高质量发展。
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#services"
                className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                探索业务
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                联系我们
              </a>
            </div>
          </div>

          {/* 3D Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-96 h-96">
              {/* Glowing orb */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400/30 to-primary-500/30 rounded-full blur-3xl animate-pulse-glow"></div>
              
              {/* Central drone icon */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <svg className="w-64 h-64 text-white/90" viewBox="0 0 100 100" fill="none">
                  {/* Drone body */}
                  <ellipse cx="50" cy="50" rx="12" ry="8" fill="currentColor" opacity="0.8"/>
                  
                  {/* Arms */}
                  <line x1="38" y1="50" x2="15" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="62" y1="50" x2="85" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="38" y1="50" x2="15" y2="70" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="62" y1="50" x2="85" y2="70" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  
                  {/* Rotors */}
                  <circle cx="15" cy="30" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
                  <circle cx="85" cy="30" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
                  <circle cx="15" cy="70" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
                  <circle cx="85" cy="70" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
                  
                  {/* Camera */}
                  <circle cx="50" cy="58" r="4" fill="currentColor" opacity="0.6"/>
                </svg>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: '200万', label: '注册资本' },
            { value: '10+', label: '业务领域' },
            { value: '专业', label: '航空服务' },
            { value: '创新', label: '科技驱动' },
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
          <span className="text-sm mb-2">向下滚动</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
