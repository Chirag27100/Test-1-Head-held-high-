export interface Vendor {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  expertise: string[];
  years_in_business: number;
  projects_completed: number;
  rating: number;
  total_reviews: number;
  location: string;
  verified: boolean;
  featured: boolean;
  image_url?: string;
  created_at: string;
  updated_at: string;
}
