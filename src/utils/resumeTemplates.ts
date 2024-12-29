import type { ResumeTemplate } from '@/types/resume';

export const templates: Record<string, ResumeTemplate> = {
  google: {
    id: 'google',
    name: 'Google Style',
    colors: {
      primary: 'text-blue-700',
      border: 'border-blue-700',
      background: 'bg-white',
    },
    fonts: {
      heading: 'font-sans',
      body: 'font-sans',
    },
  },
  meta: {
    id: 'meta',
    name: 'Meta Style',
    colors: {
      primary: 'text-blue-600',
      border: 'border-blue-600',
      background: 'bg-gray-50',
    },
    fonts: {
      heading: 'font-sans',
      body: 'font-sans',
    },
  },
  amazon: {
    id: 'amazon',
    name: 'Amazon Style',
    colors: {
      primary: 'text-orange-600',
      border: 'border-orange-600',
      background: 'bg-white',
    },
    fonts: {
      heading: 'font-sans',
      body: 'font-sans',
    },
  },
};