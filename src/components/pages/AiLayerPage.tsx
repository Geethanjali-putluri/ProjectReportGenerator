import React, { useState } from 'react';
import { NavPage } from '../../types';
import { generateAIContent } from '../../services/aiService';
import {
  Cpu,
  Sparkles,
  Zap,
  Mic,
  Globe,
  FileCheck2,
  BookMarked,
  Lightbulb,
  ArrowRight,
  Send,
  Loader2,
  Bot,
  Layers,
  Terminal,
  CheckCircle2,
} from 'lucide-react';

interface AiLayerPageProps {
  onNavigate: (page: NavPage) => void;
}

export const AiLayerPage: React.FC<AiLayerPageProps> = ({ onNavigate }) => {
  const [sandboxPrompt, setSandboxPrompt] = useState(
    'Traffic in my city is bad. We built a camera program to count cars and change light colors so ambulances pass faster.'
  );
  const [sandboxResult, setSandboxResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleTestAiSandbox = async () => {
    if (!sandboxPrompt.trim()) return;
    setIsLoading(true);
    setErrorMsg('');
    try {
      const res = await generateAIContent(
        `Transform this informal description into a formal academic report Abstract:\n"""${sandboxPrompt}"""`,
        'You are an expert university professor and technical report evaluator.'
      );
      setSandboxResult(res);
    } catch (err: any) {
      setErrorMsg(err.message || 'Error generating AI text. Ensure GEMINI_API_KEY is configured.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Page Title */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
          <Cpu className="w-3.5 h-3.5 text-indigo-400" />
          <span>Next-Generation Intelligence Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          AI & Large Language Model Layer
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Deep dive into how Artificial Intelligence, Google AI Studio, and Gemini 2.5 Flash power automated academic report generation, language refinement, and structural synthesis.
        </p>
      </div>

      {/* Grid 1: AI Foundations (AI, LLMs, Google AI Studio, Gemini) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-3 hover:border-indigo-500/40 transition-all shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Bot className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Artificial Intelligence</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Subfield of computer science devoted to creating systems capable of reasoning, pattern recognition, and autonomous problem solving.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-3 hover:border-indigo-500/40 transition-all shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Large Language Models</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Neural network architectures trained on vast textual datasets to model deep syntactic and semantic structures across languages.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-3 hover:border-indigo-500/40 transition-all shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Google AI Studio</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Google DeepMind’s developer platform enabling rapid prototyping, server-side API key management, and seamless model deployment.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-3 hover:border-indigo-500/40 transition-all shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Gemini 2.5 Flash</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Google’s ultra-fast, state-of-the-art multimodal model designed for complex technical synthesis, low latency, and zero flowery hype.
          </p>
        </div>
      </div>

      {/* Interactive AI Sandbox Component */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-indigo-500/40 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Interactive Gemini AI Sandbox</h2>
              <p className="text-slate-400 text-xs">Test live AI report section generation in real time</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            Server-Side API Proxy Active
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Box */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-300 block">
              Enter Draft Project Idea / Informal Notes:
            </label>
            <textarea
              rows={5}
              value={sandboxPrompt}
              onChange={(e) => setSandboxPrompt(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono leading-relaxed"
              placeholder="Enter brief project outline..."
            ></textarea>
            <button
              onClick={handleTestAiSandbox}
              disabled={isLoading}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center space-x-2 transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Generating with Gemini...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Synthesize Formal Academic Abstract</span>
                </>
              )}
            </button>
          </div>

          {/* Output Box */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-300 block">
              Gemini Synthesized Output:
            </label>
            <div className="w-full h-44 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-indigo-200 overflow-y-auto leading-relaxed font-mono">
              {errorMsg && <p className="text-rose-400 font-sans">{errorMsg}</p>}
              {!errorMsg && sandboxResult && <p className="whitespace-pre-wrap">{sandboxResult}</p>}
              {!errorMsg && !sandboxResult && !isLoading && (
                <p className="text-slate-500 italic font-sans">
                  Click "Synthesize Formal Academic Abstract" to run Gemini 2.5 Flash on your draft prompt above...
                </p>
              )}
              {isLoading && (
                <div className="flex items-center space-x-2 text-indigo-400 font-sans animate-pulse">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Processing text with Gemini server-side model...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: How AI Helps Generate Specific Sections */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Functional AI Matrix
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            How AI Automates Report Generation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-indigo-400 block">1. Abstract</span>
            <p className="text-slate-300 text-xs font-semibold">Summarizes Scope</p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Distills project objectives, methodologies, and numerical results into a concise 200-word paragraph.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-blue-400 block">2. Objectives</span>
            <p className="text-slate-300 text-xs font-semibold">Numbered Targets</p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Formulates numbered, actionable engineering goals (e.g., latency reduction, accuracy benchmarking).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-purple-400 block">3. Methodology</span>
            <p className="text-slate-300 text-xs font-semibold">Architectural Steps</p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Converts raw technical stacks into multi-tier hardware and software data processing pipelines.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-emerald-400 block">4. Conclusion</span>
            <p className="text-slate-300 text-xs font-semibold">Technical Synthesis</p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Summarizes project findings and validates hypothesis correctness without speculative claims.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-amber-400 block">5. Grammar Tone</span>
            <p className="text-slate-300 text-xs font-semibold">Academic Polish</p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Replaces casual vocabulary with passive or active academic prose conforming to publication standards.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Future AI Enhancements */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Upcoming AI Feature Expansion</h2>
            <p className="text-slate-400 text-xs">Roadmap for upcoming intelligence upgrades</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center space-x-2 text-indigo-400 font-bold text-sm">
              <Mic className="w-4 h-4" />
              <span>Voice Input Dictation</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Speak your project ideas directly into the microphone. AI automatically transcribes and structures your speech into report fields.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm">
              <Globe className="w-4 h-4" />
              <span>Multi-Language Reports</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Generate or translate academic reports in Spanish, French, German, Japanese, and Hindi while maintaining domain vocabulary.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
              <BookMarked className="w-4 h-4" />
              <span>Citation Generator</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Provide paper titles or DOIs to automatically generate IEEE, APA, or ACM formatted bibliography references.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
              <Lightbulb className="w-4 h-4" />
              <span>AI Smart Suggestions</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Real-time autocomplete and section completeness scoring as you type your project details.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
              <FileCheck2 className="w-4 h-4" />
              <span>Plagiarism Checker</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Pre-submission similarity index scoring against academic web sources to guarantee original content.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-purple-400 font-bold text-sm mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Ready to Experience AI?</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Start building your project report with AI-assisted fields today.
              </p>
            </div>
            <button
              onClick={() => onNavigate('generator')}
              className="mt-4 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center space-x-2"
            >
              <span>Open Report Generator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
