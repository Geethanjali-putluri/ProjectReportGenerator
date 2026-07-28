import React, { useState } from 'react';
import { NavPage } from '../../types';
import {
  Play,
  Layers,
  Cpu,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Code2,
  FileText,
  Sliders,
  Maximize2,
  Laptop,
  Check,
  ChevronRight,
  Zap,
} from 'lucide-react';

interface LiveDemoPageProps {
  onNavigate: (page: NavPage) => void;
}

export const LiveDemoPage: React.FC<LiveDemoPageProps> = ({ onNavigate }) => {
  const [beforeAfterTab, setBeforeAfterTab] = useState<'before' | 'after'>('after');
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  const workflowSteps = [
    {
      step: '01',
      title: 'Input Project Details',
      desc: 'Enter Title, Student ID, Guide Name, Department, and Core Technical Fields or click Auto-Fill Sample Data.',
    },
    {
      step: '02',
      title: 'Gemini LLM Synthesis',
      desc: 'Server-side Gemini 2.5 Flash optimizes Abstract, Objectives, Methodology, and Conclusion into formal academic prose.',
    },
    {
      step: '03',
      title: 'Real-Time Document Preview',
      desc: 'Instant rendering of Cover Page, Table of Contents, Bonafide Certificate, and IEEE numbered sections.',
    },
    {
      step: '04',
      title: 'Dual Export Engine',
      desc: 'Download print-ready PDF files or editable DOCX Word files complete with official institutional signature blocks.',
    },
  ];

  const techStack = [
    { name: 'React 19 & Next/Vite', role: 'Frontend Architecture & State Management' },
    { name: 'Tailwind CSS v4', role: 'Dark Navy Glassmorphism UI & Responsive Layouts' },
    { name: 'Google GenAI SDK', role: '@google/genai Server-Side Gemini 2.5 Flash Proxy' },
    { name: 'Recharts Library', role: 'Interactive Analytics & Trend Data Visualizations' },
    { name: 'Lucide Icons', role: 'Scalable Vector Icon System' },
    { name: 'Canvas Confetti', role: 'Celebratory UI Micro-Interactions' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
          <Play className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400/20" />
          <span>Interactive Live Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Application Workflow & Technology Demonstration
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Explore the inner mechanics of Project Report Generator, review the tech stack, compare Before vs. After output quality, and test the interactive workflow simulator.
        </p>
      </div>

      {/* 1. Working Process / Application Workflow Stepper */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-5">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Application Workflow & Working Process</h2>
              <p className="text-slate-400 text-xs">Step-by-step pipeline from raw input to finished PDF</p>
            </div>
          </div>
        </div>

        {/* Stepper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((ws, idx) => (
            <div
              key={idx}
              onClick={() => setActiveWorkflowStep(idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                activeWorkflowStep === idx
                  ? 'bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-600/20 scale-105'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-indigo-400">{ws.step}</span>
                {activeWorkflowStep === idx && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                )}
              </div>
              <h3 className="text-base font-bold text-white">{ws.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{ws.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Before vs After Quality Comparison Slider */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-indigo-500/30 backdrop-blur-xl shadow-2xl space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <h2 className="text-2xl font-bold text-white">Before vs. After Quality Comparison</h2>
            <p className="text-slate-400 text-xs">See how raw text is transformed into IEEE academic standard</p>
          </div>

          {/* Toggle */}
          <div className="flex items-center bg-slate-950 p-1.5 rounded-2xl border border-slate-800 self-start sm:self-auto">
            <button
              onClick={() => setBeforeAfterTab('before')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                beforeAfterTab === 'before'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Before (Unformatted Draft)
            </button>
            <button
              onClick={() => setBeforeAfterTab('after')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                beforeAfterTab === 'after'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              After (Project Report Generator)
            </button>
          </div>
        </div>

        {/* Content Box */}
        {beforeAfterTab === 'before' ? (
          <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-3 font-mono text-xs text-rose-200">
            <div className="flex items-center space-x-2 text-rose-400 font-bold font-sans text-sm">
              <span>✕ Messy Unformatted Draft</span>
            </div>
            <p className="leading-relaxed">
              "project name: traffic app. student: alex. guide: dr jenkins. abstract: traffic is bad in city so we made a program to make ambulances fast. objectives: 1 reduce traffic. 2 help cars. tech: python c++."
            </p>
            <ul className="list-disc list-inside space-y-1 text-rose-300/80 font-sans text-[11px] pt-2">
              <li>No cover page or bonafide certificate.</li>
              <li>Missing official guide signature blocks.</li>
              <li>Casual vocabulary rejected by university evaluators.</li>
            </ul>
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-white text-slate-900 space-y-6 font-sans shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">
                NATIONAL INSTITUTE OF ENGINEERING — OFFICIAL REPORT
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                ✓ Verified IEEE Layout
              </span>
            </div>
            <div>
              <h3 className="text-xl font-extrabold uppercase text-slate-900">
                AI-POWERED SMART TRAFFIC OPTIMIZATION & EMERGENCY CORRIDOR ROUTING
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Submitted by Alex V. Harrison (Reg: 312221104089) | Department of CSE
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold uppercase text-slate-900 block">ABSTRACT</span>
              <p className="text-xs text-slate-800 leading-relaxed font-serif text-justify">
                Traffic congestion in metropolitan centers causes substantial delays, increased fuel consumption, and severe response latencies for emergency medical vehicles. This project presents an intelligent traffic management framework utilizing dynamic graph data structures and real-time computer vision queue estimation...
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 3. Screenshots Mock Placeholders */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <Laptop className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Application Interface Mock Previews</h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">Live Frame Renditions</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 group hover:border-indigo-500/50 transition-all">
            <div className="h-36 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950 p-4 border border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span>Form Mode</span>
                <Sparkles className="w-3 h-3 text-amber-300" />
              </div>
              <div className="space-y-1">
                <div className="w-3/4 h-2 rounded bg-indigo-500/40"></div>
                <div className="w-1/2 h-2 rounded bg-slate-700"></div>
              </div>
            </div>
            <h4 className="text-xs font-bold text-white">1. Form & AI Field Refinement</h4>
            <p className="text-slate-400 text-[11px]">Structured inputs with per-field Gemini improve buttons.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 group hover:border-indigo-500/50 transition-all">
            <div className="h-36 rounded-xl bg-white p-4 flex flex-col justify-between text-slate-900">
              <span className="text-[9px] font-bold uppercase text-slate-500">Document Preview</span>
              <div className="space-y-1">
                <div className="w-full h-2 rounded bg-slate-300"></div>
                <div className="w-5/6 h-2 rounded bg-slate-200"></div>
              </div>
              <div className="border-t border-slate-200 pt-1 text-[8px] text-slate-400">IEEE Layout</div>
            </div>
            <h4 className="text-xs font-bold text-white">2. Full Document Preview</h4>
            <p className="text-slate-400 text-[11px]">Instant academic cover page, certificate & numbered sections.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 group hover:border-indigo-500/50 transition-all">
            <div className="h-36 rounded-xl bg-gradient-to-br from-slate-900 to-blue-950 p-4 border border-slate-800 flex flex-col justify-between">
              <span className="text-[10px] text-indigo-300 font-bold">Analytics Panel</span>
              <div className="flex items-end space-x-1 h-16">
                <div className="w-1/4 h-8 bg-indigo-500 rounded-t"></div>
                <div className="w-1/4 h-12 bg-blue-500 rounded-t"></div>
                <div className="w-1/4 h-6 bg-purple-500 rounded-t"></div>
                <div className="w-1/4 h-14 bg-emerald-500 rounded-t"></div>
              </div>
            </div>
            <h4 className="text-xs font-bold text-white">3. Operational Analytics</h4>
            <p className="text-slate-400 text-[11px]">Real-time usage charts powered by Recharts library.</p>
          </div>
        </div>
      </div>

      {/* 4. Technology Stack Section */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-8">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-5">
          <Code2 className="w-5 h-5 text-indigo-400" />
          <h2 className="text-xl font-bold text-white">Technology Stack Architecture</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2 hover:border-indigo-500/40 transition-all"
            >
              <span className="text-xs font-extrabold text-indigo-400 block">{tech.name}</span>
              <p className="text-xs text-slate-300">{tech.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center p-8 rounded-3xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-purple-900/60 border border-indigo-500/30 space-y-4">
        <h3 className="text-2xl font-bold text-white">Experience the Live Application</h3>
        <p className="text-slate-300 text-xs max-w-xl mx-auto">
          Try creating your first report now with our built-in sample data generator.
        </p>
        <button
          onClick={() => onNavigate('generator')}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold shadow-xl inline-flex items-center space-x-2"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Launch Report Generator</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
