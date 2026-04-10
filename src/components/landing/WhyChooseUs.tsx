import { ShieldCheck, Users, Layers, HandshakeIcon } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'In-House Approved Specialists Only',
    description: 'Every specialist on our platform is personally vetted by the HOC team — not just listed. Certifications, track records, and domain expertise are verified before any engagement.',
  },
  {
    icon: Layers,
    title: '9 Service Categories, One Partner',
    description: 'From civil construction and legal compliance to finance, interiors, and travel — one relationship covers all your B2B professional service needs across your organization.',
  },
  {
    icon: HandshakeIcon,
    title: 'We Own the Delivery Outcome',
    description: 'We don\'t just make introductions. HOC actively manages specialist engagement, milestone tracking, and communication — so the project stays on track from brief to delivery.',
  },
  {
    icon: Users,
    title: 'Built for Enterprise Complexity',
    description: 'Our platform was designed specifically for B2B clients with complex, multi-vendor, high-stakes requirements — not individuals looking for quick fixes.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full mb-6 border border-teal-200/60">
              <span className="text-sm font-semibold">Why HOC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Not a Marketplace. A B2B Delivery Partner.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Most platforms list vendors and step back. Head Held High operates differently — we own the outcome, not just the introduction. Every specialist is handpicked, every project is actively managed, and every client gets direct HOC accountability.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-teal-300 hover:shadow-md transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1.5 text-sm">{reason.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats panel */}
          <div className="bg-gradient-to-br from-gray-900 to-teal-950 rounded-3xl p-10 text-white">
            <h3 className="text-xl font-bold mb-8 text-gray-200">HOC at a Glance</h3>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { value: '18+', label: 'Years Founder\nExperience' },
                { value: '500+', label: 'B2B Clients\nServed' },
                { value: '2000+', label: 'Projects\nDelivered' },
                { value: '98%', label: 'Client\nSatisfaction' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-all">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400 leading-tight whitespace-pre-line">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
              <p className="text-teal-300 text-sm font-semibold mb-1">Founded in Bengaluru</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Head Held High was built to serve the B2B professional services gap in India — starting in Bengaluru and expanding across 15+ cities. Every specialist in our network has been personally approved by the founding team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
