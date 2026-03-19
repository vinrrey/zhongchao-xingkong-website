'use client'

import { useState } from 'react'
import Link from 'next/link'

interface HeaderProps {
  scrolled: boolean
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: '首页' },
    { href: '#services', label: '业务领域' },
    { href: '#about', label: '关于我们' },
    { href: '#advantages', label: '企业优势' },
    { href: '#contact', label: '联系我们' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-14 w-auto">
              <img
                src="/logo.png"
                alt="湖南中超星空科技"
                className="h-full w-auto object-contain"
                onError={(e) => {
                  // 如果logo加载失败，显示备用logo
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <div className="hidden h-14 w-auto bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center px-4">
                <span className="text-white font-bold text-xl">中超星空</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary-500 ${
                  scrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/admin"
              className="px-5 py-2.5 bg-gradient-to-r from-corporate-blue to-corporate-navy text-white font-medium rounded-full hover:shadow-lg hover:shadow-corporate-blue/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              管理后台
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-4 animate-fade-in-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/admin"
              className="block mt-2 py-3 px-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-center rounded-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              管理后台
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
