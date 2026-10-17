export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  aspect: 'landscape' | 'portrait' | 'square';
}

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isStarted: boolean;
  isEnded: boolean;
}
