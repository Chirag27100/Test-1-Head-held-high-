/*
  # Create Leads Table

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `full_name` (text, not null) - Full name of the lead
      - `email` (text, not null) - Email address
      - `phone` (text) - Phone number
      - `company` (text) - Company name
      - `service_interest` (text) - Which service they are interested in
      - `message` (text) - Additional message or requirements
      - `source` (text, default 'website') - Where the lead came from
      - `created_at` (timestamptz) - When the lead was created

  2. Security
    - Enable RLS on `leads` table
    - Add policy for anonymous users to insert leads (public contact form)
    - No read access for anonymous users (leads are private)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  company text DEFAULT '',
  service_interest text DEFAULT '',
  message text DEFAULT '',
  source text DEFAULT 'website',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
