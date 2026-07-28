import React, { useState } from 'react';
import { ReportFormData, SavedReport } from '../../types';
import { sampleReportData } from '../../data/sampleData';
import { generateIEEEReport } from '../../services/reportGeneratorService';
import confetti from 'canvas-confetti';
import {
  FileText,
  Sparkles,
  Eye,
  Edit3,
  Download,
  Copy,
  Check,
  Award,
  Loader2,
  Trash2,
  Printer,
  GraduationCap,
  Layers,
  BookOpen,
  CheckCircle2,
  Wand2,
  ListOrdered,
  FileSpreadsheet,
} from 'lucide-react';

interface ReportGeneratorPageProps {
  onReportGenerated?: (report: SavedReport) => void;
}

export const ReportGeneratorPage: React.FC<ReportGeneratorPageProps> = ({ onReportGenerated }) => {
  // Input fields state (Only 8 user inputs required + background college details for title page)
  const [formData, setFormData] = useState<ReportFormData>(sampleReportData);
  const [viewMode, setViewMode] = useState<'form' | 'preview'>('form');
  const [activeTab, setActiveTab] = useState<'document' | 'certificate' | 'markdown'>('document');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  // Field change handler
  const handleChange = (field: keyof ReportFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Sample presets for 1-click test
  const handleLoadPreset = async (presetType: 'carbon' | 'stress' | 'generator' | 'library') => {
    let preset: Partial<ReportFormData> = {};
    if (presetType === 'carbon') {
      preset = {
        projectTitle: 'Campus Carbon Footprint Tracker',
        studentName: 'Geethanjali P.',
        registerNumber: '312221104088',
        guideName: 'Dr. K. R. Raman, Ph.D.',
        department: 'Department of Environmental Engineering & CS',
        college: 'National Institute of Technology & Engineering',
        subject: 'Sustainability & Data Analytics',
        technologies: 'React, Python, IoT Environmental Sensors, PostgreSQL, Chart.js',
        projectDescription: 'An automated campus sustainability system that tracks greenhouse gas emissions, energy consumption across departments, and provides actionable analytics for achieving carbon neutrality.',
      };
    } else if (presetType === 'stress') {
      preset = {
        projectTitle: 'Student Stress Level Manager',
        studentName: 'Arun Kumar V.',
        registerNumber: '312221104012',
        guideName: 'Dr. Sarah M. Jenkins, Ph.D.',
        department: 'Department of Artificial Intelligence & Data Science',
        college: 'National Institute of Engineering',
        subject: 'Artificial Intelligence & Mental Healthcare',
        technologies: 'Python, PyTorch, Wearable PPG Sensors, Machine Learning, React Native',
        projectDescription: 'A predictive mental wellness application that analyzes physiological sensor metrics and self-reported questionnaire data to detect elevated stress levels and deliver personalized recommendations.',
      };
    } else if (presetType === 'generator') {
      preset = {
        projectTitle: 'Project Report Generator',
        studentName: 'Alex V. Harrison',
        registerNumber: '312221104089',
        guideName: 'Prof. Marcus Brody, M.Tech',
        department: 'Department of Computer Science & Engineering',
        college: 'National Institute of Engineering & Technology',
        subject: 'Software Engineering & AI Studio',
        technologies: 'Next.js, Gemini 2.5 Flash, TypeScript, Tailwind CSS, Node.js',
        projectDescription: 'An automated academic documentation engine that converts user project metadata into complete, IEEE-formatted B.Tech thesis reports with dynamic AI generation.',
      };
    } else if (presetType === 'library') {
      preset = {
        projectTitle: 'Library Management System',
        studentName: 'Priya Sharma',
        registerNumber: '312221104105',
        guideName: 'Dr. Robert E. Chen, Ph.D.',
        department: 'Department of Computer Science',
        college: 'National Institute of Technology',
        subject: 'Database Management Systems & C++',
        technologies: 'C++, SQLite, RFID Scanner, Qt Framework, Data Structures',
        projectDescription: 'An enterprise book circulation system using B+ tree indexing and RFID scanning for real-time inventory management and sub-50ms search query performance.',
      };
    }

    setFormData((prev) => ({
      ...prev,
      ...preset,
    }));
  };

  // Clear Form
  const handleClearForm = () => {
    setFormData({
      projectTitle: '',
      studentName: '',
      registerNumber: '',
      guideName: '',
      department: '',
      college: 'National Institute of Engineering & Technology',
      subject: '',
      technologies: '',
      projectDescription: '',
      abstract: '',
      problemStatement: '',
      objectives: '',
      methodology: '',
      systemDesign: '',
      modules: '',
      results: '',
      conclusion: '',
      futureScope: '',
      references: '',
      acknowledgement: '',
      certificateDetails: {
        academicYear: '2025 - 2026',
        hodName: 'Dr. Robert E. Chen, Ph.D.',
        principalName: 'Dr. Eleanor Vance, D.Sc.',
      },
    });
  };

  // Confetti helper
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (e) {
      // fallback
    }
  };

  // Generate Report Action
  const handleGenerateReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.projectTitle || !formData.projectDescription) {
      alert('Please fill in the Project Title and Short Project Description.');
      return;
    }

    setIsGenerating(true);

    try {
      // Call AI generation service
      const generated = await generateIEEEReport({
        projectTitle: formData.projectTitle,
        studentName: formData.studentName || 'Student Name',
        registerNumber: formData.registerNumber || 'Reg No',
        department: formData.department || 'Computer Science & Engineering',
        guideName: formData.guideName || 'Project Guide',
        subject: formData.subject || 'Engineering',
        technologies: formData.technologies || 'Software Engineering Stack',
        projectDescription: formData.projectDescription,
      });

      const updatedReport: ReportFormData = {
        ...formData,
        ...generated,
      };

      setFormData(updatedReport);
      setViewMode('preview');
      setActiveTab('document');
      triggerConfetti();

      if (onReportGenerated) {
        onReportGenerated({
          id: `REP-${Date.now()}`,
          timestamp: new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
          data: updatedReport,
        });
      }
    } catch (err) {
      console.error('Error generating report:', err);
      alert('Report generation encountered an error. Proceeding with synthesized fallback.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Download PDF
  const handleDownloadPDF = () => {
    triggerConfetti();
    window.print();
  };

  // Download DOCX
  const handleDownloadDOCX = () => {
    triggerConfetti();
    const docContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><title>${formData.projectTitle}</title>
    <style>
      body { font-family: 'Times New Roman', serif; margin: 40px; color: #111; line-height: 1.5; }
      h1 { font-size: 22pt; text-align: center; margin-bottom: 5px; text-transform: uppercase; }
      h2 { font-size: 14pt; color: #000; border-bottom: 1.5pt solid #000; padding-bottom: 3px; margin-top: 22px; text-transform: uppercase; }
      p { font-size: 11pt; text-align: justify; }
      .center { text-align: center; }
      .meta { font-size: 11pt; margin-bottom: 30px; }
    </style>
    </head>
    <body>
      <div className="center">
        <h1>${formData.projectTitle || 'PROJECT REPORT'}</h1>
        <p className="meta">
          <strong>A Project Report Submitted by</strong><br/>
          ${formData.studentName} (${formData.registerNumber})<br/>
          Department of ${formData.department}<br/>
          ${formData.college}<br/>
          Under the Guidance of ${formData.guideName}
        </p>
      </div>
      <hr/>
      <h2>ABSTRACT</h2>
      <p>${formData.abstract}</p>
      <h2>1. PROBLEM STATEMENT</h2>
      <p>${formData.problemStatement}</p>
      <h2>2. OBJECTIVES</h2>
      <p>${formData.objectives}</p>
      <h2>3. METHODOLOGY</h2>
      <p>${formData.methodology}</p>
      <h2>4. SYSTEM DESIGN</h2>
      <p>${formData.systemDesign}</p>
      <h2>5. MODULES</h2>
      <p>${formData.modules}</p>
      <h2>6. RESULTS & OBSERVATIONS</h2>
      <p>${formData.results}</p>
      <h2>7. CONCLUSION</h2>
      <p>${formData.conclusion}</p>
      <h2>8. FUTURE SCOPE</h2>
      <p>${formData.futureScope}</p>
      <h2>REFERENCES</h2>
      <p>${formData.references}</p>
      <h2>ACKNOWLEDGEMENT</h2>
      <p>${formData.acknowledgement}</p>
    </body>
    </html>
    `;

    const blob = new Blob(['\ufeff' + docContent], {
      type: 'application/msword',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.projectTitle.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 30)}_IEEE_Report.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Copy Markdown
  const handleCopyMarkdown = () => {
    const md = `# ${formData.projectTitle}\n\n**Student:** ${formData.studentName} (${formData.registerNumber})\n**Guide:** ${formData.guideName}\n**Department:** ${formData.department}\n**College:** ${formData.college}\n**Subject:** ${formData.subject}\n\n## Abstract\n${formData.abstract}\n\n## 1. Problem Statement\n${formData.problemStatement}\n\n## 2. Objectives\n${formData.objectives}\n\n## 3. Methodology\n${formData.methodology}\n\n## 4. System Design\n${formData.systemDesign}\n\n## 5. Modules\n${formData.modules}\n\n## 6. Results\n${formData.results}\n\n## 7. Conclusion\n${formData.conclusion}\n\n## 8. Future Scope\n${formData.futureScope}\n\n## References\n${formData.references}\n\n## Acknowledgement\n${formData.acknowledgement}`;
    navigator.clipboard.writeText(md);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/60 p-6 rounded-3xl border border-slate-800 backdrop-blur-xl">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>AI-Powered IEEE B.Tech Report Generator</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Project Report Generator
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Enter your project details below. The AI will automatically generate a complete 12-section IEEE academic report.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            id="view-edit-mode-btn"
            onClick={() => setViewMode('form')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              viewMode === 'form'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Form</span>
          </button>

          <button
            id="view-preview-mode-btn"
            onClick={() => setViewMode('preview')}
            disabled={!formData.abstract}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              viewMode === 'preview'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white opacity-90'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Preview Report</span>
          </button>
        </div>
      </div>

      {/* FORM MODE */}
      {viewMode === 'form' && (
        <form onSubmit={handleGenerateReport} className="space-y-8">
          {/* Preset Buttons Bar */}
          <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 flex items-center space-x-2">
                <Wand2 className="w-4 h-4 text-amber-300" />
                <span>1-Click Example Project Loaders:</span>
              </span>
              <button
                type="button"
                onClick={handleClearForm}
                className="text-xs text-rose-400 hover:text-rose-300 flex items-center space-x-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Inputs</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                type="button"
                onClick={() => handleLoadPreset('carbon')}
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-left transition-all group"
              >
                <div className="text-[11px] font-bold text-emerald-400 group-hover:text-emerald-300">🌱 Carbon Footprint</div>
                <div className="text-[10px] text-slate-400 truncate">Sustainability & Emissions</div>
              </button>

              <button
                type="button"
                onClick={() => handleLoadPreset('stress')}
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 text-left transition-all group"
              >
                <div className="text-[11px] font-bold text-blue-400 group-hover:text-blue-300">🧠 Stress Level Manager</div>
                <div className="text-[10px] text-slate-400 truncate">Mental Health & AI</div>
              </button>

              <button
                type="button"
                onClick={() => handleLoadPreset('generator')}
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 text-left transition-all group"
              >
                <div className="text-[11px] font-bold text-indigo-400 group-hover:text-indigo-300">📄 Report Generator</div>
                <div className="text-[10px] text-slate-400 truncate">Automation & IEEE</div>
              </button>

              <button
                type="button"
                onClick={() => handleLoadPreset('library')}
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/50 text-left transition-all group"
              >
                <div className="text-[11px] font-bold text-purple-400 group-hover:text-purple-300">📚 Library System</div>
                <div className="text-[10px] text-slate-400 truncate">B+ Trees & RFID</div>
              </button>
            </div>
          </div>

          {/* Form Fields Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6 backdrop-blur-md">
            <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <h2 className="text-lg font-bold text-white">Project Metadata & Parameters</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project Title */}
              <div className="space-y-2 lg:col-span-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.projectTitle}
                  onChange={(e) => handleChange('projectTitle', e.target.value)}
                  placeholder="e.g. Campus Carbon Footprint Tracker"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Subject / Domain *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  placeholder="e.g. Environmental Engineering & CS"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Student Name */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Student Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) => handleChange('studentName', e.target.value)}
                  placeholder="e.g. Geethanjali P."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Register Number */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Register Number *
                </label>
                <input
                  type="text"
                  required
                  value={formData.registerNumber}
                  onChange={(e) => handleChange('registerNumber', e.target.value)}
                  placeholder="e.g. 312221104088"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Department */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Department *
                </label>
                <input
                  type="text"
                  required
                  value={formData.department}
                  onChange={(e) => handleChange('department', e.target.value)}
                  placeholder="e.g. Department of Computer Science & Engineering"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Guide Name */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Guide Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.guideName}
                  onChange={(e) => handleChange('guideName', e.target.value)}
                  placeholder="e.g. Dr. Sarah M. Jenkins, Ph.D."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Technologies Used */}
              <div className="space-y-2 lg:col-span-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Technologies Used *
                </label>
                <input
                  type="text"
                  required
                  value={formData.technologies}
                  onChange={(e) => handleChange('technologies', e.target.value)}
                  placeholder="e.g. React, Python, PostgreSQL, IoT Sensors, Chart.js"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Short Project Description */}
              <div className="space-y-2 md:col-span-2 lg:col-span-3">
                <label className="text-xs font-semibold text-slate-300 block">
                  Short Project Description (3–5 lines) *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.projectDescription}
                  onChange={(e) => handleChange('projectDescription', e.target.value)}
                  placeholder="Briefly describe what your project does, key problem it solves, and core workflow..."
                  className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 leading-relaxed font-sans"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              id="generate-report-submit-btn"
              disabled={isGenerating}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-bold shadow-2xl shadow-indigo-600/40 flex items-center justify-center space-x-3 transition-all hover:scale-[1.02] disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-amber-300" />
                  <span>Analyzing Domain & Generating IEEE Report...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  <span>Generate Report</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* PREVIEW MODE */}
      {viewMode === 'preview' && (
        <div className="space-y-6">
          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl print:hidden">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActiveTab('document')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'document'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                Preview Report
              </button>

              <button
                onClick={() => setActiveTab('certificate')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'certificate'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                Bonafide Certificate
              </button>

              <button
                onClick={() => setActiveTab('markdown')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'markdown'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                Raw Markdown
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('form')}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center space-x-1.5"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Report</span>
              </button>

              <button
                id="download-pdf-btn"
                onClick={handleDownloadPDF}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow flex items-center space-x-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>

              <button
                id="download-docx-btn"
                onClick={handleDownloadDOCX}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow flex items-center space-x-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download DOCX</span>
              </button>
            </div>
          </div>

          {/* TAB 1: PREVIEW REPORT (12 IEEE SECTIONS) */}
          {activeTab === 'document' && (
            <div className="p-8 sm:p-14 rounded-3xl bg-white text-slate-900 shadow-2xl space-y-12 max-w-4xl mx-auto font-sans print:p-0 print:shadow-none print:max-w-none print:bg-white print:text-black">
              {/* SECTION 1: Title Page */}
              <div className="text-center space-y-6 pb-12 border-b-2 border-slate-900">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-600">
                  {formData.college || 'NATIONAL INSTITUTE OF ENGINEERING & TECHNOLOGY'}
                </div>

                <h1 className="text-2xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                  {formData.projectTitle || 'PROJECT TITLE'}
                </h1>

                <div className="pt-4 space-y-2 text-xs sm:text-sm text-slate-700">
                  <p className="font-bold text-slate-900 uppercase">A Project Report Submitted in Partial Fulfillment</p>
                  <p>for the award of the degree of</p>
                  <p className="font-extrabold text-slate-900 text-sm uppercase">{formData.department || 'BACHELOR OF ENGINEERING'}</p>
                  <p className="text-slate-600 font-medium">Subject: {formData.subject}</p>
                  <p className="text-slate-500 text-xs">Technologies: {formData.technologies}</p>
                </div>

                <div className="grid grid-cols-2 gap-8 text-left max-w-lg mx-auto pt-8 text-xs border-t border-slate-300">
                  <div>
                    <span className="font-bold uppercase block text-slate-500 text-[10px]">Submitted By:</span>
                    <span className="font-extrabold text-slate-900 block">{formData.studentName}</span>
                    <span className="text-slate-600">Reg No: {formData.registerNumber}</span>
                  </div>

                  <div>
                    <span className="font-bold uppercase block text-slate-500 text-[10px]">Under the Guidance of:</span>
                    <span className="font-extrabold text-slate-900 block">{formData.guideName}</span>
                    <span className="text-slate-600">{formData.department}</span>
                  </div>
                </div>

                <div className="pt-6 text-xs text-slate-500 font-semibold">
                  Academic Session: {formData.certificateDetails?.academicYear || '2025 - 2026'}
                </div>
              </div>

              {/* Table of Contents */}
              <div className="space-y-3 pb-8 border-b border-slate-200 text-xs">
                <h3 className="font-extrabold uppercase text-slate-900 tracking-wider flex items-center space-x-2">
                  <ListOrdered className="w-4 h-4 text-indigo-600" />
                  <span>Table of Contents</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 font-mono">
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <span>1. Title Page & Metadata</span>
                    <span>Page 1</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <span>2. Abstract</span>
                    <span>Page 2</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <span>3. Problem Statement</span>
                    <span>Page 3</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <span>4. Objectives</span>
                    <span>Page 3</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <span>5. Methodology</span>
                    <span>Page 4</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <span>6. System Design</span>
                    <span>Page 5</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <span>7. Modules</span>
                    <span>Page 6</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <span>8. Results & Observations</span>
                    <span>Page 7</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <span>9. Conclusion</span>
                    <span>Page 8</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <span>10. Future Scope</span>
                    <span>Page 8</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <span>11. IEEE References</span>
                    <span>Page 9</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <span>12. Acknowledgement</span>
                    <span>Page 9</span>
                  </div>
                </div>
              </div>

              {/* SECTION 2: ABSTRACT */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
                  2. Abstract
                </h2>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed text-justify font-serif">
                  {formData.abstract}
                </p>
              </div>

              {/* SECTION 3: PROBLEM STATEMENT */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
                  3. Problem Statement
                </h2>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed text-justify font-serif">
                  {formData.problemStatement}
                </p>
              </div>

              {/* SECTION 4: OBJECTIVES */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
                  4. Objectives
                </h2>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-serif">
                  {formData.objectives}
                </p>
              </div>

              {/* SECTION 5: METHODOLOGY */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
                  5. Methodology & Execution Pipeline
                </h2>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-serif">
                  {formData.methodology}
                </p>
              </div>

              {/* SECTION 6: SYSTEM DESIGN */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
                  6. System Design & Architecture
                </h2>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-serif">
                  {formData.systemDesign}
                </p>
              </div>

              {/* SECTION 7: MODULES */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
                  7. System Modules
                </h2>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-serif">
                  {formData.modules}
                </p>
              </div>

              {/* SECTION 8: RESULTS & OBSERVATIONS */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
                  8. Results & Observations
                </h2>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-serif">
                  {formData.results}
                </p>
              </div>

              {/* SECTION 9: CONCLUSION */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
                  9. Conclusion
                </h2>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif">
                  {formData.conclusion}
                </p>
              </div>

              {/* SECTION 10: FUTURE SCOPE */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
                  10. Future Scope & Enhancements
                </h2>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-serif">
                  {formData.futureScope}
                </p>
              </div>

              {/* SECTION 11: REFERENCES */}
              <div className="space-y-3 pt-4 border-t border-slate-300">
                <h2 className="text-lg font-bold text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
                  11. IEEE References
                </h2>
                <p className="text-[11px] text-slate-800 font-mono whitespace-pre-wrap leading-relaxed">
                  {formData.references}
                </p>
              </div>

              {/* SECTION 12: ACKNOWLEDGEMENT */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
                  12. Acknowledgement
                </h2>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif">
                  {formData.acknowledgement}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: CERTIFICATE PREVIEW */}
          {activeTab === 'certificate' && (
            <div className="p-10 sm:p-14 rounded-3xl bg-white text-slate-900 border-8 border-slate-900 shadow-2xl max-w-4xl mx-auto space-y-8 font-serif print:border-4 print:max-w-none">
              <div className="text-center space-y-4">
                <h2 className="text-xs font-extrabold tracking-widest text-slate-600 uppercase font-sans">
                  {formData.college || 'NATIONAL INSTITUTE OF ENGINEERING & TECHNOLOGY'}
                </h2>
                <p className="text-xs text-slate-600 uppercase font-sans font-bold">
                  {formData.department || 'Department of Computer Science & Engineering'}
                </p>

                <div className="pt-4 border-b-2 border-slate-900 pb-2">
                  <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-slate-900 font-sans">
                    BONAFIDE CERTIFICATE
                  </h1>
                </div>
              </div>

              <div className="text-xs sm:text-sm leading-loose text-justify text-slate-900 space-y-4">
                <p>
                  This is to certify that the project report entitled{' '}
                  <strong className="underline font-bold uppercase">{formData.projectTitle}</strong> is a bonafide record of the work done by{' '}
                  <strong className="font-bold underline">{formData.studentName}</strong> (Register No:{' '}
                  <strong className="font-bold">{formData.registerNumber}</strong>) in partial fulfillment of the requirements for the award of the degree during the academic year{' '}
                  <strong>{formData.certificateDetails?.academicYear || '2025 - 2026'}</strong>.
                </p>
              </div>

              {/* Signatures */}
              <div className="grid grid-cols-3 gap-6 text-center pt-20 text-xs font-sans">
                <div className="space-y-1">
                  <div className="border-t border-slate-900 pt-2 font-bold text-slate-900">
                    {formData.guideName || 'Project Guide'}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase">Project Guide</div>
                </div>

                <div className="space-y-1">
                  <div className="border-t border-slate-900 pt-2 font-bold text-slate-900">
                    {formData.certificateDetails?.hodName || 'Head of Department'}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase">Head of Department</div>
                </div>

                <div className="space-y-1">
                  <div className="border-t border-slate-900 pt-2 font-bold text-slate-900">
                    {formData.certificateDetails?.principalName || 'Principal'}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase">Principal</div>
                </div>
              </div>

              <div className="text-center pt-8 text-[10px] text-slate-500 font-sans border-t border-slate-200">
                Submitted for the Viva-Voce Examination held on: ___________________
              </div>
            </div>
          )}

          {/* TAB 3: MARKDOWN / TEXT */}
          {activeTab === 'markdown' && (
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 max-w-4xl mx-auto">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300">Raw Markdown Format</span>
                <button
                  onClick={handleCopyMarkdown}
                  className="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center space-x-1.5"
                >
                  {copiedMarkdown ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Markdown</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 text-indigo-200 text-xs font-mono overflow-x-auto leading-relaxed max-h-[500px]">
{`# ${formData.projectTitle}

**Student Name:** ${formData.studentName} (${formData.registerNumber})
**Guide Name:** ${formData.guideName}
**Department:** ${formData.department}
**College:** ${formData.college}
**Subject:** ${formData.subject}
**Technologies:** ${formData.technologies}

## Abstract
${formData.abstract}

## 1. Problem Statement
${formData.problemStatement}

## 2. Objectives
${formData.objectives}

## 3. Methodology
${formData.methodology}

## 4. System Design
${formData.systemDesign}

## 5. Modules
${formData.modules}

## 6. Results
${formData.results}

## 7. Conclusion
${formData.conclusion}

## 8. Future Scope
${formData.futureScope}

## References
${formData.references}

## Acknowledgement
${formData.acknowledgement}`}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
