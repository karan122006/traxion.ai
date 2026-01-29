import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Benefit {
  id: string;
  stat: string;
  label: string;
  detail: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}