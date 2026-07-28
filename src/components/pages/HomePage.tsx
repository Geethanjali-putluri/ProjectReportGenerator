import React from 'react';
import { NavPage } from '../../types';
import {
  FileText,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  BarChart2,
  Clock,
  Award,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Layers,
  GraduationCap,
  Download,
  Play,
  TrendingUp,
  Sliders,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        {/* Glowing Background Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-semibold shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>AI-Driven Academic & Engineering Documentation Engine</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight max-w-5xl mx-auto">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Project Report Generator
            </span>
          </h1>

          {/* Short Description */}
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Project Report Generator simplifies academic, engineering, and research documentation. Instantly create structured, IEEE-compliant reports complete with Abstract, Methodology, Results, Code, and Official Certificates.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="hero-generate-report-btn"
              onClick={() => onNavigate('generator')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-bold shadow-2xl shadow-indigo-600/40 hover:shadow-indigo-600/60 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Generate Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-live-demo-btn"
              onClick={() => onNavigate('live-demo')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-sm font-bold shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-md"
            >
              <Play className="w-4 h-4 text-indigo-400 fill-indigo-400/20" />
              <span>Live Demo</span>
            </button>
          </div>

          {/* Hero Quick Preview Mock Badge */}
          <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero Formatting Overhead</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Gemini 2.5 Flash Refinement</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Print Ready PDF & DOCX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-indigo-500/40 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-between pb-3">
              <span className="text-xs font-semibold text-slate-400">Reports Generated</span>
              <FileText className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">14,250+</div>
            <div className="text-[11px] text-emerald-400 mt-1 flex items-center space-x-1">
              <TrendingUp className="w-3 h-3" />
              <span>+24% this month</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-indigo-500/40 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-between pb-3">
              <span className="text-xs font-semibold text-slate-400">Avg Time Saved</span>
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">3.5 Hrs</div>
            <div className="text-[11px] text-slate-400 mt-1">per report submission</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-indigo-500/40 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-between pb-3">
              <span className="text-xs font-semibold text-slate-400">Student Satisfaction</span>
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">4.9 / 5.0</div>
            <div className="text-[11px] text-amber-300 mt-1">Verified User Reviews</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-indigo-500/40 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-between pb-3">
              <span className="text-xs font-semibold text-slate-400">Supported Subjects</span>
              <BookOpen className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">All Engineering</div>
            <div className="text-[11px] text-slate-400 mt-1">DSA, C, English, AI & Web</div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Everything You Need for Academic Perfection
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Built from the ground up for university students, professors, and technical scholars requiring rigorous formatting and intelligent content assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 backdrop-blur-md transition-all duration-300 group shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">AI-Powered Section Refinement</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Enhance Abstract, Objectives, and Methodology using Google Gemini 2.5 Flash to ensure formal, articulate technical language.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 backdrop-blur-md transition-all duration-300 group shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Multi-Subject Knowledge Integration</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Tailored support for Data Structures, C Language, Technical English, and AI/ML project structures.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 backdrop-blur-md transition-all duration-300 group shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Automatic Cover & Certificate View</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Generate official college cover pages and completion certificates complete with Guide, HOD, and Principal signature blocks.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 backdrop-blur-md transition-all duration-300 group shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Instant PDF & DOCX Exports</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Export fully styled PDF documents or editable Word files (.docx) ready for printing or email submission.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 backdrop-blur-md transition-all duration-300 group shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
              <BarChart2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Real-Time Usage Analytics</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Track report generation statistics, download volume, top subject distributions, and monthly usage trends in an interactive dashboard.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 backdrop-blur-md transition-all duration-300 group shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">IEEE & Academic Compliance</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Standardized font hierarchies, section numbering, references layout, and academic citation formats.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/60 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold">
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>What's New in v2.5 Release</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Gemini 2.5 Flash Server-Side Integration
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Experience sub-second AI suggestions for Abstract, Methodology, and Conclusion sections. We have also enhanced PDF print styling, certificate rendering, and sample data auto-fill.
              </p>
            </div>
            <button
              onClick={() => onNavigate('ai-layer')}
              className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 hover:scale-105 transition-all whitespace-nowrap flex items-center space-x-2"
            >
              <Cpu className="w-4 h-4" />
              <span>Explore AI Layer</span>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose This Project */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Comparative Edge
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Why Choose Project Report Generator?
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Traditional manual report writing is slow, prone to formatting bugs, and lacks language refinement. Here is how our platform transforms the experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Manual Writing */}
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-rose-500/20 backdrop-blur-md space-y-6">
            <div className="flex items-center space-x-3 text-rose-400 font-bold text-lg border-b border-slate-800 pb-4">
              <span className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">✕</span>
              <span>Traditional Manual Word / LaTeX Writing</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start space-x-3">
                <span className="text-rose-400 mt-0.5">•</span>
                <span>Hours spent fighting table margins and font size mismatches.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-rose-400 mt-0.5">•</span>
                <span>Grammatical mistakes and repetitive technical vocabulary.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-rose-400 mt-0.5">•</span>
                <span>No automated certificate or cover page formatting.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-rose-400 mt-0.5">•</span>
                <span>Missing academic sections like Objectives, Advantages, or References.</span>
              </li>
            </ul>
          </div>

          {/* Project Report Generator */}
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-indigo-500/50 backdrop-blur-md space-y-6 shadow-2xl relative">
            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-[10px] font-extrabold uppercase text-white shadow-lg">
              Recommended Solution
            </div>
            <div className="flex items-center space-x-3 text-indigo-300 font-bold text-lg border-b border-slate-800 pb-4">
              <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">✓</span>
              <span>Project Report Generator</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Instant standard layout with cover page, certificate, and section numbering.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Gemini LLM automatically improves abstract, methodology, and technical tone.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Instant sample data generator for fast prototyping and testing.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>One-click exports to PDF and DOCX formats with full styling preservation.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-900/60 via-slate-900 to-purple-900/60 border border-indigo-500/40 backdrop-blur-xl space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Generate Your Academic Report?
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Fill out project details or populate sample engineering data in one click to generate a complete report instantly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('generator')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-bold shadow-xl shadow-indigo-600/30 flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Launch Report Generator</span>
            </button>
            <button
              onClick={() => onNavigate('live-demo')}
              className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-bold flex items-center justify-center space-x-2"
            >
              <Play className="w-4 h-4 text-indigo-400" />
              <span>Watch Live Workflow</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
