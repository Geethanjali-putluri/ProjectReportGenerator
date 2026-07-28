import React from 'react';
import { NavPage } from '../../types';
import {
  AlertCircle,
  CheckCircle2,
  Target,
  Sparkles,
  TrendingUp,
  Compass,
  ArrowRight,
  ShieldCheck,
  Zap,
  BookOpen,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: NavPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
          <span>Project Documentation Blueprint</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          About Project Report Generator
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          An in-depth breakdown of the challenges in academic reporting, our technical solution, core objectives, advantages, student benefits, and long-term project vision.
        </p>
      </div>

      {/* Grid 1: Problem Statement & Solution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Problem Statement Card */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-rose-500/30 backdrop-blur-md space-y-5 shadow-2xl relative overflow-hidden group">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Problem Statement</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Engineering students, computer science scholars, and research scholars spend upwards of 15 to 25 hours per project report struggling with formatting inconsistency, margin misalignments, missing mandatory university sections, grammatical ambiguity, and lack of standardized IEEE layout guidelines.
          </p>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-rose-300 space-y-2">
            <span className="font-semibold block text-rose-400">Key Friction Points:</span>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>Inconsistent typography between body, headings, and code snippets.</li>
              <li>Missing institutional certificates and guide signature pages.</li>
              <li>Difficulty articulating formal technical abstracts and methodologies.</li>
            </ul>
          </div>
        </div>

        {/* Solution Card */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-emerald-500/30 backdrop-blur-md space-y-5 shadow-2xl relative overflow-hidden group">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">The Intelligent Solution</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Project Report Generator bridges user project metadata with Google Gemini LLM intelligence to automatically construct, format, and render complete, university-grade reports with cover pages, certificates, table of contents, and exportable PDF/DOCX formats.
          </p>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-emerald-300 space-y-2">
            <span className="font-semibold block text-emerald-400">Core Architecture Highlights:</span>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>Server-side Gemini 2.5 Flash API proxy for zero key exposure.</li>
              <li>Standardized IEEE-compliant typography and section hierarchy.</li>
              <li>Instant print preview with browser PDF rendering & Word DOCX output.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-8 shadow-2xl">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Project Objectives</h2>
            <p className="text-slate-400 text-xs">Measurable targets behind this application</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
            <span className="text-indigo-400 font-extrabold text-sm">Objective 1</span>
            <h3 className="text-sm font-bold text-white">Standardization</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Enforce uniform academic standards across all generated engineering reports.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
            <span className="text-indigo-400 font-extrabold text-sm">Objective 2</span>
            <h3 className="text-sm font-bold text-white">Language Refinement</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Leverage Gemini LLM to refine technical tone, grammar, and formal abstracts.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
            <span className="text-indigo-400 font-extrabold text-sm">Objective 3</span>
            <h3 className="text-sm font-bold text-white">Time Efficiency</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Reduce total report creation duration from hours to under 3 minutes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
            <span className="text-indigo-400 font-extrabold text-sm">Objective 4</span>
            <h3 className="text-sm font-bold text-white">Subject Tailoring</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Incorporate domain modules for Data Structures, C Language, and Technical English.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
            <span className="text-indigo-400 font-extrabold text-sm">Objective 5</span>
            <h3 className="text-sm font-bold text-white">Dual Export Support</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Provide seamless PDF print views and editable DOCX downloads.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
            <span className="text-indigo-400 font-extrabold text-sm">Objective 6</span>
            <h3 className="text-sm font-bold text-white">Usage Insights</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Provide an analytics dashboard to monitor generation metrics and top subjects.
            </p>
          </div>
        </div>
      </div>

      {/* Advantages & Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Advantages */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-indigo-500/30 backdrop-blur-md space-y-6 shadow-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white">Technical Advantages</h2>
          </div>
          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex items-start space-x-3">
              <span className="text-indigo-400 font-bold">•</span>
              <span><strong>Server-Side Security:</strong> API keys remain encrypted on Cloud Run container endpoints.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-indigo-400 font-bold">•</span>
              <span><strong>Zero Installation Required:</strong> Operates entirely in web browsers with zero software downloads.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-indigo-400 font-bold">•</span>
              <span><strong>Real-time State Sync:</strong> Local storage persistence keeps reports safe during accidental reloads.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-indigo-400 font-bold">•</span>
              <span><strong>Sample Data Engine:</strong> Instant fill feature enables immediate testing and template inspection.</span>
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-purple-500/30 backdrop-blur-md space-y-6 shadow-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white">Student & Academic Benefits</h2>
          </div>
          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex items-start space-x-3">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong>Higher Evaluation Marks:</strong> Error-free formatting and articulate technical prose impress evaluators.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong>Reduced Stress:</strong> Eliminates last-minute formatting chaos before final semester viva submissions.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong>Institutional Compliance:</strong> Built-in certificate signatures for Guide, HOD, and Principal.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong>Portable Outputs:</strong> Easily share PDF files with guides or convert DOCX for custom modifications.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Future Scope */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 backdrop-blur-md space-y-6 shadow-2xl">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Future Scope & Roadmap</h2>
            <p className="text-slate-400 text-xs">Planned innovations for upcoming platform iterations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
            <span className="text-amber-400 font-bold block">1. Voice Input Dictation</span>
            <p className="text-slate-400">Speech-to-text dictation for abstract and methodology fields.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
            <span className="text-indigo-400 font-bold block">2. Multi-Language Support</span>
            <p className="text-slate-400">Automated translation into Spanish, French, German, and Hindi.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
            <span className="text-emerald-400 font-bold block">3. Citation Generator</span>
            <p className="text-slate-400">Auto-search IEEE, APA, and Harvard citations from DOI numbers.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
            <span className="text-purple-400 font-bold block">4. Plagiarism Checker</span>
            <p className="text-slate-400">Integrated similarity index scoring before final export.</p>
          </div>
        </div>

        <div className="pt-4 flex justify-center">
          <button
            onClick={() => onNavigate('generator')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-lg flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Try Report Generator Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
