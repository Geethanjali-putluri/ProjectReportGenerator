import React, { useState } from 'react';
import { NavPage } from '../types';
import {
  FileText,
  Home,
  Info,
  BookOpen,
  Cpu,
  BarChart3,
  Play,
  Sparkles,
  Menu,
  X,
} from 'lucide-react';

interface NavbarProps {
  activePage: NavPage;
  onNavigate: (page: NavPage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavPage; label: string; icon: React.ReactNode; isBadge?: boolean }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <Info className="w-4 h-4" /> },
    { id: 'subjects', label: 'Subjects', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'ai-layer', label: 'AI / LLM Layer', icon: <Cpu className="w-4 h-4" /> },
    { id: 'generator', label: 'Report Generator', icon: <FileText className="w-4 h-4" />, isBadge: true },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'live-demo', label: 'Live Demo', icon: <Play className="w-4 h-4" /> },
  ];

  const handleNavClick = (id: NavPage) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 shadow-2xl shadow-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-blue-300 bg-clip-text text-transparent">
                Project Report
              </span>
              <span className="text-xl font-light text-indigo-400 ml-1.5">Generator</span>
              <div className="flex items-center space-x-1.5 mt-0.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                  Gemini 2.5 Flash Enabled
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.isBadge && !isActive && (
                    <span className="px-1.5 py-0.5 text-[9px] font-extrabold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      AI Form
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              id="header-create-report-btn"
              onClick={() => handleNavClick('generator')}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-bold tracking-wide shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
              <span>Create Report</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl backdrop-blur-2xl">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => handleNavClick('generator')}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Generate Report Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
