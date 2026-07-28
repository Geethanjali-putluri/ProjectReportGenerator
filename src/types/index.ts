export type NavPage =
  | 'home'
  | 'about'
  | 'subjects'
  | 'ai-layer'
  | 'generator'
  | 'analytics'
  | 'live-demo';

export interface ReportFormData {
  projectTitle: string;
  studentName: string;
  registerNumber: string;
  guideName: string;
  department: string;
  college: string;
  subject: string;
  technologies: string;
  projectDescription: string;

  // AI Generated Sections
  abstract: string;
  problemStatement: string;
  objectives: string;
  methodology: string;
  systemDesign: string;
  modules: string;
  results: string;
  conclusion: string;
  futureScope: string;
  references: string;
  acknowledgement: string;

  certificateDetails: {
    academicYear: string;
    hodName: string;
    principalName: string;
  };
}

export interface SavedReport {
  id: string;
  timestamp: string;
  data: ReportFormData;
}

export interface SubjectInfo {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  topics: {
    name: string;
    description: string;
    usefulness: string;
    codeExample?: string;
  }[];
  realWorldApplications: string[];
  softwareDevUsefulness: string;
}

export interface AnalyticsData {
  totalGenerated: number;
  totalDownloads: number;
  topSubject: string;
  avgAiScore: number;
  subjectDistribution: { subject: string; count: number }[];
  downloadFormats: { name: string; value: number }[];
  monthlyTrends: { month: string; reports: number; downloads: number }[];
}
