import type { Theme, FontSizes } from '@/types/theme';

export const defaultFontSizes: FontSizes = {
  sectionHeader: 'text-lg font-bold uppercase',
  subsectionHeader: 'text-base font-bold',
  body: 'text-sm',
  summary: 'text-sm italic',
};

export const themes: Theme[] = [
  {
    id: 'classic',
    name: 'Classic',
    colors: {
      primary: 'text-black',
      secondary: 'text-black',
    },
  },
  // Remove other themes since we're focusing on the classic theme
];