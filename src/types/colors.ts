export interface ColorSet {
  id: string;
  name: string;
  colors: {
    headers: string;
    body: string;
    accents: string;
  };
}

export interface ColorSettings {
  selectedSet: string;
}