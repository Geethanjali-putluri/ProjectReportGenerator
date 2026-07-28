import React, { useState } from 'react';
import { subjectsData } from '../../data/sampleData';
import { NavPage } from '../../types';
import {
  BookOpen,
  Network,
  Cpu,
  Code2,
  Terminal,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Search,
  ArrowRight,
  Sparkles,
  Layers,
  Copy,
  Check,
} from 'lucide-react';

interface SubjectsPageProps {
  onNavigate: (page: NavPage) => void;
}

export const SubjectsPage: React.FC<SubjectsPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<string | null>(null);

  const toggleTopic = (key: string) => {
    setExpandedTopics((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeIndex(key);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-6 h-6 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-400" />;
      default:
        return <BookOpen className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
          <span>Curriculum Knowledge Modules</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Core Academic Subjects & Software Utility
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Detailed technical analysis of key academic subjects. Discover topics, code/syntax patterns, real-world industry applications, and how they contribute to professional software development.
        </p>

        {/* Search Bar */}
        <div className="pt-2 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search topics (e.g., Pointers, Trees, Grammar)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-xl"
          />
        </div>
      </div>

      {/* 3 Subject Cards */}
      <div className="space-y-12">
        {subjectsData.map((subject) => {
          const filteredTopics = subject.topics.filter(
            (t) =>
              t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
              t.usefulness.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (searchTerm && filteredTopics.length === 0) return null;

          return (
            <div
              key={subject.id}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-8 relative overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-lg">
                    {getSubjectIcon(subject.iconName)}
                  </div>
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-extrabold uppercase tracking-wider">
                      {subject.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {subject.title}
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
                      {subject.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('generator')}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-indigo-300 hover:text-white text-xs font-bold transition-all flex items-center space-x-2 shrink-0 self-start md:self-auto"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Use in Report</span>
                </button>
              </div>

              {/* Real World Applications & Software Dev Utility */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Real-world applications list */}
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center space-x-2">
                    <Layers className="w-4 h-4" />
                    <span>Real-World Systems & Applications</span>
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {subject.realWorldApplications.map((app, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Software Dev Usefulness */}
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center space-x-2">
                    <Code2 className="w-4 h-4" />
                    <span>Software Development Impact</span>
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {subject.softwareDevUsefulness}
                  </p>
                </div>
              </div>

              {/* Topics Grid */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  Key Topics Breakdown ({filteredTopics.length})
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredTopics.map((topic, index) => {
                    const key = `${subject.id}-${index}`;
                    const isExpanded = expandedTopics[key];

                    return (
                      <div
                        key={index}
                        className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-slate-700 transition-all space-y-3"
                      >
                        <div
                          onClick={() => toggleTopic(key)}
                          className="flex items-center justify-between cursor-pointer group"
                        >
                          <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center space-x-2">
                            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                            <span>{topic.name}</span>
                          </h4>
                          <button className="text-slate-400 group-hover:text-white">
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {topic.description}
                        </p>

                        <div className="pt-2 border-t border-slate-800/60 text-xs">
                          <span className="text-emerald-400 font-semibold block mb-1">
                            Why it matters:
                          </span>
                          <p className="text-slate-400 text-[11px] leading-relaxed">
                            {topic.usefulness}
                          </p>
                        </div>

                        {/* Expandable Code/Syntax Example */}
                        {isExpanded && topic.codeExample && (
                          <div className="pt-3 border-t border-slate-800 space-y-2">
                            <div className="flex items-center justify-between text-[11px] text-slate-400">
                              <span className="flex items-center space-x-1 text-slate-300">
                                <Terminal className="w-3 h-3 text-indigo-400" />
                                <span>Syntax Snippet</span>
                              </span>
                              <button
                                onClick={() => copyToClipboard(topic.codeExample!, key)}
                                className="hover:text-white flex items-center space-x-1 text-indigo-400"
                              >
                                {copiedCodeIndex === key ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-400" />
                                    <span className="text-emerald-400">Copied</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>Copy</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-indigo-200 overflow-x-auto">
                              {topic.codeExample}
                            </pre>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="p-8 rounded-3xl bg-slate-900/60 border border-indigo-500/30 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">
          Ready to synthesize these topics into your Project Report?
        </h3>
        <p className="text-slate-400 text-xs max-w-xl mx-auto">
          Our Report Generator automatically integrates subject terminology and methodologies into standard report sections.
        </p>
        <button
          onClick={() => onNavigate('generator')}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold shadow-lg inline-flex items-center space-x-2"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Open Report Generator Form</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
