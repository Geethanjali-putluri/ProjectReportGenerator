import React, { useState } from 'react';
import { initialAnalyticsData } from '../../data/sampleData';
import { AnalyticsData } from '../../types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from 'recharts';
import {
  BarChart3,
  TrendingUp,
  Download,
  FileText,
  BookOpen,
  Award,
  Calendar,
  Filter,
} from 'lucide-react';

interface AnalyticsPageProps {
  reportsGeneratedCount?: number;
}

export const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ reportsGeneratedCount = 0 }) => {
  const [timeRange, setTimeRange] = useState<'all' | 'month' | 'week'>('all');

  // Dynamic calculations combining initial data and user actions
  const totalReports = initialAnalyticsData.totalGenerated + reportsGeneratedCount;
  const totalDownloads = initialAnalyticsData.totalDownloads + reportsGeneratedCount * 2;

  const COLORS = ['#6366f1', '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-2">
            <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Platform Operational Intelligence</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">Usage Analytics Dashboard</h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Real-time analytics on report generation volume, subject trends, and export formats.
          </p>
        </div>

        {/* Time range filter */}
        <div className="flex items-center space-x-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
          <Filter className="w-3.5 h-3.5 text-slate-400 ml-2" />
          <button
            onClick={() => setTimeRange('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              timeRange === 'all'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Time
          </button>
          <button
            onClick={() => setTimeRange('month')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              timeRange === 'month'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Last 30 Days
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-2 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Total Reports Generated</span>
            <FileText className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="text-3xl font-extrabold text-white">{totalReports.toLocaleString()}</div>
          <div className="text-[11px] text-emerald-400 flex items-center space-x-1">
            <TrendingUp className="w-3 h-3" />
            <span>+18.4% growth rate</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-2 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Total Document Downloads</span>
            <Download className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-3xl font-extrabold text-white">{totalDownloads.toLocaleString()}</div>
          <div className="text-[11px] text-blue-400">PDF & DOCX Exports</div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-2 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Most Selected Subject</span>
            <BookOpen className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-lg font-bold text-white truncate">Data Structures</div>
          <div className="text-[11px] text-slate-400">38% of total generations</div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-2 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Avg AI Satisfaction</span>
            <Award className="w-5 h-5 text-amber-400" />
          </div>
          <div className="text-3xl font-extrabold text-white">98.4%</div>
          <div className="text-[11px] text-amber-300">Evaluator Quality Score</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* BAR CHART: Reports Generated by Subject */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-2xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Reports Generated by Subject</h3>
              <p className="text-slate-400 text-xs">Distribution across academic domains</p>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">
              Bar Chart
            </span>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={initialAnalyticsData.subjectDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="subject" stroke="#94a3b8" fontSize={10} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '12px',
                    fontSize: '12px',
                    color: '#fff',
                  }}
                />
                <Bar dataKey="count" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PIE CHART: Download Formats Distribution */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-2xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Export Format Distribution</h3>
              <p className="text-slate-400 text-xs">User breakdown for PDF vs DOCX vs Markdown</p>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">
              Pie Chart
            </span>
          </div>

          <div className="h-72 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={initialAnalyticsData.downloadFormats}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} (${((percent || 0) * 100).toFixed(0)}%)`}
                >
                  {initialAnalyticsData.downloadFormats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '12px',
                    fontSize: '12px',
                    color: '#fff',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* LINE CHART: Monthly Usage Trend */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-2xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Monthly Growth & Usage Trend</h3>
            <p className="text-slate-400 text-xs">Track generation vs download volume over time</p>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">
            Line Chart
          </span>
        </div>

        <div className="h-80 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={initialAnalyticsData.monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} />
              <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  borderColor: '#334155',
                  borderRadius: '12px',
                  fontSize: '12px',
                  color: '#fff',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }} />
              <Line
                type="monotone"
                dataKey="reports"
                name="Reports Generated"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="downloads"
                name="Downloads Count"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
