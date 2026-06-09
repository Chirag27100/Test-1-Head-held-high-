/*
  # Create vendors table

  1. New Tables
    - `vendors`
      - `id` (uuid, primary key) - Unique identifier for each vendor
      - `name` (text) - Vendor business name
      - `category` (text) - Service category (matches our service slugs)
      - `tagline` (text) - Short description/tagline
      - `description` (text) - Detailed vendor description
      - `expertise` (text[]) - Array of expertise areas
      - `years_in_business` (integer) - How long they've been operating
      - `projects_completed` (integer) - Total projects completed
      - `rating` (numeric) - Average rating out of 5
      - `total_reviews` (integer) - Number of reviews
      - `location` (text) - City/region
      - `verified` (boolean) - Whether vendor is verified
      - `featured` (boolean) - Whether to feature on homepage
      - `image_url` (text) - Vendor logo or profile image
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp

  2. Security
    - Enable RLS on `vendors` table
    - Add policy for public read access (vendors are publicly viewable)
*/

CREATE TABLE IF NOT EXISTS vendors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  tagline text NOT NULL,
  description text NOT NULL,
  expertise text[] NOT NULL DEFAULT '{}',
  years_in_business integer NOT NULL DEFAULT 1,
  projects_completed integer NOT NULL DEFAULT 0,
  rating numeric(2,1) NOT NULL DEFAULT 5.0 CHECK (rating >= 0 AND rating <= 5),
  total_reviews integer NOT NULL DEFAULT 0,
  location text NOT NULL,
  verified boolean NOT NULL DEFAULT true,
  featured boolean NOT NULL DEFAULT false,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE vendors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Vendors are viewable by everyone"
  ON vendors FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert sample vendors for each category
