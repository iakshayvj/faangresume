export interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
    medium?: string;
    substack?: string;
    youtube?: string;
    summary?: string;
  };
  experience: Experience[];
  education: Education[];
  skills: string[];
}

export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  metrics: string[];
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  graduationDate: string;
  gpa?: number;
  activities?: string[];
}