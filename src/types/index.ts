export interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  image_url: string | null;
  live_url: string | null;
  github_url: string | null;
  created_at: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  description: string;
  date_start: string;
  date_end: string;
  type: 'education' | 'work' | 'achievement';
  sort_order: number;
  created_at: string;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  published_at: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}
