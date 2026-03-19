'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-3xl p-8 text-white">
                <div className="mb-8">
                  <h3 className="font-heading text-2xl font-bold mb-2">企业愿景</h3>
                  <p className="text-white/80">成为航空科技领域的创新引领者</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold mb-1">200万</div>
                    <div className="text-white/70 text-sm">注册资本</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold mb-1">2025</div>
                    <div className="text-white/70 text-sm">成立年份</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold mb-1">长沙</div>
                    <div className="text-white/70 text-sm">总部位置</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold mb-1">10+</div>
                    <div className="text-white/70 text-sm">业务领域</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              关于我们
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              科技创新，<span className="gradient-text">翱翔未来</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">湖南中超星空科技有限公司</strong>成立于2025年，总部位于长沙市雨花区同升街道环保中路188号，是一家专注于航空科技领域的高新技术企业。
              </p>
              <p>
                公司业务涵盖通用航空服务、民用航空器维修与培训、测绘服务、卫星遥感应用、智能无人飞行器研发制造等多个领域，致力于为客户提供专业、高效、创新的技术服务与解决方案。
              </p>
              <p>
                我们秉承"科技创新、服务至上"的理念，依托专业团队和先进技术，不断推动航空科技的应用与发展，努力成为行业内的创新引领者。
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: '🎯', title: '专注专业', desc: '深耕航空科技' },
                { icon: '💡', title: '创新驱动', desc: '持续技术突破' },
                { icon: '🤝', title: '诚信服务', desc: '客户至上理念' },
                { icon: '🚀', title: '追求卓越', desc: '不断超越自我' },
              ].map((value, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <span className="text-2xl">{value.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{value.title}</div>
                    <div className="text-sm text-gray-500">{value.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
