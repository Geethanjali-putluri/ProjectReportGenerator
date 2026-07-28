import React, { useState, useEffect } from 'react';
import { NavPage, SavedReport } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { SubjectsPage } from './components/pages/SubjectsPage';
import { AiLayerPage } from './components/pages/AiLayerPage';
import { ReportGeneratorPage } from './components/pages/ReportGeneratorPage';
import { AnalyticsPage } from './components/pages/AnalyticsPage';
import { LiveDemoPage } from './components/pages/LiveDemoPage';

export default function App() {
  const [activePage, setActivePage] = useState<NavPage>('home');
  const [reportsCount, setReportsCount] = useState<number>(0);

  // Load saved reports count from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('prg_reports');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setReportsCount(parsed.length);
        }
      }
    } catch (e) {
      console.error('Failed to load saved reports', e);
    }
  }, []);

  const handleReportGenerated = (newReport: SavedReport) => {
    try {
      const saved = localStorage.getItem('prg_reports');
      let reportsList: SavedReport[] = [];
      if (saved) {
        reportsList = JSON.parse(saved);
      }
      reportsList.unshift(newReport);
      localStorage.setItem('prg_reports', JSON.stringify(reportsList));
      setReportsCount(reportsList.length);
    } catch (e) {
      console.error('Failed to save report', e);
    }
  };

  const handleNavigate = (page: NavPage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070b15] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      {/* Background Decorative Ambient Gradients */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed top-1/2 right-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* Global Navbar */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* Main Page View Content */}
      <main className="flex-1 relative z-10">
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activePage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {activePage === 'subjects' && <SubjectsPage onNavigate={handleNavigate} />}
        {activePage === 'ai-layer' && <AiLayerPage onNavigate={handleNavigate} />}
        {activePage === 'generator' && (
          <ReportGeneratorPage onReportGenerated={handleReportGenerated} />
        )}
        {activePage === 'analytics' && (
          <AnalyticsPage reportsGeneratedCount={reportsCount} />
        )}
        {activePage === 'live-demo' && <LiveDemoPage onNavigate={handleNavigate} />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