INSERT INTO vendors (name, category, tagline, description, expertise, years_in_business, projects_completed, rating, total_reviews, location, verified, featured) VALUES
  ('TechVista Industries', 'industrial-visit', 'Premier Industrial Education Partners', 'Leading provider of industrial visits and educational tours to top manufacturing facilities across India. We specialize in connecting students and professionals with real-world industry experience.', ARRAY['Manufacturing Tours', 'Tech Hub Visits', 'Educational Programs', 'Corporate Training'], 8, 450, 4.9, 128, 'Bangalore', true, true),
  ('EduConnect Tours', 'industrial-visit', 'Bridging Academia and Industry', 'Customized industrial visit programs for educational institutions. We have partnerships with 100+ industries across multiple sectors.', ARRAY['College Programs', 'Industrial Partnerships', 'Safety Training', 'Group Management'], 5, 280, 4.7, 85, 'Mumbai', true, false),
  
  ('GreenCycle Solutions', 'waste-management', 'Sustainable Waste Management Experts', 'Award-winning waste management company specializing in zero-waste solutions for businesses and municipalities. ISO certified with 12+ years of experience.', ARRAY['Waste Auditing', 'Recycling Programs', 'E-waste Management', 'Composting Solutions'], 12, 620, 4.8, 245, 'Delhi', true, true),
  ('EcoWaste Pro', 'waste-management', 'Green Solutions for Modern Cities', 'Complete waste management services including collection, segregation, and disposal. Helping businesses achieve sustainability goals.', ARRAY['Commercial Waste', 'Medical Waste', 'Industrial Waste', 'Compliance'], 7, 380, 4.6, 142, 'Pune', true, false),
  
  ('Wanderlust Travels', 'travel', 'Creating Memorable Journeys', 'Full-service travel agency with 15 years of experience. Specializing in corporate travel, holiday packages, and visa assistance for international destinations.', ARRAY['Corporate Travel', 'International Tours', 'Visa Services', 'Group Bookings'], 15, 5200, 4.9, 892, 'Delhi', true, true),
  ('GlobalWings Travel', 'travel', 'Your Journey, Our Passion', 'Trusted travel partner for businesses and families. Competitive pricing, 24/7 support, and customized itineraries for all your travel needs.', ARRAY['Holiday Packages', 'Flight Bookings', 'Hotel Reservations', 'Travel Insurance'], 10, 3800, 4.7, 634, 'Mumbai', true, false),
  
  ('Elite Events & Co', 'event-management', 'Crafting Unforgettable Experiences', 'Premium event management company handling everything from corporate conferences to grand weddings. Known for flawless execution and creative concepts.', ARRAY['Corporate Events', 'Weddings', 'Product Launches', 'Exhibition Management'], 9, 780, 4.9, 326, 'Bangalore', true, true),
  ('Celebration Masters', 'event-management', 'Every Event is a Masterpiece', 'Full-service event planners with expertise in social celebrations, corporate events, and large-scale exhibitions. Your vision, our execution.', ARRAY['Social Events', 'Team Building', 'Virtual Events', 'Venue Management'], 6, 420, 4.8, 198, 'Hyderabad', true, false),
  
  ('LegalPro Services', 'para-legal', 'Professional Paralegal Support', 'Experienced paralegal firm providing document preparation, legal research, and compliance assistance to law firms and businesses across India.', ARRAY['Document Drafting', 'Legal Research', 'Contract Review', 'Litigation Support'], 11, 1850, 4.8, 412, 'Delhi', true, true),
  ('DocuLegal Solutions', 'para-legal', 'Your Legal Documentation Partner', 'Specialized in corporate legal documentation, compliance, and research services. Fast turnaround and competitive pricing.', ARRAY['Corporate Compliance', 'IPR Services', 'Due Diligence', 'Regulatory Filing'], 8, 920, 4.6, 234, 'Mumbai', true, false),
  
  ('Prime Property Advisors', 'property', 'Your Trusted Real Estate Partner', 'Leading real estate consultancy with extensive portfolio of residential and commercial properties. End-to-end support for buying, selling, and leasing.', ARRAY['Residential Sales', 'Commercial Leasing', 'Property Management', 'Investment Advisory'], 14, 1240, 4.9, 568, 'Bangalore', true, true),
  ('UrbanSpace Realty', 'property', 'Finding Your Perfect Space', 'Expert real estate services for modern urban living. Specializing in premium properties and investment opportunities.', ARRAY['Luxury Properties', 'Rental Services', 'Property Valuation', 'Legal Support'], 9, 680, 4.7, 312, 'Gurgaon', true, false),
  
  ('FinanceFirst Advisors', 'finance', 'Strategic Financial Solutions', 'Comprehensive financial services including tax planning, business loans, accounting, and investment advisory. Helping businesses and individuals achieve financial success.', ARRAY['Tax Planning', 'Business Finance', 'Investment Advisory', 'Accounting Services'], 13, 2100, 4.8, 745, 'Mumbai', true, true),
  ('WealthGrow Partners', 'finance', 'Growing Your Financial Future', 'Expert financial consultants specializing in wealth management, tax optimization, and business financing solutions.', ARRAY['Wealth Management', 'Tax Optimization', 'Loan Facilitation', 'Financial Planning'], 10, 1450, 4.7, 521, 'Bangalore', true, false),
  
  ('BuildRight Contractors', 'civil', 'Building Excellence Since 2010', 'Premier civil construction company with expertise in residential, commercial, and infrastructure projects. Quality construction with safety compliance.', ARRAY['Structural Design', 'Road Construction', 'Building Construction', 'Project Management'], 13, 340, 4.9, 287, 'Pune', true, true),
  ('SolidGround Engineering', 'civil', 'Strong Foundations, Lasting Structures', 'Civil engineering and construction services for all types of projects. Licensed engineers and certified contractors.', ARRAY['Site Development', 'Infrastructure', 'Renovation', 'Quality Assurance'], 9, 215, 4.6, 156, 'Chennai', true, false),
  
  ('DesignScape Interiors', 'interior', 'Spaces That Inspire Living', 'Award-winning interior design firm creating stunning residential and commercial spaces. From concept to completion with 3D visualization.', ARRAY['Residential Design', 'Commercial Interiors', '3D Visualization', 'Turnkey Execution'], 11, 580, 4.9, 392, 'Delhi', true, true),
  ('ModernLiving Designs', 'interior', 'Contemporary Spaces, Timeless Design', 'Expert interior designers specializing in modern, functional spaces for homes and offices. Complete design and execution services.', ARRAY['Office Design', 'Home Interiors', 'Modular Solutions', 'Furniture Design'], 7, 340, 4.7, 218, 'Mumbai', true, false),
  
  ('PrecisionFab Engineering', 'fabrication', 'Precision in Every Product', 'Custom metal fabrication specialists with CNC machining, welding, and sheet metal capabilities. Serving industrial and commercial clients.', ARRAY['CNC Machining', 'Welding Services', 'Sheet Metal Work', 'Custom Fabrication'], 10, 1580, 4.8, 423, 'Bangalore', true, true),
  ('MetalCraft Industries', 'fabrication', 'Crafting Quality Metal Solutions', 'Professional fabrication services for architectural, industrial, and decorative applications. Fast turnaround and quality certifications.', ARRAY['Structural Fabrication', 'Architectural Metal', 'Industrial Components', 'Quality Testing'], 8, 920, 4.6, 267, 'Pune', true, false);
