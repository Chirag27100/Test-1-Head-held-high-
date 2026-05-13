import {
  Plane,
  PartyPopper,
  Scale,
  Building2,
  TrendingUp,
  HardHat,
  Paintbrush,
  Wrench,
  Package,
  Factory,
  PawPrint,
  Cog,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface SubService {
  title: string;
  description: string;
  image: string;
  highlights: string[];
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
  inHouse?: boolean;
  subServices?: SubService[];
}

export const services: Service[] = [
  {
    slug: 'construction-material',
    name: 'Construction Material Supply',
    tagline: 'Quality materials, reliable supply',
    description:
      'End-to-end construction material procurement and supply for B2B projects. From cement and steel to aggregates and finishing materials, we connect businesses with trusted individual suppliers who ensure consistent quality, competitive pricing, and reliable on-site delivery.',
    icon: Package,
    color: 'text-stone-600',
    gradient: 'from-stone-500 to-amber-700',
    image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'Cement & Concrete', description: 'Supply of OPC, PPC, and ready-mix concrete for all project scales.' },
      { title: 'Steel & TMT Bars', description: 'Structural steel, TMT bars, and reinforcement materials to specification.' },
      { title: 'Aggregates & Sand', description: 'M-sand, P-sand, aggregates, and granular fill materials.' },
      { title: 'Finishing Materials', description: 'Tiles, bricks, blocks, and surface finishing materials for project completion.' },
    ],
    benefits: ['Competitive bulk pricing', 'On-site delivery', 'Consistent quality', 'Reliable supply chain'],
  },
  {
    slug: 'event-management',
    name: 'Event Management',
    tagline: 'Turning visions into spectacular events',
    description:
      'Full-service event planning and execution for corporate conferences, product launches, weddings, exhibitions, and more. Our team handles every detail so you can focus on what matters most.',
    icon: PartyPopper,
    color: 'text-rose-600',
    gradient: 'from-rose-500 to-pink-600',
    image: 'https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
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
    tagline: 'Comprehensive Fabrication Services',
    description:
      'Custom metal and material fabrication services for industrial, commercial, and architectural applications. CNC designing, welding, sheet metal work, aluminium fabrication, and structural fabrication with tight tolerances and quick turnaround.',
    icon: Wrench,
    color: 'text-zinc-600',
    gradient: 'from-zinc-500 to-gray-700',
    image: 'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'CNC Designing', description: 'Precision computer-controlled design, cutting, and shaping of materials for exact tolerances.' },
      { title: 'Welding Services', description: 'MIG, TIG, and arc welding for structural and decorative applications.' },
      { title: 'Aluminium Welding', description: 'Specialist aluminium welding for lightweight structural, architectural, and industrial components.' },
      { title: 'Sheet Metal Work', description: 'Cutting, bending, and forming of sheet metal components in mild steel, aluminium, and stainless steel.' },
      { title: 'Custom Fabrication', description: 'Bespoke fabrication solutions for unique project requirements.' },
    ],
    benefits: ['High precision', 'Quick turnaround', 'Competitive pricing', 'Quality certifications'],
    subServices: [
      {
        title: 'Metal Fabrication',
        description: 'VK Interiors delivers high-quality Mild Steel (MS) and Stainless Steel (SS) fabrication, Computer Numerical Control (CNC) design works, and commercial exterior cladding solutions. From automated skylights and rolling shutters to Aluminium Composite Panel (ACP) cladding, glazing, and High Pressure Laminate (HPL) sheet installations — a single vendor for all structural and exterior fit-out requirements. Automation in skylights, rolling shutters, and gates. Rapicon Wall Panels available. Works across mild steel, aluminium, and stainless steel.',
        image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        highlights: ['MS & SS Fabrication', 'CNC Design Works', 'ACP Cladding', 'Automated Skylights & Shutters', 'Glazing & HPL Installations', 'Rapicon Wall Panels'],
      },
    ],
  },
  {
    slug: 'Financial Services',
    name: 'Financial Services',
    tagline: 'Strategic financial solutions for growth',
    description:
      'Comprehensive financial services including accounting, tax planning, income tax filing, business loans, investment advisory, and financial compliance. We help businesses and individuals make informed financial decisions.',
    icon: TrendingUp,
    color: 'text-emerald-600',
    gradient: 'from-emerald-500 to-green-600',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'Income Tax Filing', description: 'Accurate and timely ITR filing for individuals, freelancers, and businesses — fully compliant with Indian tax laws.' },
      { title: 'Tax Planning', description: 'Strategic tax optimization and compliance for businesses and individuals.' },
      { title: 'Business Loans', description: 'Access to competitive business financing and credit solutions.' },
      { title: 'Accounting Services', description: 'Bookkeeping, auditing, and financial reporting.' },
      { title: 'Investment Advisory', description: 'Portfolio management and wealth creation strategies.' },
    ],
    benefits: ['Income tax filing', 'Tax savings', 'Better cash flow', 'Regulatory compliance', 'Growth-oriented strategies'],
    subServices: [
      {
        title: 'Financial Assistance & Compliance',
        description: 'End-to-end financial compliance support for individuals and businesses — from income tax filing and GST registration to bookkeeping, MCA filings, and audit preparation. Handled by Dakshin Financial Services, ensuring accuracy and deadline compliance every time.',
        image: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        highlights: [
          'ITR filing — individuals & businesses',
          'GST registration & returns',
          'Bookkeeping & financial reports',
          'TDS filing & reconciliation',
          'MCA & ROC compliance',
          'Audit support & preparation',
        ],
      },
    ],
  },
  {
    slug: 'industrial-visit',
    name: 'Industrial Visit',
    tagline: 'Structured exposure to real-world operations',
    description:
      'End-to-end industrial visit coordination for educational institutions, corporate teams, and professional groups. We handle factory liaisons, safety briefings, guided tours, and post-visit documentation — all managed in-house by HOC specialists.',
    icon: Factory,
    color: 'text-indigo-600',
    gradient: 'from-indigo-500 to-violet-600',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'Factory & Plant Tours', description: 'Coordinated visits to manufacturing, processing, and industrial facilities.' },
      { title: 'Safety & Compliance Briefings', description: 'Pre-visit safety inductions and compliance documentation for all participants.' },
      { title: 'Expert-Led Guided Tours', description: 'Industry specialists walk groups through operations with real-time commentary.' },
      { title: 'Post-Visit Reports', description: 'Detailed documentation, certificates of participation, and learning summaries.' },
    ],
    benefits: ['Fully managed end-to-end', 'In-house HOC team', 'Suitable for institutions & corporates', 'Customised itineraries'],
    inHouse: true,
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
      'Professional paralegal services including document preparation, legal research, contract review, and compliance assistance. Our team specialises in revenue liaising — coordinating directly with Revenue and DC offices for land records, RTC extracts, mutation entries, survey settlements, and all government liaison work across Karnataka. We bridge the gap between legal complexity and business needs.',
    icon: Scale,
    color: 'text-slate-700',
    gradient: 'from-slate-600 to-gray-800',
    image: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'Revenue Liaising', description: 'Direct coordination with Revenue and DC offices for land records, RTC extracts, mutation entries, and survey settlements across Karnataka.' },
      { title: 'Document Preparation', description: 'Drafting and reviewing legal documents, contracts, and agreements.' },
      { title: 'Legal Research', description: 'Comprehensive research on statutes, case law, and regulations.' },
      { title: 'Compliance Assistance', description: 'Ensure business operations meet regulatory requirements.' },
      { title: 'Litigation Support', description: 'Case management, discovery, and trial preparation assistance.' },
    ],
    benefits: ['Cost-effective legal support', 'Faster turnaround', 'Reduced legal risk', 'Expert guidance'],
  },
  {
    slug: 'pet-industry',
    name: 'Pet Services',
    tagline: 'Premium care for your pets, handled with love',
    description:
      'Comprehensive pet care services for pet owners — from luxurious swimming pool sessions and certified boarding to structured day care programs. HOC connects you with trusted, in-house approved pet care professionals who treat your pets like family.',
    icon: PawPrint,
    color: 'text-amber-600',
    gradient: 'from-amber-500 to-orange-500',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'Pet Swimming Pool', description: 'Supervised hydrotherapy and recreational swimming sessions in clean, temperature-controlled pools for dogs and other pets.' },
      { title: 'Boarding Services', description: 'Safe, comfortable overnight boarding with round-the-clock supervision, feeding schedules, and daily activity routines.' },
      { title: 'Day Care Programs', description: 'Structured daytime care with socialisation, play sessions, and trained staff — perfect for working pet owners.' },
      { title: 'Pet Relocation', description: 'End-to-end pet relocation services — domestic and international. Handling transport logistics, vet documentation, airline coordination, and safe handover at destination.' },
    ],
    benefits: ['In-house HOC managed', 'Verified pet care professionals', 'Safe & hygienic facilities', 'Flexible booking options'],
    inHouse: true,
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
      'Civil engineering and construction services covering structural design, site development, road construction, swimming pool construction, and infrastructure projects. We deliver quality construction with safety and precision.',
    icon: HardHat,
    color: 'text-orange-600',
    gradient: 'from-orange-500 to-amber-600',
    image: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      { title: 'Structural Design', description: 'Engineering design for residential, commercial, and industrial structures.' },
      { title: 'Site Development', description: 'Land preparation, grading, and utility installation.' },
      { title: 'Road Construction', description: 'Highway, road, and bridge construction projects.' },
      { title: 'Project Management', description: 'End-to-end oversight of civil construction projects.' },
    ],
    benefits: ['Quality assurance', 'On-time delivery', 'Cost-effective solutions', 'Safety compliance'],
    subServices: [
      {
        title: 'Swimming Pool Construction',
        description:
          'Custom-designed residential and commercial swimming pools built to your exact specifications. From initial excavation and structural shell work to tiling, filtration systems, lighting, and finishing — we handle the complete build with precision and quality at every stage.',
        image: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        highlights: [
          'Residential & commercial pools',
          'Custom shape & size design',
          'Full structural shell construction',
          'Filtration & pump systems',
          'Tiling, coping & waterproofing',
          'Lighting & water features',
          'Post-build maintenance support',
        ],
      },
    ],
  },
  {
    slug: 'die-casting',
    name: 'Die Casting',
    tagline: 'Precision high-pressure aluminium die casting at production scale',
    description:
      'End-to-end high-pressure aluminium die casting for automotive, electronics, and industrial machinery applications. Operating 5 machines from 60 to 400 ton (HMT & Buhler), producing parts from 5g to 1,000g across aluminium alloys. Annual program capacity of 1,000 to 100,000 units. From tooling design and prototype development to precision casting, CNC machining, fettling, shot blasting, and powder coating — a single manufacturing partner covering the full production lifecycle. ISO 9001:2015 certified with 35+ years of production-grade manufacturing experience.',
    icon: Cog,
    color: 'text-slate-600',
    gradient: 'from-slate-600 to-zinc-700',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      {
        title: 'High-Pressure Die Casting',
        description:
          'Low-to-mid volume production using 5 machines: HMT 60T, 160T, 250T, 400T and Buhler 250T — each paired with a dedicated furnace. Parts from 5g to 1,000g in any aluminium alloy. Annual program runs of 1,000 to 100,000 units.',
      },
      {
        title: 'Tool Design & Manufacture',
        description:
          'New mold design and manufacture, smooth tooling transfer programs, and process conversion to die casting — supported through sister concern Dolphin Die Cast (P) Ltd.',
      },
      {
        title: 'Precision Machining',
        description:
          'CNC machining of cast components to tight tolerances for ready-to-assemble delivery, coordinated via Dolphin Die Cast (P) Ltd.',
      },
      {
        title: 'Finishing Services',
        description:
          'In-house fettling and shot blasting. Extended finishing — vibro, CNC machining, and powder coating — available through sister concern Dolphin Die Cast (P) Ltd. Single-source supply chain to your door.',
      },
    ],
    benefits: [
      'ISO 9001:2015 certified',
      'Family-owned — direct accountability since 1989',
      '5-machine fleet: 60T to 400T (HMT & Buhler)',
      'Parts 5g–1,000g, programs 1K–100K units/yr',
      'Integrated tooling, casting, machining & finishing',
      'Automotive, electronics & industrial machinery sectors',
    ],
    subServices: [
      {
        title: 'Component Design & Prototyping',
        description:
          'Component redesign, application engineering, and prototype development before full production launch. Teams work directly with customer engineering to shorten ramp-up and reduce pre-production risk.',
        image:
          'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        highlights: [
          'Component redesign & application engineering',
          'Prototype development',
          'Design-for-manufacturability review',
          'Tooling transfer & conversion support',
          'Pre-production risk assessment',
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
