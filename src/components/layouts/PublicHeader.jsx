'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Lucide Icons Import
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  LogIn, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function PublicHeader({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll logic for shifting background opacity safely
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Dynamic dashboard route helper mapping based on user login role
  const dashboardUrl = user?.role ? `/dashboard/${user.role}` : '/login';

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing Plans', href: '#pricing' },
    { name: 'Why Us', href: '#why-choose-us' },
  ];

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg border-slate-200/60 shadow-sm py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* ================= BRAND LOGO ================= */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group focus:outline-none"
          >
            <span className="font-black text-2xl tracking-tight text-slate-900 transition-colors group-hover:text-emerald-900">
              EduFilos<span className="text-emerald-700 italic">.</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-100">
              ERP
            </span>
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-800 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-emerald-700 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ================= DESKTOP ACTION BUTTONS ================= */}
          <div className="hidden md:flex items-center gap-4">
            {user && user.role ? (
              <Link href={dashboardUrl}>
                <button className="h-10 px-5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 shadow-md shadow-emerald-800/10 active:scale-95 transition-all rounded-xl flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </button>
              </Link>
            ) : (
              <>
                <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-emerald-800 transition-colors">
                  Sign In
                </Link>
                <Link href="/register-madrasha">
                  <button className="h-10 px-5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-95 transition-all rounded-xl flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    Get Started
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* ================= MOBILE MENU TRIGGER ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 md:hidden transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* ================= MOBILE DRAWER OVERLAY ================= */}
      <div 
        className={`fixed inset-0 top-[65px] z-40 w-full bg-white border-t border-slate-100 p-6 md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full justify-between pb-8">
          {/* Navigation Links inside Mobile Drawer */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Navigation</p>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium transition-colors"
              >
                {link.name}
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>

          {/* Dynamic Mobile CTAs based on Auth Status */}
          <div className="space-y-3 pt-6 border-t border-slate-100">
            {user && user.role ? (
              <Link href={dashboardUrl} className="block w-full">
                <button className="w-full h-12 rounded-xl font-bold text-sm bg-emerald-800 text-white flex items-center justify-center gap-2">
                  <LayoutDashboard className="w-4 h-4" />
                  Go To Dashboard
                </button>
              </Link>
            ) : (
              <>
                <Link href="/login" className="block w-full">
                  <button className="w-full h-12 rounded-xl font-bold text-sm border-2 border-slate-100 text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                    Sign In to Account
                  </button>
                </Link>
                <Link href="/register-madrasha" className="block w-full">
                  <button className="w-full h-12 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                    Register Institution
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}