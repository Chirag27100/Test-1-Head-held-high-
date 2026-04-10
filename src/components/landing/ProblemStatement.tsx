import { XCircle, CheckCircle2 } from 'lucide-react';

const problems = [
  'Unreliable vendors who overpromise and underdeliver',
  'No accountability once the contract is signed',
  'Wasted weeks sourcing and vetting multiple agencies',
  'Projects stalled because the wrong specialist was engaged',
  'Zero visibility into project progress after kickoff',
];

const solutions = [
  'In-house approved Tier 1 specialists with verified track records',
  'End-to-end ownership — we stay accountable throughout delivery',
  'Single point of contact across all 9 service categories',
  'Specialists matched to your exact problem domain',
  'Active milestone tracking and relationship management',
];

export default function ProblemStatement() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-700 rounded-full mb-5 border border-red-200/60">
            <span className="text-sm font-semibold">The Problem With The Market Today</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why B2B Service Sourcing Keeps Failing Enterprises
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Businesses across Bengaluru and beyond lose time, money, and projects every year because the professional services market is fragmented, unverified, and unaccountable. Head Held High was built to fix this.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem side */}
          <div className="bg-red-50/50 border border-red-200/60 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Without Head Held High</h3>
            </div>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution side */}
          <div className="bg-teal-50/50 border border-teal-200/60 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">With Head Held High</h3>
            </div>
            <div className="space-y-4">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder credibility strip */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-teal-950 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-xl">
            <span className="text-2xl font-bold text-white">H</span>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-lg mb-1">Built by an 18-year industry veteran</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              Our founder spent 18 years watching enterprises lose projects to bad vendors. Head Held High was started specifically to solve this — by building a curated network of Tier 1 specialists with full end-to-end delivery accountability. This is a B2B-first platform, not a general marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
