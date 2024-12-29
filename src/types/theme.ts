export interface ThemeColors {
  primary: string;
  secondary: string;
}

export interface Theme {
  id: string;
  name: string;
  colors: ThemeColors;
}

export interface FontSizes {
  sectionHeader: string;
  subsectionHeader: string;
  body: string;
  summary: string;
}

export interface ViewSettings {
  theme: string;
  fontSizes: FontSizes;
}