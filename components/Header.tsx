"use client";

import Link from "next/link";
import { Phone, Mail, Facebook, Youtube, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md text-white">
      <div className="container mx-auto px-4">
        {/* Top Bar - Hidden on mobile */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+976 91912205</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Baysaa.tang.company@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* White Separator - Hidden on mobile */}
        <div className="hidden md:block border-t border-white/20"></div>
        
        {/* Navigation */}
        <div className="flex items-center justify-between py-3 md:py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-lg md:text-xl font-bold text-white">БТ</span>
            </div>
            <span className="text-lg md:text-xl font-bold">Баясаа Танг</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-green-400 transition-colors">НҮҮР</Link>
            <Link href="/products" className="hover:text-green-400 transition-colors">БҮТЭЭГДЭХҮҮН</Link>
            <Link href="/about" className="hover:text-green-400 transition-colors">БИДНИЙ ТУХАЙ</Link>
          </div>
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 py-4">
            <div className="flex flex-col gap-4 text-sm font-medium">
              <Link href="/" className="hover:text-green-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>НҮҮР</Link>
              <Link href="/products" className="hover:text-green-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>БҮТЭЭГДЭХҮҮН</Link>
              <Link href="/about" className="hover:text-green-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>БИДНИЙ ТУХАЙ</Link>
            </div>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/20">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
