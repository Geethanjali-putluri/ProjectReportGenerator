import React from 'react';
import { NavPage } from '../types';
import { FileText, Cpu, Sparkles, ArrowUpRight, Github, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Project Report <span className="text-indigo-400 font-light">Generator</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An intelligent, university-grade academic documentation platform designed to streamline report generation for engineering, computer science, and research scholars using Google AI Studio & Gemini LLM.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-950/80 border border-indigo-800/50 text-indigo-300 flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                <span>Powered by Gemini 2.5 Flash</span>
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/80 border border-emerald-800/50 text-emerald-300 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>IEEE Compliant</span>
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-indigo-400 transition-colors flex items-center space-x-1"
                >
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-indigo-400 transition-colors flex items-center space-x-1"
                >
                  <span>About Project</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('subjects')}
                  className="hover:text-indigo-400 transition-colors flex items-center space-x-1"
                >
                  <span>Subject Modules</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ai-layer')}
                  className="hover:text-indigo-400 transition-colors flex items-center space-x-1"
                >
                  <span>AI / LLM Layer</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('generator')}
                  className="text-indigo-300 font-semibold hover:text-indigo-200 transition-colors flex items-center space-x-1"
                >
                  <span>Report Generator Form</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Platform & Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('analytics')}
                  className="hover:text-indigo-400 transition-colors flex items-center space-x-1"
                >
                  <span>Usage Analytics</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('live-demo')}
                  className="hover:text-indigo-400 transition-colors flex items-center space-x-1"
                >
                  <span>Live Demo & Workflow</span>
                </button>
              </li>
              <li>
                <span className="text-slate-500">PDF & DOCX Export Engine</span>
              </li>
              <li>
                <span className="text-slate-500">Certificate Renderer</span>
              </li>
              <li>
                <span className="text-slate-500">IEEE Citation Auto-Formatter</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Technologies Used */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                React 19
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Vite
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Tailwind CSS v4
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Google GenAI SDK
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Recharts
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Lucide Icons
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Project Report Generator. Built for Google AI Studio Preview. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              Academic Standards Compliant
            </span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              Privacy & Zero Data Retention
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
