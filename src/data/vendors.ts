export interface VendorData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  serviceSlug: string;
  serviceName: string;
  expertise: string[];
  location: string;
  yearsInBusiness: number;
  projectsCompleted: number;
  rating: number;
  totalReviews: number;
  verified: boolean;
  featured: boolean;
  badge: string;
}

export const vendors: VendorData[] = [
  {
    id: 'dakshin-financial',
    name: 'Dakshin Financial Services',
    tagline: 'End-to-end finance & insurance solutions for businesses and individuals',
    description:
      'Dakshin Financial Services provides comprehensive B2B and retail financial solutions — from secured and unsecured lending products to full insurance coverage. A trusted partner for businesses seeking capital, individuals seeking protection, and enterprises navigating complex financial planning.',
    serviceSlug: 'Financial Services',
    serviceName: 'Financial Services',
    expertise: [
      'Home Loans',
      'Loan Against Property',
      'Business Loans (Unsecured)',
      'Personal Loans',
      'Overdraft Facilities',
      'Industrial Property Loans',
      'Lease Rental Discounting',
      'Life Insurance',
      'Health Insurance',
      'Vehicle Insurance',
    ],
    location: 'Bengaluru, Karnataka',
    yearsInBusiness: 12,
    projectsCompleted: 850,
    rating: 4.8,
    totalReviews: 214,
    verified: true,
    featured: true,
    badge: 'Finance & Insurance',
  },
  {
    id: 'paralegal-expert',
    name: 'Para Legal Specialist',
    tagline: 'Specialized government liaison, land approvals & legal documentation expert',
    description:
      'An experienced individual domain expert handling the full spectrum of paralegal work — from revenue office liaisons and land use approvals to certificates, khata transfers, and property tax assistance. Deep working knowledge of BBMP, BDA, BMRDA, KIADB, and all Karnataka government departments.',
    serviceSlug: 'Para Legal Assistance',
    serviceName: 'Para Legal Assistance',
    expertise: [
      'Revenue & DC Office Works',
      'Change of Land Use (All Planning Authorities)',
      'NOC – BMRDA, BDA, KIADB',
      'Plan Approval – BBMP & CBA',
      'Khata Transfers & Rectification',
      'Birth, Death, Marriage Certificates',
      'Caste, Income, Solvency Certificates',
      'Certified Revenue Documents (RTC)',
      'Instrumental Survey & Boundary Mapping',
      'Property Tax Assistance',
    ],
    location: 'Bengaluru, Karnataka',
    yearsInBusiness: 15,
    projectsCompleted: 1200,
    rating: 4.9,
    totalReviews: 389,
    verified: true,
    featured: true,
    badge: 'Government & Legal',
  },
  {
    id: 'vk-interiors-fabrication',
    name: 'VK Interiors',
    tagline: 'Precision fabrication, automation & commercial exterior specialists',
    description:
      'VK Interiors delivers high-quality MS and SS fabrication, CNC design works, and commercial exterior cladding solutions. From automated skylights and rolling shutters to ACP cladding, glazing, and HPL sheet installations — a single vendor for all structural and exterior fit-out requirements.',
    serviceSlug: 'fabrication',
    serviceName: 'Fabrication',
    expertise: [
      'Mild Steel (MS) Fabrication',
      'Stainless Steel (SS) Fabrication',
      'CNC Design Gates & Designer Gates',
      'Pergolas, Canopies & Railings',
      'Rolling Shutters & Automation',
      'MS CNC Cladding',
      'ACP Cladding',
      'WPC Panels',
      'Glazing & Fixed Glass Works',
      'HPL Sheet Cladding',
    ],
    location: 'Bengaluru, Karnataka',
    yearsInBusiness: 10,
    projectsCompleted: 430,
    rating: 4.7,
    totalReviews: 167,
    verified: true,
    featured: true,
    badge: 'Fabrication & Exteriors',
  },
  {
    id: 'vk-interiors-interior',
    name: 'VK Interiors',
    tagline: 'Custom interior & exterior design execution for commercial spaces',
    description:
      'VK Interiors brings design precision to commercial and residential spaces — specializing in CNC design works, exterior cladding systems, glazing, and bespoke architectural elements. Known for clean execution, material quality, and on-time delivery across Bengaluru projects.',
    serviceSlug: 'Interior Designers',
    serviceName: 'Interior Designers',
    expertise: [
      'CNC Design Gates & Designer Gates',
      'WPC Panels',
      'ACP Cladding',
      'Glazing Work',
      'Fixed Glass Works',
      'HPL Sheet Cladding',
      'CNC Design with Aluminium Cladding',
    ],
    location: 'Bengaluru, Karnataka',
    yearsInBusiness: 10,
    projectsCompleted: 310,
    rating: 4.7,
    totalReviews: 142,
    verified: true,
    featured: true,
    badge: 'Interiors & Exteriors',
  },
  {
    id: 'virgin-valleys-travel',
    name: "The Virgin Valley's",
    tagline: 'Curated corporate and leisure travel experiences across India and beyond',
    description:
      "The Virgin Valley's is HOC's exclusive travel partner, handling corporate travel management, bespoke holiday packages, group tours, and visa assistance. Trusted by businesses and individuals for reliable, competitively priced travel planning with 24/7 support.",
    serviceSlug: 'Travel Consultants',
    serviceName: 'Travel Consultants',
    expertise: [
      'Corporate Travel Management',
      'Domestic Holiday Packages',
      'International Holiday Packages',
      'Group Tours & Logistics',
      'Visa Assistance',
      'Flight & Hotel Bookings',
      'Custom Itinerary Planning',
    ],
    location: 'Bengaluru, Karnataka',
    yearsInBusiness: 8,
    projectsCompleted: 560,
    rating: 4.8,
    totalReviews: 203,
    verified: true,
    featured: true,
    badge: 'Travel & Tourism',
  },
  {
    id: 'property-consultant',
    name: 'Property Consultant',
    tagline: 'Individual expert handling residential & commercial property transactions',
    description:
      'An experienced individual property consultant managing end-to-end real estate transactions — buying, selling, leasing, and property management for both residential and commercial clients. Deep local market knowledge across Bengaluru with full legal documentation support.',
    serviceSlug: 'Property Consultants',
    serviceName: 'Property Consultants',
    expertise: [
      'Residential Property Sales & Purchase',
      'Commercial Property Transactions',
      'Property Leasing & Rentals',
      'Property Management',
      'Real Estate Investment Advisory',
      'Legal Documentation Support',
      'Tenant Screening & Management',
    ],
    location: 'Bengaluru, Karnataka',
    yearsInBusiness: 14,
    projectsCompleted: 720,
    rating: 4.8,
    totalReviews: 256,
    verified: true,
    featured: true,
    badge: 'Real Estate',
  },
  {
    id: 'creativee-solutions',
    name: 'Creativee Solutions',
    tagline: 'End-to-end turnkey construction for residential & commercial projects',
    description:
      'Creativee Solutions handles complete turnkey construction projects — from structural design and site development to road construction and project management. A reliable construction partner with a track record of on-time, quality delivery across Bengaluru and surrounding regions.',
    serviceSlug: 'Turnkey Constructions',
    serviceName: 'Turnkey Constructions',
    expertise: [
      'Turnkey Residential Construction',
      'Commercial Building Construction',
      'Structural Design & Engineering',
      'Site Development & Preparation',
      'Road & Infrastructure Construction',
      'End-to-End Project Management',
      'Safety Compliance & Quality Assurance',
    ],
    location: 'Bengaluru, Karnataka',
    yearsInBusiness: 11,
    projectsCompleted: 290,
    rating: 4.6,
    totalReviews: 118,
    verified: true,
    featured: true,
    badge: 'Construction',
  },
  {
    id: 'construction-material-supply',
    name: 'Construction Material Supplier',
    tagline: 'Reliable supply of quality construction materials for B2B projects',
    description:
      'An individual specialist managing construction material procurement and supply for B2B clients — covering cement, steel, aggregates, and finishing materials. Trusted by contractors and developers for consistent quality, competitive pricing, and reliable on-site delivery.',
    serviceSlug: 'construction-material',
    serviceName: 'Construction Material Supply',
    expertise: [
      'Cement & Concrete Supply',
      'Steel & TMT Bars',
      'Aggregates & Sand',
      'Bricks & Blocks',
      'Finishing Materials',
      'Bulk B2B Procurement',
      'On-Site Delivery',
    ],
    location: 'Bengaluru, Karnataka',
    yearsInBusiness: 9,
    projectsCompleted: 380,
    rating: 4.7,
    totalReviews: 145,
    verified: true,
    featured: true,
    badge: 'Materials Supply',
  },
];

export function getVendorsByServiceSlug(slug: string): VendorData[] {
  return vendors.filter((v) => v.serviceSlug === slug);
}

export function getFeaturedVendors(): VendorData[] {
  return vendors.filter((v) => v.featured);
}
