import {
  Plane,
  PartyPopper,
  Scale,
  Building2,
  TrendingUp,
  HardHat,
  Paintbrush,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  image: string;
  features: ServiceFeature[];
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: 'event-management',
    name: 'Event Management',
    tagline: 'Turning visions into spectacular events',
    description:
      'Full-service event planning and execution for corporate conferences, product launches, weddings, exhibitions, and more. Our team handles every detail so you can focus on what matters most.',
    icon: PartyPopper,
    color: 'text-rose-600',
    gradient: 'from-rose-500 to-pink-600',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'Corporate Events', description: 'Conferences, seminars, product launches, and team-building events.' },
      { title: 'Social Celebrations', description: 'Weddings, anniversaries, and milestone celebrations.' },
      { title: 'Exhibition Management', description: 'Trade show setup, booth design, and logistics coordination.' },
      { title: 'Technical Production', description: 'Sound, lighting, AV, and stage management.' },
    ],
    benefits: ['Stress-free planning', 'Creative concepts', 'On-time execution', 'Budget optimization'],
  },
  {
    slug: 'fabrication',
    name: 'Fabrication',
    tagline: 'Precision engineering, delivered',
    description:
      'Custom metal and material fabrication services for industrial, commercial, and architectural applications. CNC machining, welding, sheet metal work, and structural fabrication with tight tolerances and quick turnaround.',
    icon: Wrench,
    color: 'text-zinc-600',
    gradient: 'from-zinc-500 to-gray-700',
    image: 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'CNC Machining', description: 'Precision computer-controlled cutting and shaping of materials.' },
      { title: 'Welding Services', description: 'MIG, TIG, and arc welding for structural and decorative applications.' },
      { title: 'Sheet Metal Work', description: 'Cutting, bending, and forming of sheet metal components.' },
      { title: 'Custom Fabrication', description: 'Bespoke fabrication solutions for unique project requirements.' },
    ],
    benefits: ['High precision', 'Quick turnaround', 'Competitive pricing', 'Quality certifications'],
  },
  {
    slug: 'Financial Services',
    name: 'Financial Services',
    tagline: 'Strategic financial solutions for growth',
    description:
      'Comprehensive financial services including accounting, tax planning, business loans, investment advisory, and financial compliance. We help businesses and individuals make informed financial decisions.',
    icon: TrendingUp,
    color: 'text-emerald-600',
    gradient: 'from-emerald-500 to-green-600',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'Tax Planning', description: 'Strategic tax optimization and compliance for businesses and individuals.' },
      { title: 'Business Loans', description: 'Access to competitive business financing and credit solutions.' },
      { title: 'Accounting Services', description: 'Bookkeeping, auditing, and financial reporting.' },
      { title: 'Investment Advisory', description: 'Portfolio management and wealth creation strategies.' },
    ],
    benefits: ['Tax savings', 'Better cash flow', 'Regulatory compliance', 'Growth-oriented strategies'],
  },
  {
    slug: 'Interior Designers',
    name: 'Interior Designers',
    tagline: 'Spaces that inspire',
    description:
      'Transform your spaces with our interior design and execution services. From concept to completion, we create functional, aesthetically stunning environments for homes, offices, retail spaces, and hospitality venues.',
    icon: Paintbrush,
    color: 'text-pink-600',
    gradient: 'from-pink-500 to-rose-600',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'Residential Design', description: 'Complete home interiors from living rooms to kitchens and bedrooms.' },
      { title: 'Commercial Spaces', description: 'Office, retail, and hospitality interior design and fit-outs.' },
      { title: '3D Visualization', description: 'Photorealistic renderings before execution begins.' },
      { title: 'Turnkey Execution', description: 'From concept to handover with furniture and decor sourcing.' },
    ],
    benefits: ['Personalized designs', 'Quality materials', 'On-budget delivery', 'Post-completion support'],
  },
  {
    slug: 'Para Legal Assistance',
    name: 'Para Legal Assistance',
    tagline: 'Expert legal support you can rely on',
    description:
      'Professional paralegal services including document preparation, legal research, contract review, and compliance assistance. We bridge the gap between legal complexity and business needs.',
    icon: Scale,
    color: 'text-slate-700',
    gradient: 'from-slate-600 to-gray-800',
    image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'Document Preparation', description: 'Drafting and reviewing legal documents, contracts, and agreements.' },
      { title: 'Legal Research', description: 'Comprehensive research on statutes, case law, and regulations.' },
      { title: 'Compliance Assistance', description: 'Ensure business operations meet regulatory requirements.' },
      { title: 'Litigation Support', description: 'Case management, discovery, and trial preparation assistance.' },
    ],
    benefits: ['Cost-effective legal support', 'Faster turnaround', 'Reduced legal risk', 'Expert guidance'],
  },
  {
    slug: 'Property Consultants',
    name: 'Property Consultants',
    tagline: 'Your trusted partner in real estate',
    description:
      'End-to-end property services including buying, selling, leasing, and property management. Whether commercial or residential, our experts guide you through every step of the real estate journey.',
    icon: Building2,
    color: 'text-teal-600',
    gradient: 'from-teal-500 to-cyan-600',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'Property Sales', description: 'Buy and sell residential and commercial properties with expert guidance.' },
      { title: 'Leasing Services', description: 'Find or list rental properties with tenant screening and management.' },
      { title: 'Property Management', description: 'Complete management of property maintenance and operations.' },
      { title: 'Investment Advisory', description: 'Strategic advice on real estate investments and portfolio building.' },
    ],
    benefits: ['Market expertise', 'Verified listings', 'Legal documentation support', 'Post-sale service'],
  },
  {
    slug: 'Travel Consultants',
    name: 'Travel Consultants',
    tagline: 'Curated journeys, unforgettable memories',
    description:
      'From corporate retreats to leisure getaways, our travel services cover everything. Flight bookings, hotel reservations, visa assistance, and custom itinerary planning -- all handled by experienced travel consultants.',
    icon: Plane,
    color: 'text-sky-600',
    gradient: 'from-sky-500 to-blue-600',
    image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'Corporate Travel', description: 'End-to-end business travel management with preferential rates.' },
      { title: 'Holiday Packages', description: 'Curated domestic and international vacation packages.' },
      { title: 'Visa Assistance', description: 'Hassle-free visa processing for all major destinations.' },
      { title: 'Group Tours', description: 'Organized group travel with expert guides and logistics.' },
    ],
    benefits: ['Competitive pricing', '24/7 travel support', 'Customized itineraries', 'Trusted partnerships'],
  },
  {
    slug: 'Turnkey Constructions',
    name: 'Turnkey Constructions',
    tagline: 'Building strong foundations',
    description:
      'Civil engineering and construction services covering structural design, site development, road construction, and infrastructure projects. We deliver quality construction with safety and precision.',
    icon: HardHat,
    color: 'text-orange-600',
    gradient: 'from-orange-500 to-amber-600',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'Structural Design', description: 'Engineering design for residential, commercial, and industrial structures.' },
      { title: 'Site Development', description: 'Land preparation, grading, and utility installation.' },
      { title: 'Road Construction', description: 'Highway, road, and bridge construction projects.' },
      { title: 'Project Management', description: 'End-to-end oversight of civil construction projects.' },
    ],
    benefits: ['Quality assurance', 'On-time delivery', 'Cost-effective solutions', 'Safety compliance'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
